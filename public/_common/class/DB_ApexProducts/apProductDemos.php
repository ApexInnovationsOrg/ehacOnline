<?php
/**
 * Class to iterate through records in the ProductDemos data table in the ApexProducts database
 *
 * This class is responsible for iterating through the named table
 *
 * @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apProductDemos extends DBTables {
	protected static $table = 'ProductDemos';
	
	public function __construct($where = '', $orderBy = '', $from = '', $sparseLoad = false, $startRow = 0, $count = 0) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, $where, $orderBy, $from == '' ?  self::$table : $from, $sparseLoad, $startRow, $count);
	}
}


/**
 * Class to access the ProductDemos data table in the ApexProducts database
 *
 * This class is responsible inserting, updating, deleting and selecting data from the named table
 *
 * @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apProductDemo extends DBTable {
	protected static $schema = array();	// Schema representation of the table - static class variable
	protected static $table = 'ProductDemos';
	
	public function __construct($index = NULL) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, self::$schema, $index);
	}

	// Class-specific methods may be added below
	public function valid() {
		if ($this->ID > 0 && !is_null($this->DemoStartDate) && !is_null($this->DemoHours)) {
			$demoStart = strtotime($this->DemoStartDate);
			$demoEnd = $demoStart + $this->DemoHours * 3600;
			return ($demoStart <= time() && $demoEnd >= time());
		} else {
			return false;
		}
	}
}
?>