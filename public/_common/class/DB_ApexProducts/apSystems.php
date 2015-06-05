<?php
/**
 * Class to iterate through records in the Systems data table in the ApexProducts database
 *
 * This class is responsible for iterating through the named table
 *
 * @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apSystems extends DBTables {
	protected static $table = 'Systems';
	
	public function __construct($where = '', $orderBy = '', $from = '', $sparseLoad = false, $startRow = 0, $count = 0) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, $where, $orderBy, $from == '' ?  self::$table : $from, $sparseLoad, $startRow, $count);
	}
}


/**
 * Class to access the Systems data table in the ApexProducts database
 *
 * This class is responsible inserting, updating, deleting and selecting data from the named table
 *
 * @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apSystem extends DBTable {
	protected static $schema = array();	// Schema representation of the table - static class variable
	protected static $table = 'Systems';
	
	public function __construct($index = NULL) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, self::$schema, $index);
	}

	// Class-specific methods may be added below
	public function is_admin($user) {
		$admins = new apSystemAdmins("SystemID=$this->ID");
		foreach ($admins as $admin) {
			if ($admin->UserID == $user->ID) {return true;}
		}
		return false;
	}
	
	public function get_admins($asUsers = true) {
		$retval = array();
		$admins = new apSystemAdmins("SystemID=$this->ID");
		foreach ($admins as $admin) {
			array_push($retval, ($asUsers ? $admin->User() : $admin));
		}
		return $retval;
	}
	
	public function add_admin($user) {
		if ($user->ID > 0) {
			$admin = new apSystemAdmin();
			$admin->SystemID = $this->ID;
			$admin->UserID = $user->ID;
			return $admin->save();
		}
		return false;
	}
	
	public function add_organization($org) {
		if ($org->ID > 0) {
			$sysOrg = new apSystemOrganization();
			$sysOrg->SystemID = $this->ID;
			$sysOrg->OrganizationID = $org->ID;
			return $sysOrg->save();
		}
		return false;
	}

	public function delete_admin($user) {
		if ($user->ID > 0) {
			$admin = new apSystemAdmin("SystemID=$this->ID AND UserID=$user->ID");
			return $admin->delete();
		}
		return false;
	}

	public function licensed_products($where = '') {
		$prods = new apProducts("SystemOrganizations.SystemID=" . $this->ID . ($where == '' ? '' : " AND $where"), "Products.Name", "Products INNER JOIN Licenses ON Products.ID = Licenses.ProductID INNER JOIN SystemOrganizations ON Licenses.OrganizationID = SystemOrganizations.OrganizationID");		
		return $prods;
	}
}
?>