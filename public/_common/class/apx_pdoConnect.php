<?php

class dbConn extends apx_DBAccessBaseClass{

	protected static $dbPDO;

	if($_SERVER['HTTP_HOST'] == 'devbox'){
		$host = '192.168.123.203';
	} else {
		$host = 'db1.apexinnovations.com';
	}
	
	private function __construct(){		
		try{
			self::$db = new PDO("mysql:host={$host};dbname=ApexProducts", 'phpDBaccess6', 'stbVaJTVHQZUYG7D', array(
								PDO::ATTR_PERSISTENT => true));
		}
		catch(PDOException $e){
			echo "Connection Error: " . $e->getMessage();
		}
	}
	
	public static function getConnection(){
		if(!self::$dbPDO){
			new dbConn;
		}
		
		return self::$dbPDO;
	}
}
?>