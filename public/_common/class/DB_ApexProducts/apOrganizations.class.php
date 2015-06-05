<?php
/**
 * Class to iterate through records in the Organizations data table in the ApexProducts database
 *
 * This class is responsible for iterating through the named table
 *
 * @copyright	Copyright (c) 2010 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apOrganizations extends DBTables {
	protected static $table = 'Organizations';
	
	public function __construct($where = '', $orderBy = '', $from = '', $sparseLoad = false, $startRow = 0, $count = 0) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, $where, $orderBy, $from == '' ?  self::$table : $from, $sparseLoad, $startRow, $count);
	}
}


/**
 * Class to access the Organizations data table in the ApexProducts database
 *
 * This class is responsible inserting, updating, deleting and selecting data from the named table
 *
 * @copyright	Copyright (c) 2010 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apOrganization extends DBTable {
	protected static $schema = array();	// Schema representation of the table - static class variable
	protected static $table = 'Organizations';
	
	public function __construct($index = NULL) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, self::$schema, $index);
	}

	// Class-specific methods may be added below
	public function is_admin($user) {
		$admins = new apOrganizationAdmins("OrganizationID=$this->ID");
		foreach ($admins as $admin) {
			if ($admin->UserID == $user->ID) {return true;}
		}
		return false;
	}
	
	public function is_dept_admin($user) {
		$depts = new apDepartments("OrganizationID = " . $this->ID);
		foreach ($depts as $dept) {
			if ($dept->is_admin($user)) {return true;}
		}
		return false;
	}
	
	public function is_license_admin($user) {
		$lics = new apLicenses("OrganizationID = " . $this->ID);
		foreach ($lics as $lic) {
			if ($lic->is_admin($user)) {return true;}
		}
		return false;
	}
	
	public function get_admins($asUsers = true) {
		$retval = array();
		$admins = new apOrganizationAdmins("OrganizationID=$this->ID");
		foreach ($admins as $admin) {
			array_push($retval, ($asUsers ? $admin->User() : $admin));
		}
		return $retval;
	}
	
	public function add_admin($user) {
		if ($user->ID > 0) {
			$admin = new apOrganizationAdmin();
			$admin->OrganizationID = $this->ID;
			$admin->UserID = $user->ID;
			return $admin->save();
		}
		return false;
	}
	
	public function delete_admin($user) {
		if ($user->ID > 0) {
			$admin = new apOrganizationAdmin("OrganizationID=$this->ID AND UserID=$user->ID");
			return $admin->delete();
		}
		return false;
	}

	private function rand_string($len, $chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789') {
		$string = '';
		for ($i = 0; $i < $len; $i++) {
			$pos = rand(0, strlen($chars)-1);
			$string .= $chars{$pos};
		}
		return $string;
	}
	
	public function add_department($name) {
		$dept = new apDepartment();
		$dept->Name = $name;
		$dept->OrganizationID = $this->ID;
		return $dept->save();
	}
	
	public function System() {
		$systems = new apSystems("SystemOrganizations.OrganizationID=" .$this->ID, "Systems.ID", "Systems INNER JOIN SystemOrganizations ON Systems.ID = SystemOrganizations.SystemID");
		if ($systems->count() > 0) {
			$systems->seek(0);
			$system = $systems->current();
		} else {
			$system = new apSystem();
		}
		return $system;
	}
	
	public function LicensedProducts($where = '') {
		return new apProducts("Licenses.OrganizationID=" . $this->ID . ($where == '' ? '' : " AND $where"), "Products.Name", "Products INNER JOIN Licenses ON Products.ID = Licenses.ProductID");		
	}

	// Ensures password meets organization's complexity requirements
	public function password_meets_complexity_requirements($password) {
		if (($this->PasswordMinLength > strlen($password)) ||
			($this->PasswordComplexityNumeric && !preg_match('/[0-9]/', $password)) ||
			($this->PasswordComplexitySpecial && !preg_match('/[\~\!\@\#\$\%\^\&\*\(\)\?\{\}\[\]\=\+\-\_\.\,]/', $password)) ||
			($this->PasswordComplexityUppercase && !preg_match('/[A-Z]/', $password)) ||
			($this->PasswordComplexityLowercase && !preg_match('/[a-z]/', $password))) {
			return false;
		}
		return true;
	}
}
?>