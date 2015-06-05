<?php
require_once($path_common . "/Layout.inc");

/**
 * This class is is used to layout a 3 column layout
 *
 
 ==============================
 | ======== ======== ======== |
 | | col1 | | col2 | | col3 | |
 | |      | |      | |      | |
 | |      | |      | |      | |
 | |      | |      | |      | |
 | |      | |      | |      | |
 | |      | |      | |      | |
 | ======== ======== ======== |
 ==============================

 * @copyright	Copyright (c) 2010 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class Layout3Col extends Layout {
	// *** Protected Properties ***
	// Used to store the column contents and widths.
	protected $col1;
	protected $col2;
	protected $col3;
	protected $width1;
	protected $width2;
	protected $width3;
	
	// *** Public Methods ***
	// Called to instantiate the layout
	public function __construct($page, $col1, $col2, $col3, $width1 = '293px', $width2 = '293px', $width3 = '293px') {
		parent::__construct($page);
		
		$this->col1 = $col1;
		$this->col2 = $col2;
		$this->col3 = $col3;
		$this->width1 = $width1;
		$this->width2 = $width2;
		$this->width3 = $width3;
	}

	// Called to render the layout
	public function render() {
		return	($this->page->debug ? "      <!-- Column 1: Start -->\n" : '') .
				"      <div class='columnX1' style='width: {$this->width1}'>\n" .
				$this->col1 .
				"      </div>\n" .
				($this->page->debug ? "      <!-- Column 1: End -->\n" : '') .
				($this->page->debug ? "      <!-- Column 2: Start -->\n" : '') .
				"      <div class='columnX1' style='width: {$this->width2}'>\n" .
				$this->col2 .
				"      </div>\n" .
				($this->page->debug ? "      <!-- Column 2: End -->\n" : '') .
				($this->page->debug ? "      <!-- Column 3: Start -->\n" : '') .
				"      <div class='columnX1' style='width: {$this->width3}'>\n" .
				$this->col3 .
				"      </div>\n" .
				($this->page->debug ? "      <!-- Column 3: End -->\n" : '');
	}
}
?>
