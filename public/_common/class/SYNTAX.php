<?php
// This file is used to help debug syntax errors in PHP files.
// Make sure to have a copy of SYNTAX.php in the same folder as file being debugged.
//
// Usage: SYNTAX.php?<filename.php>[original query string]
//
// Example: SYNTAX.php?test.php?a=1&b=2&c=abcde
//			The a, b, c $_GET params will all be passed to file being debugged

// Setup reporting to show all relevant errors
error_reporting(E_ALL ^ E_WARNING ^ E_NOTICE);
ini_set('display_errors','On');

// In example $_SERVER['QUERY_STRING'] = "test.php?a=1&b=2&c=abcde"
$qs = explode("?", $_SERVER['QUERY_STRING']);		// Breaks into ["test.php", "a=1&b=2&c=abcde"]
unset($_GET);										// First, unset any $_GET
if (count($qs) == 0 || $qs[0] == "") {
	echo "<p>USAGE: " . $_SERVER['SCRIPT_FILENAME'] . "?&lt;file-to-be-debugged.php&gt;[?&lt;var&gt;=&lt;value&gt;&amp;&lt;var&gt;=&lt;value&gt;&amp;...]</p>";
	exit(0);
} else if (count($qs) > 1) {						// Need to update $_GET for file being debugged
	$args = explode("&", $qs[1]);					// Now parse the args and ...
	foreach ($args as $arg) {
		$vals = explode("=", $arg);
		$_GET[$vals[0]] = $vals[1];					// Reset the $_GET array for file being debugged
	}
} 

// Now, include the file being debugged
include($qs[0]);
?>