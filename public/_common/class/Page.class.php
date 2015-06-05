<?php
// *** Definitions *** - pre-namespaces - used to provide querystring parameters to change page behavior - keep secret, easily changed
define('PAGE_PARAMNAME_USE_PACKAGED', 'ap_pkg');	// Force page to package up included css and js files into one - values 0,1


/**
 * Abstract base class for all web pages
 *
 * This class is responsible for generating the HMTL for a web page, including <head> and <body> sections, CSS and Javascript, and referrer
 *
 * @copyright	Copyright (c) 2010-2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.1
 */
abstract class Page extends BaseURI {
	// *** Private Properties ***
	// Members for aggregating and sectioning the CSS/JSS, and tracking HTTP headers
	private $embedded_code = array( 'js' => array('common' => '', 'page' => '', 'module' => ''),
									'css' => array('common' => '', 'page' => '', 'module' => '') );
	private $linked_files = array( 'js' => array('common' => array(), 'page' => array(), 'module' => array()),
								   'css' => array('common' => array(), 'page' => array(), 'module' => array()) );


	// *** Protected Properties ***
	// Members managing meta information about the page - can be set by users of this class
	protected $copyright = '';			// Date range
	protected $description = '';		// Meta description
	protected $keywords = '';			// Meta keywords
	protected $title = '';				// Title in browser
	protected $tabIndex = 1;			// Keeps track of tab indices
	protected $package = true;			// Allow packaging of css/js files


	// *** Public Methods ***
	// Called to instantiate the page
	public function __construct($args) {
		try {
			parent::__construct($args);

			// Set switches based on params passed to constructor
			if (isset($args['package'])) $this->package = ($args['package'] === true);
			
			// Set switches based on GET params
			if (isset($_GET[PAGE_PARAMNAME_USE_PACKAGED])) $this->package = ($_GET[PAGE_PARAMNAME_USE_PACKAGED] == TRUE);
	
			// Setup the application's session
			if ($this->session_name != '') {
				// Work around for browsers allowing HTTP_REFERER to be omitted or overwritten by user
				$_SERVER['HTTP_REFERER'] = isset($_SESSION['THIS_PAGE']) ? $_SESSION['THIS_PAGE'] : "";
				$_SESSION['THIS_PAGE'] = 'http' . ($this->ssl ? 's' : '') . '://' . $this->subdomain . '.' . $this->domain . $_SERVER['PHP_SELF'] . ($_SERVER['QUERY_STRING'] == '' ? '' : "?" . $_SERVER['QUERY_STRING']);
			}
		} catch (Exception $e) {
			$this->log_exception($e);
		}
	}

	// Allow some public read-only properties
	public function __get($name) {
		try {
			if ($name == 'copyright') return $this->copyright;
			if ($name == 'description') return $this->description;
			if ($name == 'keywords') return $this->keywords;
			if ($name == 'title') return $this->title;
			if ($name == 'tabIndex') return $this->tabIndex;
			
			return parent::__get($name);
		} catch (Exception $e) {
			$this->log_exception($e);
		}
	}

	// Add some embedded CSS to the page
	public function add_embedded_css($code, $scope = 'page') {
		try {
			if ($code) $this->embedded_code['css'][$scope] .= $code . "\n";
		} catch (Exception $e) {
			$this->log_exception($e);
		}
	}

	// Add some embedded javascript to the page
	public function add_embedded_js($code, $scope = 'page') {
		try {
			if ($code) $this->embedded_code['js'][$scope] .= $code . "\n";
		} catch (Exception $e) {
			$this->log_exception($e);
		}
	}

	// Add linked CSS file(s) to the page - $files is array of name => version pairs
	public function add_linked_css($files, $scope = 'page', $media = 'all') {
		try {
			$this->add_linked_file('css', $files, $scope, $media);
		} catch (Exception $e) {
			$this->log_exception($e);
		}
	}

	// Add linked javascript file(s) to the page - $files is array of name => version pairs
	public function add_linked_js($files, $scope = 'page') {
		try {
			$this->add_linked_file('js', $files, $scope, 'screen');
		} catch (Exception $e) {
			$this->log_exception($e);
		}
	}

	// Retrieve and then increment the current page's tab index
	public function next_tab_index() {
		try {
			return $this->tabIndex++;
		} catch (Exception $e) {
			$this->log_exception($e);
		}
	}
	
