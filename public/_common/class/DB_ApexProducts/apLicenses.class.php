<?php
/**
 * Class to iterate through records in the Licenses data table in the ApexProducts database
 *
 * This class is responsible for iterating through the named table
 *
 * @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apLicenses extends DBTables {
	protected static $table = 'Licenses';
	
	public function __construct($where = '', $orderBy = '', $from = '', $sparseLoad = false, $startRow = 0, $count = 0) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, $where, $orderBy, $from == '' ?  self::$table : $from, $sparseLoad, $startRow, $count);
	}
}


/**
 * Class to access the Licenses data table in the ApexProducts database
 *
 * This class is responsible inserting, updating, deleting and selecting data from the named table
 *
 * @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apLicense extends DBTable {
	protected static $schema = array();	// Schema representation of the table - static class variable
	protected static $table = 'Licenses';
	
	public function __construct($index = NULL) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, self::$schema, $index);
	}

	// Class-specific methods may be added below
	public function is_admin($user) {
		$admins = new apLicenseAdmins("LicenseID=$this->ID");
		foreach ($admins as $admin) {
			if ($admin->UserID == $user->ID) return true;
		}
		return false;
	}
	
	public function get_admins($asUsers = true) {
		$retval = array();
		$admins = new apLicenseAdmins("LicenseID=$this->ID");
		foreach ($admins as $admin) {
			array_push($retval, ($asUsers ? $admin->User() : $admin));
		}
		return $retval;
	}
	
	public function add_admin($user) {
		if ($user->ID > 0) {
			$admin = new apLicenseAdmin();
			$admin->LicenseID = $this->ID;
			$admin->UserID = $user->ID;
			return $admin->save();
		}
		return false;
	}
	
	public function delete_admin($user) {
		if ($user->ID > 0) {
			$admin = new apLicenseAdmin("LicenseID=$this->ID AND UserID=$user->ID");
			return $admin->delete();
		}
		return false;
	}

	public function valid() {
		return (($this->ID > 0) && $this->Active); // && ( $this->LicensePeriod()->ID > 0));
	}
	
	// Gets the current license period, or the one active on $theDate
	public function LicensePeriod($theDate) {
		if (!isset($theDate)) $theDate = date("Y-m-d H:i:s");
		$period = new apLicensePeriod("LicenseID=$this->ID AND StartDate<='$theDate' AND EndDate>='$theDate'");
		return $period;
	}
	
	// Get related license periods, filtered and ordered if necessary
	public function get_license_periods($where = '', $orderBy = "EndDate DESC", $sparseLoad = true) {
		$periods = new apLicensePeriods(($where == '' ? '' : "($where) AND ") . "LicenseID=$this->ID", $orderBy, "(LicensePeriods LEFT JOIN LicenseSeats ON LicensePeriods.ID = LicenseSeats.LicensePeriodID) LEFT JOIN Users ON LicenseSeats.UserID = Users.ID", $sparseLoad);
		return $periods;
	}
	
	// Gets the entire date range valid for this license
	public function get_valid_date_range(&$start, &$end) {
		$periods = $this->get_license_periods();
		if ($periods->count() > 0) {
			$periods->seek(0);
			$period = $periods->current();
			$end = $period->EndDate;
			$periods->seek($periods->count() - 1);
			$period = $periods->current();
			$start = $period->StartDate;
		} else {
			$start = "2000-01-01 00:00:00";
			$end = date("Y-m-d H:i:s");
		}
	}
	
	public function levels($demo = false) {
		if(!$demo)
		{
			$configs = new apLicenseConfigurations("LicenseID=" . $this->ID);
			
			$view = '';
			foreach ($configs as $config) {
				$course = new apCourse($config->CourseID);
				$view .= $config->AllowCourse ? $course->Level . "," : '';
			}
			if ($view != '') $view = substr($view, 0, -1);
			if ($view == "1,2,3,4,5,6,7") $view = "1-7";
			if ($view == "1,2,3,4,5,6,7,8") $view = "1-8";
			return $view;
		} 

		else

		{
	        $activeCourses = new apCourses("ProductID = $demo->ProductID AND Enabled = 'Y'");
	        $activeCourseArray = [];
	        foreach($activeCourses as $AC)
	        {
	            $activeCourseArray[] = $AC->Level;
	        }
	        $string = implode(",", $activeCourseArray);
	        return $string;
		}
	}
	
	// Returns this object as an HTML <option> tag, marked as selected if appropriate
	public function as_ption($defaultVal = -1) {
		$result = "<option value=\"$this->ID\"" . ($defaultVal == $this->ID ? " selected='selected'" : '');
		$result .= ">" . $this->Organization()->Name . ": " . $this->Product()->Name . " (Levels " . $this->Levels() . ") - " . ($this->Enterprise ? 'Enterprise' : ($this->NumSeats . " Seat" . ($this->NumSeats > 1 ? "s" : ''))) . ($this->LicensePeriod()->ID > 0 ? '' : " EXPIRED") . "</option>";
		return $result;
	}
}
?>