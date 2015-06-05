<?php
error_reporting(E_ALL);
// Used to report back arrays of information in the exception handler
function output_keyvalue($key, $value, $prev = '') {
	if (is_array($value)) {
		foreach ($value as $k => $v) {
			$retval .= output_keyvalue($k, $v, ($prev == '' ? $key : '') . $prev . "[$k]");
		}
	} else {
		$retval = ($prev == '' ? $key : $prev) . "=$value<br/>";
	}
	return $retval;
}

// Set uncaught exception handler
function exception_handler($e) {
    $class = '[no class]';
    if(@$this) {
        $class = get_class($this);
    }
	$error = $e->getMessage() . ' (#' . $e->getCode() . ') in ' . $class . ' [' . $e->getFile() . ':' . $e->getLine() . ']';
	echo "<!DOCTYPE html>
<html>
 <head>
  <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
  <meta http-equiv='X-UA-Compatible' content='IE=Edge' />
  <meta name='author' content='Apex Innovations, LLC' />
  <meta name='description' content='The Web server encountered an unexpected condition that prevented it from fulfilling the request by the client for access to the requested URL.' />
  <meta name='keywords' content='web page document unexpected error search' />
  <link rel='icon' type='image/x-icon' href='http://www.apexinnovations.com/favicon.ico' />
  <title>Apex Innovations &raquo; Internal Server Error</title>
  <link type='text/css' href='http://www.apexinnovations.com/_common/css/yui.reset-3.3.0.css' rel='stylesheet' media='all' />
  <link type='text/css' href='http://www.apexinnovations.com/_common/css/yui.fonts-3.3.0.css' rel='stylesheet' media='all' />
  <link type='text/css' href='http://www.apexinnovations.com/_common/css/apex-1.0.css' rel='stylesheet' media='all' />
  <link type='text/css' href='http://www.apexinnovations.com/_common/css/jquery.ui-1.8.11.custom.css' rel='stylesheet' media='all' />
  <style type='text/css'>
   html {background: #fff;}
   body {width: 600px; margin: 20px auto;}
   h1,h2,h3,p {font:Verdana, Geneva, sans-serif}
   h1 {font-size: 18px; color: #900; margin-bottom: 10px;}
   h2 {font-size: 16px; color: #000; margin-bottom: 6px;}
   h3 {font-size: 12px; color: #333; margin-bottom: 3px; margin-left: 3px; font-weight: bold;}
   p {font-size: 12px; color: #333; margin-bottom: 3px;}
   .logo {width: 180px; height: 80px; margin: 10px 0;}
   .container {margin: 10px 0; border: 1px solid #999;}
   .container-body {border-top: 1px solid #999; padding: 5px 15px;}
   .search-caption {margin-left: 0}
  </style>
 </head>
 <body>
  <div class='logo'><img src='http://www.apexinnovations.com/images/apex_logo.gif' width='180' height='80' alt='Apex Innovations: Education the World Relies On' /></div>
  <h1>Our apologies...</h1>
  <h2>The page you requested cannot be displayed</h2>
  <div class='container'>
   <h3>Suggested actions</h3>
   <div class='container-body'>
    <ul class='bullet-list'>
     <li>If you typed the address, please make sure that the spelling is correct.<br />Note: Most addresses are case sensitive.</li>
     <li>For information on Apex offerings, start from the <a href='http://www.apexinnovations.com/'>Apex homepage</a>.</li>
     <li>To purchase Apex products, start from the <a href='http://www.apexinnovations.com/store/'>Apex Store homepage</a>.</li>
     <li><span class='js-required'><span class='search-caption'>Search the Apex Innovations Website:</span> <input class='search-box' id='search-string' accesskey='S' title='Search the Apex Innovations Website for Content'/></span></li>
    </ul>
   </div>
  </div>
  <div class='container'>
   <h3>Get assistance</h3>
   <div class='container-body'>
    <p>Please tell us about any broken links. You may <a href='http://www.apexinnovations.com/ContactUs.php'>Contact Us</a> by either phone or e-mail.</p>
   </div>
  </div>
  <p>500 Internal Server Error</p>
  <div id='SearchResultsDialog' title='Search Results'></div>
  <script type='text/javascript' src='http://www.apexinnovations.com/_common/js/jquery-1.5.2.js'></script>
  <script type='text/javascript' src='http://www.apexinnovations.com/_common/js/jquery.ui-1.8.11.custom.js'></script>
  <script type='text/javascript' src='http://www.apexinnovations.com/_common/js/googlejsapi-1.0.js'></script>
  <script type='text/javascript' src='http://www.apexinnovations.com/_common/js/gsearch-1.0.js'></script>
  <script type='text/javascript' src='http://www.apexinnovations.com/_common/js/jquery.gSearch-1.0.js'></script>
  <script type='text/javascript'>
	\$(function(){\$('.js-required').removeClass('js-required');});
	function GetSearchResults() {
		var sr = \$('<' + 'div id=\'search-results\' style=\'width: 400px; height: 400px; border: 1px solid #999; overflow: scroll;\'><'+'/div>');
		sr.gSearch({search_text : \$('#search-string').attr('value'), site : 'www.apexinnovations.com', count : 8, pagination : false, callback : DecodeHREFs});
		\$('#SearchResultsDialog').html(sr).dialog({modal: true, width : 430, height : 450, title : 'Apex Innovations - Search Results'});
	}
	function DecodeHREFs() {
		\$('#search-results a[href]').each(function(){\$(this).attr('href', URLDecode(\$(this).attr('href')));});
	}
	function URLDecode(url) {
		var decoded = url;
		var binVal, c;
		var re = /(%[^%]{2})/;
		while((m = re.exec(decoded))!=null && m.length > 1 && m[1] != '') {
			b = parseInt(m[1].substr(1),16);
			c = String.fromCharCode(b);
			decoded = decoded.replace(m[1], c);
		}
		return decoded;
	}
	\$(function(){
		\$('#search-string').live('keyup',function(e){if(e.keyCode==13&&\$('#search-string').attr('value')!='')GetSearchResults(); return false;});
	 });
  </script>
 </body>
</html>";

	$mailer = new Mailer();
	$get = $post = $session = '';
	foreach ($_GET as $key => $value) $get .= output_keyvalue($key, $value);
	foreach ($_POST as $key => $value) $post .= output_keyvalue($key, $value);
	foreach ($_SESSION as $key => $value) $session .= output_keyvalue($key, $value);
	if ($get != '') $get = substr($get, 0, -5);
	if ($post != '') $post = substr($post, 0, -5);
	if ($session != '') $session = substr($session, 0, -5);
	$caller = $_SERVER['SCRIPT_NAME'];
	$mailer->send('Apex Developers <developers@apexinnovations.com>', 'Uncaught Exception', "<p><strong>ERROR:</strong><br/>$error</p><p><strong>URL:</strong><br/>$caller</p><p><strong>GET:</strong><br/>$get</p><p><strong>POST:</strong><br/>$post</p><p><strong>SESSION:</strong><br/>$session</p><p><strong>Remote IP Address:</strong><br/>" . $_SERVER['REMOTE_ADDR'] ."</p>");

	// Have a connection to database, so log it
	/*$log = new apWebLog();
	$log->Site = APP_NAME;
	$log->File = $e->getFile();
	$log->Line = $e->getLine();
	$log->Message = $e->getMessage();
	$log->TimeLogged = date('Y-m-d H:i:s');
	$log->save();*/
}

set_exception_handler('exception_handler');

// Setup Autoload
set_include_path(get_include_path() . PATH_SEPARATOR .
				 COMMON_CLASSES . PATH_SEPARATOR .
				 APP . PATH_SEPARATOR .
				 APP_CLASSES . PATH_SEPARATOR .
				 APP_DB_CLASSES . PATH_SEPARATOR);
spl_autoload_extensions('.class.php,.inc,.php');
function autoload($classname) {
	// spl_autoload() automatically lowercases filenames (regardless of classname)...
	// ... which is one reason we're rolling our own
	// $inc = split(':', get_include_path()); //Changed split out of inc and ext because they are deperacated functions
	$inc = explode(':', get_include_path());
	// $ext = split(',', spl_autoload_extensions());
	$ext = explode(',', spl_autoload_extensions());
	// ... second reason is so we can automate finding some classes ...
	$names = array($classname, $classname . 's', $classname . 'es', substr($classname, 0, -1) . 'ies');
	foreach($inc as $dir) {
		foreach($ext as $x) {
			foreach($names as $name) {
				$file = $dir . '/' . $name . $x;
				if (file_exists($file)) {
					require_once($file);
					return;
				}
			}
		}
	}
	// ... yet another reason is so we can generate our own db classes on the fly if need be
	switch ($prefix = substr($classname, 0, 2)) {
		case 'ap':
			$database = 'ApexProducts';
			break;
		case 'as':
			$database = 'ApexStore';
			break;
		default:
			break;
	}
	if (isset($database)) {
		$remainder = substr($classname, 2);				// get rid of prefix
		if (substr($remainder, -3) == 'ies') {
			$table = $remainder;
			$object = substr($remainder, 0, -3) . 'y';
		} else if (substr($remainder, -1) == 's') {
			$table = $remainder;
			$object = substr($remainder, 0, -1);
		} else if (substr($remainder, -1) == 'y') {
			$table = substr($remainder, 0, -1) . 'ies';
			$object = $remainder;
		} else {
			$object = $remainder;
			$table = $object . 's';
		}
		$code = 
"class $prefix$table extends DBTables {
	protected static \$table = '$table';
	public function __construct(\$where = '', \$orderBy = '', \$from = '', \$sparseLoad = false, \$startRow = 0, \$count = 0) {
		global \$DB_$database;
		@parent::__construct(\$DB_$database, self::\$table, \$where, \$orderBy, \$from == '' ?  self::\$table : \$from, \$sparseLoad, \$startRow, \$count);
	}
}
class $prefix$object extends DBTable {
	protected static \$schema = array();
	protected static \$table = '$table';
	public function __construct(\$index) {
		global \$DB_$database;
		@parent::__construct(\$DB_$database, self::\$table, self::\$schema, \$index);
	}
}
";
		try {
			@eval($code);
		} catch (Exception $e) {
			// Do nothing... probably just attempting to create a bad class and/or duplicating one
		}
		return;
	}
	echo 'Class not found (' . $classname . ")\n";
}
spl_autoload_register('autoload');
?>