	// Called to render the page
	public function render() {
		try {
			// Output any HTTP headers prior to rendering the page.
			$this->output_http_headers();
			
			// Must render body before css, so...
			$body = $this->render_body();
			
			return	$this->render_doctype() .
					"<html" . $this->render_html_attribs() . ">\n" .
					" <head>\n" .
					($this->debug ? "  <!-- SSL: " . ($this->ssl ? "true" : "false") . " -->\n" .
									"  <!-- Subdomain: " . ($this->subdomain == '' ? "{none}" : $this->subdomain) . " -->\n" .
									"  <!-- Domain: $this->domain -->\n" .
									"  <!-- Page Name: $this->page_name -->\n" .
									"  <!-- Query String: " . $this->serialize_query_strings() . " -->\n"
						: '') .
					$this->render_meta_info() .
					"  <title>$this->title</title>\n" .
					$this->render_css() .
					" </head>\n" .
					" <body>\n" .
					$body .
					$this->render_js() .
					" </body>\n" .
					"</html>\n";
		} catch (Exception $e) {
			$this->log_exception($e);
		}
	}


	// *** Protected Methods ***
	// Abstract methods to be overridden by derived classes
	abstract protected function render_body();
	abstract protected function render_doctype();
	abstract protected function render_html_attribs();
	abstract protected function render_meta_info();


	// *** Private Methods ***
	// Utility function for adding linked CSS/js files - $files is array of name => version pairs
	private function add_linked_file($type, $files, $scope, $media) {
		foreach ($files as $file) {
			if ($file && !array_key_exists($file, $this->linked_files[$type][$scope])) {
				$this->linked_files[$type][$scope][$file] = $media;
			}
		}
	}

	// Render all CSS on the page
	private function render_css() {
		$types = array('common', 'page', 'module');

		// Remove all duplicate linked files
		foreach($this->linked_files['css']['common'] as $ckey => $cval) {
			$this->remove_key($this->linked_files['css']['page'], $ckey);
			$this->remove_key($this->linked_files['css']['module'], $ckey);
		}
		foreach($this->linked_files['css']['page'] as $pkey => $pval) {
			$this->remove_key($this->linked_files['css']['module'], $pkey);
		}

		// Now piece together the linked and/or embedded javascript
		$retval = '';
		foreach ($types as $type) {
			if (count($this->linked_files['css'][$type]) > 0) {
				if ($this->debug) $retval .= "  <!-- linked css: $type -->\n";
				if ($this->package) {
					$retval .=	"  <link type='text/css' href='";
					foreach($this->linked_files['css'][$type] as $file => $media) {
						$retval .= 	"$file.css,";
					}
					$retval = substr($retval, 0, -1);
					$retval .=	"' rel='stylesheet' media='$media' />\n";
				} else {
					foreach($this->linked_files['css'][$type] as $file => $media) {
						$retval .=	"  <link type='text/css' href='$file.css' rel='stylesheet' media='$media' />\n";
					}
				}
			}
		}
		if ($this->embedded_code['css']['common'] || $this->embedded_code['css']['page'] || $this->embedded_code['css']['module']) {
			$retval .= "  <style type='text/css'>\n"; 
			foreach ($types as $type) {
				$retval .= ($this->embedded_code['css'][$type] ? ($this->debug ? "\t/* embedded css: $type */\n" : '') . $this->embedded_code['css'][$type] : '');
			}
            $retval .= "  </style>\n";
		}

		return $retval;
	}

	// Render all javascript on the page
	private function render_js() {
		$types = array('common', 'page', 'module');

		// Remove all duplicate linked files
		foreach($this->linked_files['js']['common'] as $ckey => $cval) {
			$this->remove_key($this->linked_files['js']['page'], $ckey);
			$this->remove_key($this->linked_files['js']['module'], $ckey);
		}
		foreach($this->linked_files['js']['page'] as $pkey => $pval) {
			$this->remove_key($this->linked_files['js']['module'], $pkey);
		}

		// Now piece together the linked and/or embedded javascript
		$retval = '';
		foreach ($types as $type) {
			if (count($this->linked_files['js'][$type]) > 0) {
				if ($this->debug) $retval .= "  <!-- linked js: $type -->\n";
				if ($this->package) {
					foreach($this->linked_files['js'][$type] as $file => $media) {
						$retval .= 	"  <script type='text/javascript' src='";
						$retval .= 	"$file.js";
						$retval .= 	"'></script>\n";
					}
				} else {
					foreach($this->linked_files['js'][$type] as $file => $media) {
						$retval .= 	"  <script type='text/javascript' src='$file.js'></script>\n";
					}
				}
			}
		}
		if ($this->embedded_code['js']['common'] || $this->embedded_code['js']['page'] || $this->embedded_code['js']['module']) {
			foreach ($types as $type) {
				$retval .= "  <script type='text/javascript'>\n"; 
				$retval .= ($this->embedded_code['js'][$type] ? ($this->debug ? "\t/* embedded js: $type */\n" : '') . $this->embedded_code['js'][$type] : '');
            	$retval .= "  </script>\n";
			}
		}

		return $retval;
	}

	// Remove element with key specified from array specified
	private function remove_key(&$array, $theKey) {
		foreach($array as $key => $value) if($key === $theKey) unset($array[$key]);
	}
}
?>