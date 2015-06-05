<?php
// *** Definitions *** - pre-namespaces - used to provide querystring parameters to change page behavior - keep secret, easily changed
define('BASE_USE_SSL', 'ap_ssl');					// Force page to use HTTPS - values 0,1
define('BASE_DEBUG', 'ap_dbg');						// Allow page to output debugging info - values 0,1
define('VALIDATOR_NONCE_NAME', 'VALIDATOR_NONCE');	// Nonces are used to thwart CSRF attacks - this is its name within submitted forms
define('NONCE_ENCRYPTION_KEY', '0ffeba201002000340830a06c050d00270a4007060030050ebe00f007ed000aa');	
//require($_SERVER['DOCUMENT_ROOT'] . '/SESSIONCONFIG.php');		// PHP Session configuration and start	

/**
 * Abstract base class for all actions/pages
 *
 * This class is responsible for basic functionality for all URIs in any Apex domains (enforcing SSL, redirections, debugging, sessions)
 *
 * @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
abstract class BaseURI {
	// *** Private Properties ***
	// These members keep track of information about the page
	private $domain = '';				// Domain name
	private $page_name = '';			// Path used (relative to domain) to access this page
	private $ssl = false;				// Is page accessed via SSL?
	private $subdomain = '';			// Subdomain name
	private $cipher = null;				// AES cipher used for nonces
	private $http_headers = array();	// Array of strings to output in HTTP header


	// *** Protected Properties ***
	// Members managing meta information about the page - can be set by users of this class
	protected $debug = false;			// Output debug information into HTML comments
	protected $ssl_required = false;	// Force URI to be loaded over SSL?
	protected $session_name = '';		// Name of the session
	protected $redirect = '';			// URL of page to redirect to - e.g. to take site offline - 'http://www.apexinnovations.com/site-down.html';


	// *** Public Methods ***
	// Called to instantiate the page
	public function __construct($args) {
		try {
			$this->filter_input();
			
			// Set switches based on params passed to constructor
			if (isset($args['debug'])) $this->debug = ($args['debug'] === true);
			if (isset($args['ssl_required'])) $this->ssl_required = ($args['ssl_required'] === true);
			if (isset($args['session_name'])) $this->session_name = $args['session_name'];
			if (isset($args['redirect'])) $this->redirect = $args['redirect'];
		
			// Immediately redirect, if required
			if ($this->redirect != '') {
				header("Location: $this->redirect");
				exit(0);
			}

			// Initialize server vals
			if(isset($_SERVER['HTTPS']))
			{
				if($_SERVER["HTTPS"] == "on")
				{
					$this->ssl = TRUE;
				}
			} else {
				$this->ssl = FALSE;
			}
				
			$this->parse_domain($_SERVER['SERVER_NAME'], $this->domain, $this->subdomain);
			$this->page_name = substr($_SERVER['PHP_SELF'], 1);

			// Set switches based on GET params
			if (isset($_GET[BASE_DEBUG])) $this->debug = ($_GET[BASE_DEBUG] == TRUE);
			if (isset($_GET[BASE_USE_SSL])) $this->ssl_required = ($_GET[BASE_USE_SSL] == TRUE);

			// Set up cipher for nonces	
			// $this->cipher = new AES(MCRYPT_MODE_ECB,  hex3bin(NONCE_ENCRYPTION_KEY));
			// 20130321JB - added third arguement as a hex3bin, 32 bit conversion instead of just a string
		    $this->cipher = new AES(MCRYPT_MODE_ECB,  hex3bin(NONCE_ENCRYPTION_KEY), hex3bin("00000000000000000000000000000000"));
			// Setup the application's session
			if ($this->session_name != '') {
				
				if(isset($_COOKIE['ehac']))
				{
					$_COOKIE['ApexInnovations'] = $_COOKIE['ehac'];
					$this->session_name = 'ehac';
					// var_dump($_SESSION);
				}
				require_once($_SERVER['DOCUMENT_ROOT'] . '/classes/RedisSessionHandler.php');
				$session = new RedisSessionHandler();
				$session->register();
				// ini_set("session.save_handler","redis");
				// ini_set("session.save_path","tcp://db1.apexinnovations.com:6379?prefix=laravel:");
 
				//session_set_cookie_params(0,'/', 'www.' . $this->domain);	// TO DO: replace with session_set_cookie_params(0,'/', '.' . $this->domain, false, true);
				session_name($this->session_name);
				session_start();
				// error_log(print_r($_SESSION, true));
				
				// Repost any previously posted data after an SSL redirect
				if (isset($_SESSION['TMP_POST_VARS'])) {
					foreach ($_SESSION['TMP_POST_VARS'] as $key => $val) {
						$_POST[$key] = $val;
					}
					unset($_SESSION['TMP_POST_VARS']);
				}
			
				// Set debug based on SESSION variables
				if (isset($_SESSION[BASE_DEBUG]) && !isset($_GET[BASE_DEBUG])) $this->debug = ($_SESSION[BASE_DEBUG] == TRUE);
				$_SESSION[BASE_DEBUG] = $this->debug;	// Set session variable for debug
			}

			// Set up error reporting
			if ($this->debug) {
				error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
				ini_set('display_errors', 'On');
			} else {
				ini_set('display_errors', 'Off');
			}
			define('__DEBUG__', $this->debug);	// Allows debug output for all database access, if necessary

			// Redirect to secure version of page, if required
			if (!$this->ssl && $this->ssl_required) {
				// Now re-post any form data and follow to the redirect
				$qs = $this->serialize_query_strings();
				$url = 'https://' . ($this->subdomain == '' ? '' : "$this->subdomain.") . $this->domain . '/' . $this->page_name . ($qs == '' ? '' : "?$qs");
				header("Location: $url");
				
				if (count($_POST) > 0) {
					// Attempt to copy all POSTed data to session vars while redirecting
					if ($this->session_name != '') {
						foreach ($_POST as $key => $val) {
							$_SESSION['TMP_POST_VARS'][$key] = $val;
						}
					} else {
						throw new Exception ("Sorry, but you have to allow cookie tracking for this site to work properly");
					}
				}
			}
		} catch (Exception $e) {
			$this->log_exception($e);
		}
	}

	// Allow some public read-only properties
	public function __get($name) {
		try {
			if ($name == 'debug') return $this->debug;
			if ($name == 'domain') return $this->domain;
			if ($name == 'ssl') return $this->ssl;
			if ($name == 'subdomain') return $this->subdomain;
			if ($name == 'page_name') return $this->page_name;
			
			throw new Exception("$name is not a valid property");;
		} catch (Exception $e) {
			$this->log_exception($e);
		}
	}

	// Add HTTP header(s)
	public function add_http_headers($lines) {
		try {
			foreach ($lines as $line) {
				if ($line) $this->http_headers[] = $line;
			}
		} catch (Exception $e) {
			$this->log_exception($e);
		}
	}

	// Generate a nonce - authenticator for forms to prevent CSRF attacks - $id is anything you want to later validate against
	// Returns an hidden input tag for user to put in their form
	public function generate_nonce($id) {
		try {
			$expiration = time() + 86400;
			$data = bin2hex($this->cipher->encrypt((string)$expiration . '}|{' . (string)$id));		// expires one day from now
			return "<input type='hidden' name='" . VALIDATOR_NONCE_NAME . "' value='$data'/>" . ($this->debug ? " <!-- $id, expires " . date('Y-m-d H:i:s', $expiration) . " -->" : '');
		} catch (Exception $e) {
			$this->log_exception($e);
		}
	}
	
	// Log any exceptions
	public function log_exception($e) {
		// In base class, no connection to database, so just send e-mail
		$mailer = new Mailer();
		$error = $e->getMessage() . ' (#' . $e->getCode() . ') in ' . get_class($this) .
				' [' . $e->getFile() . ':' . $e->getLine() . ']';
		$backtrace = '';
		foreach(debug_backtrace() as $key => $val){
			if($val['function'] == 'include' || $val['function'] == 'include_once' || $val['function'] == 'require_once' ||
				$val['function'] == 'require'){
				$backtrace .= '#' . $key . ' ' . $val['function'] . '(' . $val['args'][0] . ') called at [' . $val['file'] . ':' . $val['line'] . ']<br />';
			}else{
				$backtrace .= '#' . $key . ' ' . $val['function'] . '() called at [' . $val['file'] . ':' . $val['line'] . ']<br />';
			}
		}
		$get = $post = $session = '';
		foreach ($_GET as $key => $value) $get .= $this->output_keyvalue($key, $value);
		foreach ($_POST as $key => $value) $post .= $this->output_keyvalue($key, $value);
		foreach ($_SESSION as $key => $value) $session .= $this->output_keyvalue($key, $value);
		if ($get != '') $get = substr($get, 0, -5);
		if ($post != '') $post = substr($post, 0, -5);
		if ($session != '') $session = substr($session, 0, -5);
		$caller = $_SERVER['SCRIPT_NAME'];
		$mailer->send('Apex Developers <developers@apexinnovations.com>', 'WebPage Exception', "<p><strong>ERROR:</strong><br/>$error</p><p><strong>URL:</strong><br/>$caller</p><p><strong>Backtrace:</strong><br/>$backtrace</p><p><strong>GET:</strong><br/>$get</p><p><strong>POST:</strong><br/>$post</p><p><strong>SESSION:</strong><br/>$session</p><p><strong>Remote IP Address:</strong><br/>" . $_SERVER['REMOTE_ADDR'] ."</p>");
	}
	
	// Validate a form submitted with a nonce against an $id you specify
	public function validate_nonce($id) {
		try {
			$data = $this->cipher->decrypt(hex3bin($_REQUEST[VALIDATOR_NONCE_NAME]));
			$parts = explode('}|{', $data);
			
			return (time() <= (int)$parts[0] && (string)$id == $parts[1]);
		} catch (Exception $e) {
			$this->log_exception($e);
		}
	}
	

	// *** Protected Methods ***
	// Default protection against injection attacks
	protected function filter_input() {
		$filter = new InputFilter();
		
		// Scrub all 3 of these, just in case
		$_POST = $filter->process($_POST);
		$_GET = $filter->process($_GET);
		$_REQUEST = $filter->process($_REQUEST);
	}
	
	// Output all HTTP headers
	protected function output_http_headers() {
		// Add any page-specific header info
		foreach ($this->http_headers as $header) {
			header($header);
		}
	}

	// Serialize the query strings which are stored as an array
	protected function serialize_query_strings() {
		$tmp = '';
		foreach ($_GET as $key => $value) {
			$tmp .= urlencode("$key=$value") . '&';
		}
		if ($tmp != '') $tmp = substr($tmp,0, -1);

		return $tmp;
	}

	
	// *** Private Methods
	// Outputs key/value pairs for exceptions, even if value is array
	private function output_keyvalue($key, $value, $prev = '') {
		if (is_array($value)) {
			foreach ($value as $k => $v) {
				$retval .= output_keyvalue($k, $v, ($prev == '' ? $key : '') . $prev . "[$k]");
			}
		} else {
			$retval = ($prev == '' ? $key : $prev) . "=$value<br/>";
		}
		return $retval;
	}

	// Parses out domain and subdomain (if any) from server name - WON'T WORK FOR DOMAINS LIKE sub.domain.co.uk
	private function parse_domain($server_name, &$domain_name, &$subdomain_name) {
		$parts = explode(".", $server_name);
		$subdomain_name = (count($parts) > 2 ? array_shift($parts) : '');
		$domain_name = join(".", $parts);
	}
}
?>