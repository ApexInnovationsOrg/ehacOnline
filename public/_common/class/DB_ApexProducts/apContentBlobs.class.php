<?php
/* Name: ContentBlobs 
 * Author: John P Klein
 * Date: 10-31-2014
 * 
 * Description: This class will handle converting, saving, opening(almost anything BLOB related) BLOB data from our database, most importantly the audio(mp3) files for each page in Transitions.
 * Side Note: Bob Loblaw Law Blog
 * 
* Class to iterate through records in the courses data table in the ApexProducts database
*
* This class is responsible for iterating through the named table
*
* @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
* @version		1.0.0
*/
class apContentBlobs extends DBTables {
	protected static $table = 'ContentBlobs';
	
	public function __construct($where = '', $orderBy = '', $from = '', $sparseLoad = false, $startRow = 0, $count = 0) {
		global $DB_ApexProducts;
		
		parent::__construct($DB_ApexProducts, self::$table, $where, $orderBy, $from == '' ?  self::$table : $from, $sparseLoad, $startRow, $count);
	}
}



/**
* Class to access the courses data table in the ApexProducts database
*
* This class is responsible inserting, updating, deleting and selecting data from the named table
*
* @copyright	Copyright (c) 2011 Apex Innovations, Inc. (http://www.apexinnovations.com)
* @version		1.0.0
*/
class apContentBlob extends DBTable{

	protected static $schema = array();	// Schema representation of the table - static class variable
	protected static $table = 'ContentBlobs';
	
	public function __construct($index = NULL) {
		global $DB_ApexProducts;
		
		parent::__construct($DB_ApexProducts, self::$table, self::$schema, $index);
	}
	
	
	//Insert data
	public function insertBlob($filename, $type, $name, $size, $autoplay){
		// Read the file 
		$dat = fopen($filename, "r"); 
		$data = fread($dat,filesize($filename));
		fclose($dat); 
		
		$ContentBlob = new apContentBlob();
		
		$ContentBlob->CreationDate = date("Y-m-d H:i:s", time());
		$ContentBlob->AutoPlay = $autoplay;
		$ContentBlob->Data = $data;
		$ContentBlob->Type = $type;
		$ContentBlob->Name = $name;
		$ContentBlob->Size = $size;
			
		$ID = $ContentBlob->save();	
		
		if($ContentBlob->blobUUID($ID) == true){
			return $ID;
		}else{
			return 0;
		}
	}
	
	
	//UUID creation
	public function blobUUID($ID){
		global $DB_ApexProducts;
		
		$DB_ApexProducts->query("UPDATE ContentBlobs SET UUID = UUID() WHERE ID = $ID");
		
		return true;
	}
	
	
	// Update data
	// public function updateBlobs(){
		
		
		
		
	// }
	
	
	//Re-add data to blob content
	public function addData($updateID, $filename, $name, $type, $size, $autoplay){
		$ContentBlob = new apContentBlob("ID = $updateID");
		
		// Read the file 
		$dat = fopen($filename, "r"); 
		$data = fread($dat,filesize($filename));
		fclose($dat); 
		
		$ContentBlob->Data = $data;
		$ContentBlob->Name = $name;
		$ContentBlob->Type = $type;
		$ContentBlob->Size = $size;
		$ContentBlob->CreationDate = date("Y-m-d H:i:s", time());
		$ContentBlob->AutoPlay = $autoplay;
		
		if($ContentBlob->save()){
			return true;
		}else{
			return false;
		}
	}
	
	
	// Select data
	public function selectBlobs($PageID){
		$ContentBlobs = new apContentBlobs("BlobBridges.PageID=$PageID","ContentBlobs.ID DESC","ContentBlobs INNER JOIN BlobBridges ON BlobBridges.BlobID = ContentBlobs.ID");
		
		return $ContentBlobs;
	}
	
	
	// Make file from data
	public function makefileBlob($ID){
		$ContentBlob = new apContentBlob("ID=$ID");
		
		/*
		 * The class is looking for the directory within itself. In order to do this function, we might have
		 * to alter DBTables to handle fopen. No ideas yet.
		 * 
		 * Warning: fopen(../../../Classroom/engine/repository/audio/64374fd6-66af-11e4-9713-001ec95cb654): 
		 * failed to open stream: No such file or directory in 
		 * /var/www/html/lab/apexinnovations.com/_common/class/DB_ApexProducts/apContentBlobs.class.php on line 98
		*/
		
		
		$fp = fopen('../../../Classroom/engine/repository/audio/' . $ContentBlob->UUID,"w+");
		flock($fp, LOCK_EX);
		$filedate = date("Y-m-d H:i:s", filemtime("../../../Classroom/engine/repository/audio/". $ContentBlob->UUID));
		fwrite($fp, $ContentBlob->Data);
		flock($fp, LOCK_UN);
		fclose($fp);		
	}
	
	
}

?>