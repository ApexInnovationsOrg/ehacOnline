<?php
// Make sure this is defined
if (!defined('__DEBUG__')) define('__DEBUG__', false);

/**
 * Abstract base class to iterate through all data table classes
 *
 * This class is responsible iterating through the named table
 *
 * @copyright	Copyright (c) 2010 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
abstract class DBTables implements SeekableIterator {
	// *** Protected Properties ***
	protected $child_db;			// This is really just a pointer to the static class variable from child class
	protected $child_table;			// This is really just a pointer to the static class variable from child class
	protected $a = array();			// The array of iterated objects
	protected $i = 0;				// The current index into the array
	

	// *** Public Methods ***
	// Constructs the iterator by querying the database
	// Note: only set $sparseLoad true when loading large datasets, as iteration over a sparsely loaded dataset requires 1 additional SQL call to fill out each object
	public function __construct(&$db, &$table, $where, $orderBy, $from, $sparseLoad, $startRow, $count) {
		try {
			$this->child_db = $db;
			$this->child_table = $table;
			$sql = "SELECT DISTINCT `$table`." . ($sparseLoad ? '`ID`' : '*') . " FROM $from " . (($where != '') ? "WHERE ($where) " : '') . (($orderBy != '') ? " ORDER BY $orderBy" : '');
			if (($startRow != 0 || $count != 0) && is_int($startRow) && is_int($count) && ($startRow >= 0) && ($count > 0)) {
				$sql .= ' LIMIT ' . (integer)$startRow . ',' . (integer)$count;
			}
			
			if (__DEBUG__) echo('<!-- SQL: ' . htmlentities($sql) . " -->\n");
			$rst = $this->child_db->query($sql);
			
			while ($rst && $row = $rst->fetch_assoc()) {
				// Add each ID to the array
				if ($sparseLoad) {
					array_push($this->a, $row['ID']);
				} else {
					$single_object_name = substr($table, 0, -1);
					$class = get_class($this);
					$prefix = substr($class, 0, 2);
					$newClass = $prefix . $single_object_name;
					array_push($this->a, new $newClass($row));
				}
			}
		} catch (Exception $e) {
			var_dump(debug_backtrace());
			$this->throwException('', 'unable to instantiate the object specified. ' . $e->getMessage());
		}
	}

	// Convert object to a string
	public function __toString() {
		try {
			$list = '';
			for ($i = 0; $i < count($this->a); $i++) {
				$list .= "\t[$i] => " . $this->a[$i]->ID . "\n";
			}
			return get_class($this) . " Object\n(\n$list)\n";
		} catch (Exception $e) {
			$this->throwException('__toString()', 'unable to convert object to string. ' . $e->getMessage());
		}
	}
	
	// Returns the count of items in the array
	final public function count() { return count($this->a); }

	// Returns the current item in the array (as the object type)
	final public function current() {
		$item = $this->a[$this->i];
		if (is_numeric($item)) $item = new $this->child_table($item);		// Loaded with $sparseLoad = true

		return $item;
	}

	// Returns the array pointer
	final public function key() { return $this->i; }

	// Increases the array pointer
	final public function next() { $this->i++; }

	// Moves the array pointer to the index specified
	final public function seek($index) { $this->i = $index; }
	
	// Rewinds array pointer
	final public function rewind() { $this->i = 0; }

	// Determines if we have a valid array pointer
	final public function valid() { return $this->i < count($this->a); }


	// *** Private Methods ***
	// Format a thrown exception
	private function throwException($where, $error) {
		throw new Exception(get_class($this) . "::$where - $error");
	}
}


/**
 * Abstract base class for all data table classes
 *
 * This class is responsible inserting, updating, deleting and selecting data from the named table
 *
 * @copyright	Copyright (c) 2010 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
abstract class DBTable {
	// *** Protected Properties ***
	protected $child_db;				// This is really just a pointer to the static class variable from child class
	protected $child_table;				// This is really just a pointer to the static class variable from child class
	protected $child_schema;			// This is really just a pointer to the static class variable from child class
	protected $values = array();		// This object's data values
	protected $old_values = array();	// This object's original data values prior to a save


	// *** Public Methods ***
	// Called to instantiate a table object
	public function __construct(&$db, &$table, &$schema, $index) {
		try {
			// Load the table's schema if this is the first object of this type instantiated
			$this->child_db = $db;
			$this->child_table = $table;
			if (count($schema) == 0) {
				$this->child_schema = $this->loadSchema($schema);
			} else {
				$this->child_schema = &$schema;
			}
			
			// Now assign default values
			if (isset($index)) {
				$this->load($index);
			} else {
				$this->initialize();
			}
		} catch (Exception $e) {
			$this->throwException('', 'unable to instantiate the object specified. ' . $e->getMessage());
		}
	}

	public function __call($method, $args) {
		try {
			if (array_key_exists($method . 'ID', $this->values)) {  
				// Return a new object of the type specified
				$class = get_class($this);
				$prefix = substr($class, 0, 2);
				$newClass = $prefix . $method;
				return new $newClass($this->values[$method . 'ID']);  
			} else if ($method == 'as_option' && array_key_exists('Name', $this->values)) {
				// Return a new object of the type specified
				return "<option value='" . $this->values['ID'] . "'" . ($args[0] == $this->values['ID'] ? " selected='selected'" : '') . '>' . $this->values['Name'] . '</option>';
			} else {
				throw new Exception($method . ' method not defined.');
			}
		} catch (Exception $e) {
			$this->throwException($method, 'unable to call the method specified. ' . $e->getMessage());
		}
	}  

	// Get a property value
	public function __get($method) {
		try {
			if (array_key_exists($method, $this->values)) {
				// Return the (previously) correctly-typed property
				return $this->values[$method];
			} else if (array_key_exists($method . 'ID', $this->values)) {
				// Return a new object of the type specified
				return new $method($this->values[$method . 'ID']);
			} else {
				throw new Exception($method . ' property not defined.');
			}
		} catch (Exception $e) {
			$this->throwException($method, 'unable to fetch the value specified. ' . $e->getMessage());
		}
	}
	
	// Set a property value
	public function __set($method, $val) {
		try {
			if (array_key_exists($method, $this->values)) {
				if (isset($this->child_schema[$method]['PrimaryKey'])) {
					throw new Exception('Attempt to set read-only property.');
				} else {
					// Ensure to correctly type the property
					$type = $this->child_schema[$method]['Type'];
					$valType = gettype($val);
					if ( ($type == $valType) || (isset($this->child_schema[$method]['Null']) && is_null($val)) ||
						 (isset($this->child_schema[$method]['Unsigned']) && is_numeric($val) && $val >= 0) ||
						 ($type == 'varchar' && isset($this->child_schema[$method]['Length']) && strlen($val) <= $this->child_schema[$method]['Length']) ||
						 ($type == 'decimal' && $valType == 'integer') ||
						 ($type == 'decimal' && $valType == 'float') ||
						 ($type == 'decimal' && $valType == 'double') ||
						 ($type == 'enum' && $valType == 'boolean') ||
						 ($type == 'smallint' && $valType == 'integer') ||
						 ($type == 'tinyint' && $valType == 'integer') ||
						 ((($type == 'datetime' || $type == 'date') && ($valType == 'string' || $valType == 'integer')) && $this->validateDateTime($val))) {
						if ($this->values[$method] !== $val) {
							if (!isset($this->old_values[$method])) $this->old_values[$method] = $this->values[$method];
							if (($type == 'datetime' || $type == 'date') && $valType == 'integer') $val = date('Y-m-d H:i:s', $val);
							$this->values[$method] = $this->cast($val, $type);
						}
					} else {
						throw new Exception('Invalid data type: ' . $valType);
					} 
				}
			} else {
				throw new Exception($method . ' property not defined.');
			}
		} catch (Exception $e) {
			$this->throwException($method, 'unable to set the value specified. ' . $e->getMessage());
		}
	}
	
	// Convert object to a string
	public function __toString() {
		try {
			return get_class($this) . ' Object' . str_replace("Array", '', print_r($this->values, true));
		} catch (Exception $e) {
			$this->throwException('__toString()', 'unable to convert object to string. ' . $e->getMessage());
		}
	}
	
	// This is here to give child classes ability to override and do something
	public function after_delete() {
	}
	
	// This is here to give child classes ability to override and do something
	public function after_insert() {
	}
	
	// This is here to give child classes ability to override and do something - only changed values are passed in
	public function after_update($old_values) {
	}
	
	// This is here to give child classes ability to override and do something - return false to cancel delete
	public function before_delete() {
		return true;
	}
	
	// This is here to give child classes ability to override and do something - return false to cancel insert
	public function before_insert() {
		return true;
	}
	
	// This is here to give child classes ability to override and do something - return false to cancel update - only changed values are passed in
	public function before_update($old_values) {
		return true;
	}
	
	// Delete related data from database, initializes the object and returns true if successful
	final public function delete() {
		try {
			if ($this->before_delete()) {
				$sql = 'DELETE FROM `' . $this->child_table . '` WHERE (`ID` = ' . (int)$this->values['ID'] . ');';
				if (__DEBUG__) echo("<!-- SQL: " . htmlentities($sql) . " -->\n");
				$result = $this->child_db->query($sql);
		
				if ($result) {
					$this->after_delete();
					$this->initialize();
				}
				return ($result);
			}
		} catch (Exception $e) {
			$this->throwException('delete()', 'unable to delete the object. ' . $e->getMessage());
		}
	} 
	
	// Return the last error posted by the database
	final public function error() {
		try {
			return $this->child_db->error;
		} catch (Exception $e) {
			$this->throwException('error()', 'unable to return an error. ' . $e->getMessage());
		}
	}

	// Load the object from the database, returns true if successful
	final public function load($index) {
		try {
			$this->initialize();
			$this->old_values = array();
			
			if (is_array($index)) {
				// Called this way from iterator
				foreach ($this->child_schema as $method => $properties) {
					//	$this->values[$method] = $this->cast($index[$method], $properties['Type']);  -- too expensive!
					if ($properties['Type'] == 'enum') {
						$this->values[$method] = ($index[$method] == 'Y');						
					} else {
						$this->values[$method] = $index[$method];						
					}
				}
				return 1;
			} else if (is_numeric($index)) {
				$sql = 'SELECT * FROM `' . $this->child_table . "` WHERE (`ID` = $index);";
			} else {
				$sql = 'SELECT * FROM `' . $this->child_table . "` WHERE ($index);";
			}		
			if (__DEBUG__) echo('<!-- SQL: ' . htmlentities($sql) . " -->\n");
			$rst = $this->child_db->query($sql);
			
			if ($rst) {
				switch ($rst->num_rows) {
					case 0:
						foreach ($this->child_schema as $method => $properties) {
							$val = NULL;
							$type = $properties['Type'];
							if ($type == 'enum') $val = ($val == 'Y');
							if ($method == 'ID') $val = 0;
							$this->values[$method] = $this->cast($val, $type);
						}
						break;
					case 1:
						$row = $rst->fetch_array();
						
						foreach ($this->child_schema as $method => $properties) {
							$val = $row[$method];
							$type = $properties['Type'];
							if ($type == 'enum') $val = ($val == 'Y');
							$this->values[$method] = $this->cast($val, $type);
						}
						break;
					default:
						throw new Exception('Non-unique index.');
				}
				$rst->free();
			} else {
				throw new Exception('Unable to fetch record.');
			}
			// 20130314JB unnecessary - return (boolean)$rst->num_rows;
		} catch (Exception $e) {
			$this->throwException('load()', 'unable to load from database. ' . $e->getMessage());
		}
	}

	// Returns the object's properties as XML. Can specify properties to include and/or exclude, whether to include type as attribute
	public function inner_xml($includeList = '', $excludeList = '^Security.*,.*Password\$,.*ID\$,^old.*', $displayTypes = false, $showEmpty = false) {
		try {
			if ($showEmpty || $this->values['ID'] != 0) {
				foreach($this->child_schema as $method => $properties) {
					$include = $includeList != '' && preg_match('/(' . implode(')|(', explode(',', $includeList)) .')/', $method);
					$exclude = $excludeList != '' && preg_match('/(' . implode(')|(', explode(',', $excludeList)) .')/', $method);
					
					if ($include || ($includeList == '' && !$exclude)) {
						// Include property it if explicitely listed, or none are listed for inclusion and it's not explicitely excluded
						$type = $properties['Type'];
						$val = $this->values[$method];
						$result .= "<$method" . ($displayTypes ? " datatype='$type'" : '') . '>' . ($type == 'boolean' ? ($val ? 'True' : 'False') : $val) . "</$method>\n";
					}
				} 
			}
			return $result;
		} catch (Exception $e) {
			$this->throwException('inner_xml()', 'unable to export XML. ' . $e->getMessage());
		}
	}
	
	// Saves the object to the database, returns the ID of the object if successful
	final public function save() {
		try {
			if ((int)$this->values['ID'] == 0) {
				$retval = $this->insert();
			} else {
				$retval = $this->update();
			}
			if ($retval > 0) {
				$this->old_values = array();
			}
			return $retval;
		} catch (Exception $e) {
			$this->throwException('save()', 'unable to save to database. ' . $e->getMessage());
		}
	}
	
	// *** Private Methods ***
	// Casts the value to the type specified
	private function cast($val, $type) {
		if (is_null($val)) return $val;
		switch($type) {
			case 'enum':		return (boolean)($val == 'Y' || $val == true ? true : false);		//($val == 'Y' ? true : ($val == 'N' ? false : $val));
			case 'date':
			case 'datetime':
			case 'varchar':		return (string)$val;
			case 'decimal':		return (float)$val;
			default:			return (int)$val;
		}
	}
	
	// Escape values for submission to database
	private function escape($val, $type) {
		switch($type) {
			case 'enum':		return ($val == 'Y' || $val == true ? "'Y'" : "'N'");
			case 'date':
			case 'datetime':
			case 'varchar':		return "'" . $this->child_db->real_escape_string($val) . "'";
			default:			return $this->child_db->real_escape_string($val);
		}
	}
	
	// Initialize the object
	private function initialize() {
		foreach ($this->child_schema as $method => $properties) {
			/* 20130314JB $properties['Default'] 'Default' not defined */
			 // $this->values[$method] = $properties['Default'];
			$this->values[$method] = (isset($properties['Default']) ? $properties['Default'] : null);
		}
	}

	// Inserts a record
	private function insert() {
		if ($this->before_insert()) {
			$cols = '';
			foreach($this->child_schema as $method => $properties) {
				if (!isset($properties['PrimaryKey'])) {
					$cols .= "`$method`,";
				}
			}
			$vals = '';
			foreach($this->values as $method => $val) {
				$properties = $this->child_schema[$method];
				if (!isset($properties['PrimaryKey'])) {
					if (isset($properties['Null']) && is_null($val)) {
						$vals .= 'NULL,';
					} else {
						$vals .= $this->escape($val, $properties['Type']) . ',';
					}
				}
			} 
			$sql = 'INSERT INTO `' . $this->child_table . '` (' . substr($cols, 0, -1) . ') VALUES ('. substr($vals, 0, -1) . ');';
			
			if (__DEBUG__) echo("<!-- SQL: " . htmlentities($sql) . " -->\n");
			$rst = $this->child_db->query($sql);
			
			if ($rst) {
				$this->values['ID'] = $this->child_db->insert_id;
				$this->after_insert();
				return $this->values['ID'];
			}
		}
		return false;
	}

	// Loads the static class schema for this table from the database. For each column in the table, these values are created
	//		$this->child_schema[$method]['Type']		one of enum (boolean), date, datetime, decimal, varchar, int, smallint, tinyint
	//		$this->child_schema[$method]['Length']		the maximum data length of this column, otherwise not set
	//		$this->child_schema[$method]['Null']		true if this column accepts null values, otherwise not set
	//		$this->child_schema[$method]['Unsigned']	true if this column accepts only unsigned values, otherwise not set
	//		$this->child_schema[$method]['PrimaryKey']	true if this column is the primary key (ID), otherwise not set
	//		$this->child_schema[$method]['ForeignKey']	the name of the table this column is a foreign key into, otherwise not set
	//		$this->child_schema[$method]['Default']		the default value of the data this column
	private function &loadSchema(&$schema) {
		$result = $this->child_db->query('SHOW COLUMNS FROM ' . $this->child_table);
		while ($result && $row = $result->fetch_assoc()) {
			// ['Field'], ['Type'], ['Null'], ['Key'], ['Default'], ['Extra']
			$method = $row['Field'];
			$null = ($row['Null'] == 'YES');
			$unsigned = (strpos($row['Type'], 'unsigned') !== FALSE);
			$primary = ($row['Extra'] == 'auto_increment' && $row['Key'] == 'PRI');

			$paren = strpos($row['Type'], '(');
			if ($paren == FALSE) {
				$type = $row['Type'];
			} else {
				$type = substr($row['Type'], 0, $paren);
			}
			$schema[$method]['Type'] = $type;
			if ($type != 'enum' && $type != 'datetime' && $type != 'date') $schema[$method]['Length'] = intval(substr($row['Type'], $paren + 1));
			if ($type == 'enum') {
				$default = ($row['Default'] == 'Y' ? true : ($row['Default'] == 'N' ? false : NULL));
			} else {
				$default = $row['Default'];
			}
	
			if ($null) $schema[$method]['Null'] = true;
			if ($unsigned) $schema[$method]['Unsigned'] = true;
			if ($row['Extra'] == 'auto_increment' && $row['Key'] == 'PRI') {
				$schema[$method]['PrimaryKey'] = true;
			} else if ($row['Key'] != '' && substr($method, -2) == 'ID') {
				$foreign = substr($method, 0, -2);
				$schema[$method]['ForeignKey'] = $foreign . 's';
			}
			// Now assign default values
			if ($method == 'ID') {
				$schema[$method]['Default'] = 0;
			} else if (!is_null($default)) {
				$schema[$method]['Default'] = $default;
			}
		}
		$result->free();
		return $schema;
	}
	
	// Format a thrown exception
	private function throwException($where, $error) {
		throw new Exception(get_class($this) . "::$where - $error");
	}
	
	// Updates a record - returns ID, or false on error
	private function update() {
		if (count($this->old_values) == 0) return $this->values['ID'];	// Nothing's changed
		if ($this->before_update($this->old_values)) {
			$vals = '';
			foreach($this->values as $method => $val) {
				$properties = $this->child_schema[$method];
				if (!isset($properties['PrimaryKey'])) {
					if (isset($properties['Null']) && is_null($val)) {
						$vals .= "`$method` = NULL,";
					} else {
						$vals .= "`$method`=" . $this->escape($val, $properties['Type']) . ',';
					}
				}
			} 
			$sql = 'UPDATE `' . $this->child_table . '` SET ' . substr($vals, 0, -1) . ' WHERE (`ID` = ' . $this->values['ID'] . ');';
			
			if (__DEBUG__) echo("<!-- SQL: " . htmlentities($sql) . " -->\n");
			$rst = $this->child_db->query($sql);
			
			if ($rst) {
				$this->after_update($this->old_values);
				return $this->values['ID'];
			}
		}
		return false;
	}
	
	// Validate a date or datetime - must be of form "2007-12-31 18:19:23" where time part is optional, or Unix timestamp (integer). Returns true if valid data.
	private function validateDateTime($datetime) {
		if (gettype($datetime) == 'integer') {
			return $datetime >= 0;
		} else if (preg_match('/^19[0-9][0-9]|20[0-9][0-9]\-0[1-9]|1[012]\-0[1-9]|[12][0-9]|3[01]( [0-1][0-9]|2[0-3]:[0-5][0-9]:[0-5][0-9])?$/', $datetime)) {
			// Right format - check to make sure it's a real date
			$tmp = sscanf($datetime, '%d-%d-%d', $y, $m, $d);
			return checkdate($m, $d, $y);
		} else {
			return false;
		}
	}	
}
?>