<?php
/**
 * Abstract base class for all web actions
 *
 * This class is responsible for performing some action and returning to the referrer
 *
 * @copyright	Copyright (c) 2010-2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.1
 */
abstract class Action extends BaseURI {
	// *** Public Methods ***
	// Called to instantiate the page
	public function __construct($args) {
		parent::__construct($args);
	}
	
	// Redirect back to referrer
	public function return_to($referrer, $notice = '') {
		if ($notice != '') $_SESSION['notify'] = $notice;
		header("Location: $referrer");
		exit(0);
	}
}
?>