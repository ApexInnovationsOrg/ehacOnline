<?php
/**
 * Class to iterate through records in the courses data table in the ApexProducts database
 *
 * This class is responsible for iterating through the named table
 *
 * @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apCourses extends DBTables {
	protected static $table = 'Courses';
	
	public function __construct($where = '', $orderBy = '', $from = '', $sparseLoad = false, $startRow = 0, $count = 0) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, $where, $orderBy, $from == '' ?  self::$table : $from, $sparseLoad, $startRow, $count);
	}
}


/**
 * Class to access the courses data table in the ApexProducts database
 *
 * This class is responsible inserting, updating, deleting and selecting data from the named table
 *
 * @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apCourse extends DBTable {
	protected static $schema = array();	// Schema representation of the table - static class variable
	protected static $table = 'Courses';
	
	public function __construct($index = NULL) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, self::$schema, $index);
	}

	// Class-specific methods may be added below
	public function romanNumeral() {
		$level = $this->Level;
		
		$table = array('M'=>1000, 'CM'=>900, 'D'=>500, 'CD'=>400, 'C'=>100, 'XC'=>90, 'L'=>50, 'XL'=>40, 'X'=>10, 'IX'=>9, 'V'=>5, 'IV'=>4, 'I'=>1); 
		    $numeral = ''; 
		    while($level > 0) 
		    { 
		        foreach($table as $rom=>$arb) 
		        { 
		            if($level >= $arb) 
		            { 
		                $level -= $arb; 
		                $numeral .= $rom; 
		                break; 
		            } 
		        } 
		    } 
		

		return $numeral;
	}
}
?>