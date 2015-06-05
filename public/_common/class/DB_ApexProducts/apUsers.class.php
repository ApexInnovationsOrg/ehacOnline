<?php
/**
 * Class to iterate through records in the Users data table in the ApexProducts database
 *
 * This class is responsible for iterating through the named table
 *
 * @copyright	Copyright (c) 2010 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apUsers extends DBTables {
	protected static $table = 'Users';
	
	public function __construct($where = '', $orderBy = '', $from = '', $sparseLoad = false, $startRow = 0, $count = 0) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, $where, $orderBy, $from == '' ?  self::$table : $from, $sparseLoad, $startRow, $count);
	}
}


/**
 * Class to access the Users data table in the ApexProducts database
 *
 * This class is responsible inserting, updating, deleting and selecting data from the named table
 *
 * @copyright	Copyright (c) 2010 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apUser extends DBTable {
	protected static $schema = array();	// Schema representation of the table - static class variable
	protected static $table = 'Users';

	public function __construct($index = NULL) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, self::$schema, $index);
	}

	// Class-specific methods may be added below
	public function __get($method) {
		if ($method == 'Email') {
			$email = $this->Login;
			if ($this->oldUser) {
				$email = (is_null($this->oldEMail) ? '' : $this->oldEMail);
			} else if ($this->LMS) {
				$email = (is_null($this->LMSEmail) ? '' : $this->LMSEmail);
			}
			return (strpos($email, '@') === false ? '' : $email);
		} else {
			return parent::__get($method);
		}
	}
	
	public function StateOfLicensure() {
		return new apState($this->StateOfLicensureID);
	}

	public function ProductDemo($product) {
		$demo = new apProductDemo("UserID=$this->ID AND ProductID=$product->ID");
		
		return $demo;
	}
	
	public function get_departments_administered() {
		$deptList1 = new apDepartments("DepartmentAdmins.UserID=$this->ID", "Departments.Name", "Departments INNER JOIN DepartmentAdmins ON Departments.ID = DepartmentAdmins.DepartmentID");
		$deptList2 = new apDepartments("OrganizationAdmins.UserID=$this->ID", "Departments.Name", "Departments INNER JOIN Organizations ON Departments.OrganizationID = Organizations.ID INNER JOIN OrganizationAdmins ON OrganizationAdmins.OrganizationID = Organizations.ID");
		$deptList3 = new apx_Departments("SystemAdmins.UserID=$this->ID", "Departments.Name", "Departments INNER JOIN Organizations ON Departments.OrganizationID = Organizations.ID INNER JOIN SystemOrganizations ON SystemOrganizations.OrganizationID = Organizations.ID INNER JOIN Systems ON Systems.ID = SystemOrganizations.SystemID INNER JOIN SystemAdmins ON SystemAdmins.SystemID = Systems.ID");
		
		// Now join them
		$depIDs = '';
		foreach ($deptList1 as $dep)	$depIDs .= $dep->ID . ",";
		foreach ($deptList2 as $dep)	$depIDs .= $dep->ID . ",";
		foreach ($deptList3 as $dep)	$depIDs .= $dep->ID . ",";
		if ($depIDs != '') {
			$depIDs = substr($depIDs, 0, -1);
			$deptList = new apDepartments("Departments.ID IN ($depIDs)", "Organizations.Name, Departments.Name", "Departments INNER JOIN Organizations ON Departments.OrganizationID = Organizations.ID");
		}

		return $deptList;
	}
	
	public function get_licenses_administered() {
		$licList = new apLicenses("LicenseAdmins.UserID=$this->ID", "Licenses.ID", "Licenses INNER JOIN LicenseAdmins ON Licenses.ID = LicenseAdmins.LicenseID");
		
		// Now join the two... and array_merge() and array_unique() aren't working...
		$licIDs = '';
		foreach ($licList as $lic)	$licIDs .= $lic->ID . ",";
		if ($licIDs != '') {
			$licIDs = substr($licIDs, 0, -1);
			$licList = new apLicenses("Licenses.ID IN ($licIDs)", "Organizations.Name, Products.Name" , "Licenses INNER JOIN Products ON Licenses.ProductID = Products.ID INNER JOIN Organizations ON Licenses.OrganizationID = Organizations.ID");
		}

		return $licList;
	}
	
	public function get_organizations_administered() {
		$orgList1 = new apx_Organizations("OrganizationAdmins.UserID=$this->ID", "Organizations.Name", "Organizations INNER JOIN OrganizationAdmins ON Organizations.ID = OrganizationAdmins.OrganizationID");
		$orgList2 = new apx_Organizations("SystemAdmins.UserID=$this->ID", "Organizations.Name", "Organizations INNER JOIN SystemOrganizations ON SystemOrganizations.OrganizationID = Organizations.ID INNER JOIN Systems ON Systems.ID = SystemOrganizations.SystemID INNER JOIN SystemAdmins ON SystemAdmins.SystemID = Systems.ID");

		$orgIDs = '';
		foreach ($orgList1 as $org)		$orgIDs .= $org->ID . ",";
		foreach ($orgList2 as $org)		$orgIDs .= $org->ID . ",";
		if ($orgIDs != "") {
			$orgIDs = substr($orgIDs, 0, -1);
			$orgList = new apx_Organizations("Organizations.ID IN ($orgIDs)", "Organizations.Name");
		}
		
		return $orgList;
	}
	
	public function get_systems_administered() {
		$sysList = new apSystems("SystemAdmins.UserID=$this->ID", "Systems.Name", "Systems INNER JOIN SystemAdmins ON Systems.ID = SystemAdmins.SystemID");
		
		return $sysList;
	}
	
	// Returns the continuing education type for this user, based on credentials
	public function ce_type() {
		if ($this->Credential()->CEH) return 'CEH';
		if ($this->Credential()->CNE) return 'CNE';
		if ($this->Credential()->CME) return 'CME';
		if ($this->Credential()->CAPT) return 'CAPT';
		return '';
	}

	// Returns all of the class types for this user (used in flashVars to courseware)
	public function class_types() {
		$retval = '';
		
		switch ($this->ce_type()) {
			case 'CME':		$retval = 'Doctor';	break;
			case 'CEH':		$retval = 'EMT';	break;
			case 'CNE':		$retval = 'Nurse';	break;
			case 'CAPT':	$retval = 'PT';		break;
		}
		if ($this->Beta) $retval .= ' Beta';
		if ($this->LMS) $retval .= ' LMS';
		return trim($retval);
	}

	// Determine which product should be shown by default
	public function default_product() {
		// Search licenses first - ordered by active and then farthest expiration date and then alphabetically 
		$products = new apProducts("LicenseSeats.UserID=$this->ID" . ($this->Beta ? '' : " AND Products.Beta='N'"), "Licenses.Active ASC, LicensePeriods.EndDate DESC, Products.Name ASC", "Products INNER JOIN Licenses ON Products.ID = Licenses.ProductID INNER JOIN LicensePeriods ON LicensePeriods.LicenseID = Licenses.ID INNER JOIN LicenseSeats ON LicenseSeats.LicensePeriodID = LicensePeriods.ID");
		if ($products->count() == 0) {
			// ... then demos - same order
			$products = new apProducts("UserID=$this->ID", "DemoStartDate DESC, Name", "Products INNER JOIN ProductDemos ON Products.ID = ProductDemos.ProductID");
		}
		if ($products->count() > 0) {
			$products->seek(0);
			return $products->current();
		} else {
			// If no licenses or demos... pick Hemispheres as these are most likely NIHSS folks
			return (new apProduct("Name='Hemispheres'"));
		}
	}
	
	// Find the "best" license for the product specified - typically the active one with the expiration date farthest in the future
	public function best_license($product) {
		$licenses = new apLicenses("ProductID=$product->ID AND OrganizationID=" . $this->Department()->OrganizationID . " AND LicenseSeats.UserID=$this->ID", "Licenses.Active ASC, LicenseSeats.ExpirationDate DESC", "Licenses INNER JOIN LicensePeriods ON LicensePeriods.LicenseID = Licenses.ID INNER JOIN LicenseSeats ON LicensePeriods.ID = LicenseSeats.LicensePeriodID");

		if ($licenses->count() > 0) {
			foreach ($licenses as $license) {
				// Return the first license that's currently valid
				if ($license->LicensePeriod(date("Y-m-d H:i:s"))->ID > 0) {
					return $license;
				}
			}
			// If we made it here, there were no current licenses, so return the "best"
			$licenses->seek(0);
			return $licenses->current();
		} else {
			return (new apLicense());
		}
	}
	
	// Returns the most current seat for the license
	public function LicenseSeat($license) {
		$seats = new apLicenseSeats("LicenseID=$license->ID AND UserID=$this->ID", "ExpirationDate DESC", "LicenseSeats INNER JOIN LicensePeriods ON LicenseSeats.LicensePeriodID = LicensePeriods.ID");
		
		if ($seats->count() > 0) {
			$seats->seek(0);
			return $seats->current();
		} else {
			return (new apLicenseSeat());
		}
	}
	
	// Returns true if user is authorized to take the test for the course
	public function authorized_for_test($course) {
		$license = $this->best_license($course->Product());
		$now = date("Y-m-d H:i:s");
		$licenseConfigs = new apLicenseConfigurations("LicenseSeats.UserID=" . $this->ID . " AND LicenseConfigurations.CourseID=$course->ID AND LicenseSeats.ExpirationDate>='$now' AND LicenseSeats.CreationDate<='$now' AND LicenseSeats.Active='Y' AND AllowTest='Y' AND Licenses.ID=$license->ID AND Licenses.Active='Y'", '', "(LicenseConfigurations INNER JOIN Licenses ON LicenseConfigurations.LicenseID = Licenses.ID) INNER JOIN LicensePeriods ON Licenses.ID = LicensePeriods.LicenseID INNER JOIN LicenseSeats ON LicensePeriods.ID = LicenseSeats.LicensePeriodID");
		$demo = $this->ProductDemo($course->Product());
		return $licenseConfigs->count() > 0 || ($demo->valid() && $course->Level == 1) || $this->LMS;
	}
	
	// Returns true if user is authorized to take the course
	function authorized_for_course($course) {
		$license = $this->best_license($course->Product()); 
		$now = date("Y-m-d H:i:s");
		$licenseConfigs = new apLicenseConfigurations("LicenseSeats.UserID=" . $this->ID . " AND LicenseConfigurations.CourseID=$course->ID AND LicenseSeats.ExpirationDate>='$now' AND LicenseSeats.CreationDate<='$now' AND LicenseSeats.Active='Y' AND AllowCourse='Y' AND Licenses.ID=$license->ID AND Licenses.Active='Y'", '', "(LicenseConfigurations INNER JOIN Licenses ON LicenseConfigurations.LicenseID = Licenses.ID) INNER JOIN LicensePeriods ON Licenses.ID = LicensePeriods.LicenseID INNER JOIN LicenseSeats ON LicensePeriods.ID = LicenseSeats.LicensePeriodID");
		$demo = $this->ProductDemo($course->Product());
		// error_log($course->Product());		
		// error_log($license->ID);
		// error_log("MOOOO    " . $licenseConfigs->count());
		return $licenseConfigs->count() > 0 || $demo->valid() || $this->LMS || ($demo->ID == 0 && $course->NIH);	// NIH Stroke Scale
	}
	
	// Returns true if user is authorized to print the certificate for the course
	function authorized_for_certificate($course) {
		$license = $this->best_license($course->Product()); 
		$now = date("Y-m-d H:i:s");
		$licenseConfigs = new apLicenseConfigurations("LicenseSeats.UserID=" . $this->ID . " AND LicenseConfigurations.CourseID=$course->ID AND LicenseSeats.ExpirationDate>='$now' AND LicenseSeats.CreationDate<='$now' AND LicenseSeats.Active='Y' AND AllowCertificate='Y' AND Licenses.ID=$license->ID AND Licenses.Active='Y'", '', "(LicenseConfigurations INNER JOIN Licenses ON LicenseConfigurations.LicenseID = Licenses.ID) INNER JOIN LicensePeriods ON Licenses.ID = LicensePeriods.LicenseID INNER JOIN LicenseSeats ON LicensePeriods.ID = LicenseSeats.LicensePeriodID");
		return $licenseConfigs->count() > 0 || $this->LMS || ($course->NIH);	// NIH Stroke Scale
	}
	
	// Returns true if user is authorized for CEs
	function authorized_for_ce($course) {
		$product = $course->Product();
		$certType = $this->ce_type();
		return ($certType == 'CME' && $product->CME) || ($certType == 'CNE' && $product->CNE) || ($certType == 'CEH' && $product->CEH) || ($certType == 'CAPT' && $product->CAPT);
	}
	
	// Returns true if the user has never launched a course for the product before, false otherwise
	public function need_EULA($product) {
		global $DB_ApexProducts;
		
		// Updated to reflect the fact that new courseware engine stores "sessions" differently
		$rst = $DB_ApexProducts->query("SELECT COUNT(CourseSessions.ID) AS PrevVisits FROM CourseSessions INNER JOIN Courses ON CourseSessions.CourseID = Courses.ID WHERE ProductID = $product->ID AND UserID = $this->ID");
		
		if ($rst) {
			$row = $rst->fetch_assoc();
			if ($row['PrevVisits'] == 0) {
				$rst2 = $DB_ApexProducts->query("SELECT COUNT(PageVisits.ID) AS PrevVisits FROM PageVisits INNER JOIN Courses ON PageVisits.CourseID = Courses.ID WHERE ProductID = $product->ID AND UserID = $this->ID");
				$row2 = $rst2->fetch_assoc();
				return ($row2['PrevVisits'] == 0);
			} else {
				return false;
			}
		}
		return true;
	}
	
	//20140829JK- Return the test results for user for specific course
	public function test_results($courseID)
	{
		global $DB_ApexProducts;		
		
		//NIH course
		if($courseID == 15 || $courseID == 25 || $courseID == 41 || $courseID == 54){
			$rst = $DB_ApexProducts->query("SELECT P.Name, C.Level, T.Score, T.TestCompleted, C.ID AS 'CourseID', T.ID AS 'TestID', $this->ID AS 'UserID', '93' AS 'DefaultPassingScore', 1 AS 'NIH' FROM NIHSSResults AS T INNER JOIN Courses AS C ON C.ID = T.CourseID INNER JOIN Products AS P ON P.ID = C.ProductID WHERE UserID =$this->ID AND CourseID=$courseID AND Score IS NOT NULL");
			while($row = $rst->fetch_assoc()){
				$results[] = $row;	
			}	
		}else{
			$rst = $DB_ApexProducts->query("SELECT P.Name, C.Level, T.Score, T.TestCompleted, C.ID AS 'CourseID', T.ID AS 'TestID', $this->ID AS 'UserID', C.DefaultPassingScore AS 'DefaultPassingScore', 0 AS 'NIH' FROM TestResults AS T INNER JOIN Courses AS C ON C.ID = T.CourseID INNER JOIN Products AS P ON P.ID = C.ProductID WHERE UserID =$this->ID AND CourseID=$courseID AND Score IS NOT NULL");
			while($row = $rst->fetch_assoc()){
				$results[] = $row;	
			}
		}
		return $results;
	}
	
	// Lookup the minimum passing score for the test for this user
	public function passing_score($course) {
		$minPassingScore = $course->DefaultPassingScore;
			
		// See if we've got more stringent requirements anywhere
		$license = $this->best_license($course->Product()); 
		$licenseConfigs = new apLicenseConfigurations("LicenseSeats.UserID=" . $this->ID . " AND LicenseConfigurations.CourseID=" . $course->ID . " AND LicensePeriods.EndDate>'" . date("Y-m-d H:i:s") . "' AND AllowTest='Y' AND Licenses.ID=$license->ID AND Licenses.Active='Y'", '', "(LicenseConfigurations INNER JOIN Licenses ON LicenseConfigurations.LicenseID = Licenses.ID) INNER JOIN LicensePeriods ON Licenses.ID = LicensePeriods.LicenseID INNER JOIN LicenseSeats ON LicensePeriods.ID = LicenseSeats.LicensePeriodID");
		foreach ($licenseConfigs as $config) {
			if ($config->PassingScore > $minPassingScore) {
				$minPassingScore = $config->PassingScore;
			}
		}
		return $minPassingScore;
	}

	// Validates a password
	public function validate($password) {
		return ($this->Password == $this->hash_password($password));
	}
	
	// Hashes a password
	public function hash_password($password) {
		return md5("6#pR8@" . $password);
	}

	// Ensures password meets organization's complexity requirements
	public function password_meets_complexity_requirements($password) {
		$org = $this->Department()->Organization();
		if ($org->password_meets_complexity_requirements($password) &&
			!($org->PasswordComplexityNoUserInfo &&
				(preg_match('/' . strtolower($this->FirstName) . '/', strtolower($password)) ||
				 preg_match('/' . strtolower($this->LastName) . '/', strtolower($password)) ||
				 preg_match('/' . strtolower(substr($this->Login, 0, strpos($this->Login, '@'))) . '/', strtolower($password))))) {
			return true;
		}
		return false;
	}
	
	// Ensures password meets organization's history requirements
	public function password_meets_history_requirements($password) {
		$length = $this->Department()->Organization()->PasswordHistoryLength;
		if ($length == 0) return true;
		$list = explode(',', $this->PasswordHistory);
		foreach ($list as $item) {
			if ($this->hash_password($password) == $item) return false;
		}
		return true;
	}

	// Add a password to the history list
	public function add_password_to_history($password) {
		$length = $this->Department()->Organization()->PasswordHistoryLength;
		if ($length == 0) return;
		$list = explode(',', $this->PasswordHistory);
		if ($list[0] == '') array_shift($list);
		while (count($list) >= $length) {
			array_shift($list);
		}
		array_push($list, $this->hash_password($password));
		$this->PasswordHistory = implode(',', $list);
	}
	
	// Returns this object as an HTML <option> tag, marked as selected if appropriate
	public function as_option($defaultVal = -1) {
		$result = "<option value=\"$this->ID\"" . ($defaultVal == $this->ID ? " selected='selected'" : '');
		$result .= ">$this->LastName, $this->FirstName</option>";
		return $result;
	}

	public function apexEmployee(){
		$employee = false;
		$dept = new apDepartment($this->DepartmentID);
		if($dept->OrganizationID == '221'){
			$employee = true;
		}
		return $employee;
	}
}
?>