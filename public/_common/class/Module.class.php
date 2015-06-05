<?php
/**
 * Abstract base class for all web modules (chunks of content)
 *
 * This class is responsible for handling the CSS and Javascript for the module
 *
 * @copyright	Copyright (c) 2010 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
abstract class Module {
	// *** Protected Properties ***
	// Used to store a reference to the page on which the module resides.
	protected $page;


	// *** Public Methods ***
	// Called to instantiate the module
	public function __construct($page) {
		// All modules store a reference to the page on which they reside.
		$this->page = $page;
	}

	// Add some embedded CSS to the page
	public function add_embedded_css($code) {
		$this->page->add_embedded_css($code, 'module');
	}

	// Add some embedded javascript to the page
	public function add_embedded_js($code) {
		$this->page->add_embedded_js($code, 'module');
	}

	// Add linked CSS file(s) to the page - $files is array of name => version pairs
	public function add_linked_css($files, $media = 'all') {
		$this->page->add_linked_css($files, 'module', $media);
	}

	// Add linked javascript file(s) to the page - $files is array of name => version pairs
	public function add_linked_js($files) {
		$this->page->add_linked_js($files, 'module');
	}

	// 	// Log any exceptions
	public function render_exception($e) {
		$this->page->log_exception($e);

		return	"  <p style='font-weight: bold; color: red;'>There was a problem rendering this portion of the web page!</p>
					<p>Please contact Apex Innovations by phone [866-294-4599] or <a href='mailto:support@apexinnovations.com'>e-mail</a> and let them know about the problem!<br/>(REFERENCE: " . $_SERVER['PHP_SELF'] . ").</p>\n";
	}


	// *** Protected Methods ***
	// Abstract methods to be overridden by derived classes
	abstract public function render();
}
?>
