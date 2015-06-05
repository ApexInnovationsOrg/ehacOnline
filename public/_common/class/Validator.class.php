<?php
/**
 * Class to allow PHP validation of values - this would be better off as just a namespace, but not up to PHP 5.2 yet...
 *
 * This class validates variables against types
 *
 * @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class Validator {
	// *** Public Methods ***
	public function is_bool($val, $emptyOK = false) {
		if ($emptyOK && $this->is_empty($val)) return true;
		
		return is_bool($val);
 	}

	public function is_date($val, $emptyOK = false) {
		if ($emptyOK && $this->is_empty($val)) return true;
		
		$time = strtotime($val);
		
		if (!is_numeric($time)) return false;

		return (checkdate(date('m', $time), date('d', $time), date('Y', $time)));
 	}

	public function is_double($val, $emptyOK = false) {
		return $this->is_float($val, $emptyOK);
 	}

	public function is_email($val, $emptyOK = false) {
		if ($emptyOK && $this->is_empty($val)) return true;
		
		return preg_match("/^([_a-z0-9-\!\#\$\%\&\'\*\+\/\=\?\^\`\|\~]+)(\.[_a-z0-9-\!\#\$\%\&\'\*\+\/\=\?\^\`\|\~]+)*@([a-z0-9-]+)(\.[a-z0-9-]+)*(\.[a-z]{2,6})$/i", $val);
	}

	public function is_empty($val) {
		return (empty($val) || $val === '' || is_null($val));
 	}

	public function is_float($val, $emptyOK = false) {
		if ($emptyOK && $this->is_empty($val)) return true;
		
		return is_float($val);
 	}

	public function is_int($val, $emptyOK = false) {
		if ($emptyOK && $this->is_empty($val)) return true;
		
		return is_int($val);
 	}

	public function is_integer($val, $emptyOK = false) {
		return $this->is_int($val, $emptyOK);
 	}

	public function is_long($val, $emptyOK = false) {
		return $this->is_int($val, $emptyOK);
 	}

	public function is_numeric($val, $emptyOK = false) {
		if ($emptyOK && $this->is_empty($val)) return true;
		
		return is_numeric($val);
 	}

	public function is_url($val, $emptyOK = false) {
		if ($emptyOK && $this->is_empty($val)) return true;
		
		return (preg_match( '/^(http|https):\/\/[a-z0-9_]+([\-\.]{1}[a-z_0-9]+)*\.[_a-z]{2,5}'.'((:[0-9]{1,5})?\/.*)?$/i' ,strtolower($val)));
	}
}
?>