<?php
/**
 * Class to iterate through records in the LicensePeriods data table in the ApexProducts database
 *
 * This class is responsible for iterating through the named table
 *
 * @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apLicensePeriods extends DBTables {
	protected static $table = 'LicensePeriods';
	
	public function __construct($where = '', $orderBy = '', $from = '', $sparseLoad = false, $startRow = 0, $count = 0) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, $where, $orderBy, $from == '' ?  self::$table : $from, $sparseLoad, $startRow, $count);
	}
}


/**
 * Class to access the LicensePeriods data table in the ApexProducts database
 *
 * This class is responsible inserting, updating, deleting and selecting data from the named table
 *
 * @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apLicensePeriod extends DBTable {
	protected static $schema = array();	// Schema representation of the table - static class variable
	protected static $table = 'LicensePeriods';
	
	public function __construct($index = NULL) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, self::$schema, $index);
	}

	// Class-specific methods may be added below
	public function get_keys($where = '', $orderBy = "`Key`", $sparseLoad = true) {
		$keys = new apLicenseKeys(($where == '' ? '' : "($where) AND ") . "LicensePeriodID=$this->ID", $orderBy, "LicenseKeys INNER JOIN Departments ON LicenseKeys.DepartmentID = Departments.ID", $sparseLoad);
		return $keys;
	}

	public function get_seats_active($where = '', $orderBy = "Users.LastName, Users.FirstName", $sparseLoad = true, $date) {
		if (!isset($date)) $date = date("Y-m-d H:i:s");
		$seats = new apLicenseSeats(($where == '' ? '' : "($where) AND ") . "LicensePeriodID=$this->ID AND LicenseSeats.Active='Y' AND LicenseSeats.CreationDate<='$date' AND LicenseSeats.ExpirationDate>='$date' AND LicenseSeats.Active='Y'", $orderBy, "LicenseSeats INNER JOIN Users ON LicenseSeats.UserID = Users.ID", $sparseLoad);
		return $seats;
	}
	
	public function get_seats_used($where = '', $orderBy = "Users.LastName, Users.FirstName", $sparseLoad = true) {
		$seats = new apLicenseSeats(($where == '' ? '' : "($where) AND ") . "LicensePeriodID=$this->ID AND LicenseSeats.Active='Y'", $orderBy, "LicenseSeats INNER JOIN Users ON LicenseSeats.UserID = Users.ID", $sparseLoad);
		return $seats;
	}	
	
	public function seats_active($where = '') {
		$seats = $this->get_seats_active($where);
		return $seats->count();
	}
	
	public function seats_used($where = '') {
		$seats = $this->get_seats_used($where);
		return $seats->count();
	}
}
?>