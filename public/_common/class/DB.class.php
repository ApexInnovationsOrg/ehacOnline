<?php
/**
 * Class representing connection to a database
 *
 * This class is responsible for connecting to a database
 *
 * @copyright	Copyright (c) 2010 Apex Innovations, Inc. (http://www.apexinnovations.com)
 * @version		1.0.0
 */
final class DB extends mysqli {
	// *** Public Methods ***
	public function __construct($file = 'db_settings.ini') {
		// Open the .ini file for database config
		if (!$settings = parse_ini_file($file, TRUE)) throw new exception('Unable to open ' . $file . '.');
		
		// Get settings from .ini file
		$host = $settings['db']['host'];
		$port = (empty($settings['db']['port']) ? '3306' : $settings['db']['port']);
		$dbname = $settings['db']['schema'];
		$username = $settings['db']['username'];
		$password = $settings['db']['password'];
		
		// Construct the parent
		parent::__construct($host, $username, $password, $dbname, $port);
	}
}
?>