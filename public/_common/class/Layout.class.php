<?php
/**
 * Abstract base class for all layouts (structured layouts of modules)
 *
 * This class is responsible for handling the CSS and Javascript for the module
 *
 * @copyright	Copyright (c) 2010 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
abstract class Layout extends Module {
	// *** Public Methods ***
	// Called to instantiate the module
	public function __construct($page) {
		parent::__construct($page);
	}
}
?>
