<?php
require_once($path_common . "/Layout.inc");

/**
 * This class is is used to layout a 3 x 1 column layout
 *
 
 ===============================
 | ==================== ====== |
 | |       col1       | |col2| |
 | |                  | |    | |
 | |                  | |    | |
 | |                  | |    | |
 | |                  | |    | |
 | |                  | |    | |
 | ==================== ====== |
 ===============================

 * @copyright	Copyright (c) 2010 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
class Layout3x1Col extends Layout {
	// *** Protected Properties ***
	// Used to store the column contents and widths.
	protected $col1;
	protected $col2;
	protected $width1;
	protected $width2;
	
	// *** Public Methods ***
	// Called to instantiate the layout
	public function __construct($page, $col1, $col2, $width1 = '685px', $width2 = '215px') {
		parent::__construct($page);
		
		$this->col1 = $col1;
		$this->col2 = $col2;
		$this->width1 = $width1;
		$this->width2 = $width2;
	}

	// Called to render the layout
	public function render() {
		return	($this->page->debug ? "      <!-- Column 1: Start -->\n" : '') .
				"      <div class='columnX3' style='width: {$this->width1}'>\n" .
				$this->col1 .
				"      </div>\n" .
				($this->page->debug ? "      <!-- Column 1: End -->\n" : '') .
				($this->page->debug ? "      <!-- Column 2: Start -->\n" : '') .
				"      <div class='columnX1' style='width: {$this->width2}'>\n" .
				$this->col2 .
				"      </div>\n" .
				($this->page->debug ? "      <!-- Column 2: End -->\n" : '');
	}
}
?>
