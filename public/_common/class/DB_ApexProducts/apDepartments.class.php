<?php
/**
 * Class to iterate through records in the Departments data table in the ApexProducts database
 *
 * This class is responsible for iterating through the named table
 *
 * @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apDepartments extends DBTables {
	protected static $table = 'Departments';
	
	public function __construct($where = '', $orderBy = '', $from = '', $sparseLoad = false, $startRow = 0, $count = 0) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, $where, $orderBy, $from == '' ?  self::$table : $from, $sparseLoad, $startRow, $count);
	}
}


/**
 * Class to access the Departments data table in the ApexProducts database
 *
 * This class is responsible inserting, updating, deleting and selecting data from the named table
 *
 * @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apDepartment extends DBTable {
	protected static $schema = array();	// Schema representation of the table - static class variable
	protected static $table = 'Departments';
	
	public function __construct($index = NULL) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, self::$schema, $index);
	}

	// Class-specific methods may be added below
	public function is_admin($user) {
		$admins = new apDepartmentAdmins("DepartmentID=$this->ID");
		foreach ($admins as $admin) {
			if ($admin->UserID == $user->ID) return true;
		}
		return false;
	}
	
	public function get_admins($asUsers = true) {
		$retval = array();
		$admins = new apDepartmentAdmins("DepartmentID=$this->ID");
		foreach ($admins as $admin) {
			array_push($retval, ($asUsers ? $admin->User() : $admin));
		}
		return $retval;
	}
	
	public function add_admin($user) {
		if ($user->ID > 0) {
			$admin = new apDepartmentAdmin();
			$admin->DepartmentID = $this->ID;
			$admin->UserID = $user->ID;
			return $admin->save();
		}
		return false;
	}
	
	public function delete_admin($user) {
		if ($user->ID > 0) {
			$admin = new apDepartmentAdmin("DepartmentID=$this->ID AND UserID=$user->ID");
			return $admin->delete();
		}
		return false;
	}
}
?>