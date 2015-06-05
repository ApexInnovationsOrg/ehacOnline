<?php
/**
 * Class to iterate through records in the Issues data table in the ApexProducts database
 *
 * This class is responsible for iterating through the named table
 *
 * @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apIssues extends DBTables {
	protected static $table = 'Issues';
	
	public function __construct($where = '', $orderBy = '', $from = '', $sparseLoad = false, $startRow = 0, $count = 0) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, $where, $orderBy, $from == '' ?  self::$table : $from, $sparseLoad, $startRow, $count);
	}
}


/**
 * Class to access the Issues data table in the ApexProducts database
 *
 * This class is responsible inserting, updating, deleting and selecting data from the named table
 *
 * @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class apIssue extends DBTable {
	protected static $schema = array();	// Schema representation of the table - static class variable
	protected static $table = 'Issues';
	
	public function __construct($index = NULL) {
		global $DB_ApexProducts;

		parent::__construct($DB_ApexProducts, self::$table, self::$schema, $index);
	}

	// Class-specific methods may be added below
	public function __get($method) {
		if ($method == 'NIH') {
			return ($this->CourseID == 15 || $this->CourseID == 25);
		} else {
			return parent::__get($method);
		}
	}
	
	public function TestResult() {
		if ($this->NIH) {
			$retval = new apNIHSSResult($this->TestResultID);
		} else {
			$retval = new apTestResult($this->TestResultID);
		}

		return $retval;
	}

	public function add_attachment($employee, $file) {
		$att = new apIssueAttachment();
		$att->IssueID = $this->ID;
		$att->FileLocator = $file;
		return $att->save();
	}
	
	public function add_communication($employee, $message, $outgoing = false) {
		$comm = new apIssueCommunication();
		$comm->IssueID = $this->ID;
		$comm->Date = date("Y-m-d H:i:s");
		$comm->EmployeeID = $employee->ID;
		$comm->Message = $message;
		$comm->Outgoing = $outgoing;
		return $comm->save();
	}
	
	public function add_note($employee, $note) {
		$detail = new apIssueNote();
		$detail->IssueID = $this->ID;
		$detail->Date = date("Y-m-d H:i:s");
		$detail->EmployeeID = $employee->ID;
		$detail->Comment = $note;
		return $detail->save();
	}
}
?>