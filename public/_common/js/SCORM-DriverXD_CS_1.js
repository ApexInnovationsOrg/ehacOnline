// NOTE: EDIT urlToPipeXD to match the URL to the scormPipeXD.html file in domain 1 (LMS)
// URL TO LMS DOMAIN

		var pipeURL = "";
		var pipeURLLoc = window.parent.location;
		var pipeHash = new String(pipeURLLoc.hash);
		
		var strPipeURL = pipeHash.substr(0,pipeHash.toLowerCase().lastIndexOf("scormdriver")); 
		//This gets the root folder of the course on the LMS

		 strPipeURL = strPipeURL.substr(1,strPipeURL.length) + "scormdriverxd/scormpipexd.html";
		 
		 pipeURL = strPipeURL;
		

var contentPath = "";


// -- no edits required below this line ------
var frmPipeFrame = parent.frames["pipeFrame"];

numberPipeMessages = 0;
var lastId = "";
function checkForMessages(){

	if(location.hash != lastId){

		
		lastId = location.hash;	
		numberPipeMessages++;
		
		var loc = new String(location.hash);
	
		var aryMessages = loc.split("#");
		
		var cmdSD;
		
		//This should be the first hash mark after the LMS Location
		if(aryMessages[2]!=null)
		{
			cmdSD = aryMessages[2].substring(aryMessages[2].indexOf("_")+1, aryMessages[2].length);
		}else{
			cmdSD = aryMessages[1].substring(aryMessages[1].indexOf("_")+1, aryMessages[1].length);
		}
		
		var arrcmdSD = cmdSD.split(":");
		switch(arrcmdSD[0]){
		//Returning Getters:		
		// int returns
			case "SuccessStatus":
				if(new Number(arrcmdSD[1])==1)
				{
					//alert(SCORMDriver.LastMessage + " - success");
				}else{
					alert("Could Not Save Data To LMS");
				}
				break;
			case "ReturningScore":
			//alert("returning score: " + new Number(arrcmdSD[1]));
				 return new Number(arrcmdSD[1]);
				 break;	
			case "ReturningPassingScore":
			case "ReturningAudioVolumePreference"://returns int 1-100
			case "ReturningPreviouslyAccumulatedTime": // int milliseconds
			case "ReturningSessionAccumulatedTime":
			case "ReturningMaxTimeAllowed":
			case "ReturningEntryMode":
			case "ReturningLessonMode":
			case "ReturningSpeedPreference":
			alert("returning number: " + new Number(arrcmdSD[1]));
				 return new Number(arrcmdSD[1]);
				 break;				 
		// boolean returns
			case "ReturningIsLoaded":
			case "ReturningIsLmsPresent":
				alert("returning boolean: "+ new Boolean(arrcmdSD[1]));
				return new Boolean(arrcmdSD[1]);
				break;				
		// string returns
			case "ReturningBookmark":
			case "ReturningDataChunk":
			case "ReturningStatus":
			case "ReturningStudentID":
			case "ReturningStudentName":
			case "ReturningLastError":
			case "ReturningLastLMSErrorCode":
			case "ReturningLastErrorDesc":
			case "ReturningLaunchData":
			case "ReturningLMSComments":
			case "ReturningSpeedPreference":
			case "ReturningLanguagePreference":
			case "ReturningTextPreference":
			case "ReturningTakingForCredit":
			case "ReturningAudioPlayPreference":
			case "ReturningObjectiveStatus"://(strObjectiveID){
			case "ReturningObjectiveDescription"://(strObjectiveID){
			case "ReturningObjectiveScore"://(strObjectiveID)
				alert("returning string: "+ arrcmdSD[1]);
				return arrcmdSD[1];
				break;
		// array returns
			case "ReturningComments": // array
				alert("returning array: "+ arrcmdSD[1]);
				return arrcmdSD[1];
				break;
		}
	}
}
		
SCORMDriver = {
	setLastMessage: function(strMessage){
		this.LastMessage = strMessage;
	},
	getLastMessage: function(){
		return this.LastMessage;
	},
// caller
	sendPipeMessageToLMS: function(strMessage){
		this.LastMessage = strMessage;
		//01-27-2009 - Rustici - Added a timestamp to this call to eliminate proxy cacheing.
		var ts = new Date().getTime();
		frmPipeFrame.location = pipeURL + "?ts="+ ts + strMessage;
		//old line:
		//frmPipeFrame.location = pipeURL + strMessage;
	},
//Setters
	SetReachedEnd: function(){
		this.sendPipeMessageToLMS("#pipeMessage_SetReachedEnd");
	},
	ConcedeControl: function(){
		this.sendPipeMessageToLMS("#pipeMessage_ConcedeControl");
	}, 
	SetScore: function(intScore, intMaxScore, intMinScore){
		this.sendPipeMessageToLMS("#pipeMessage_SetScore:"+intScore+":"+intMaxScore+":"+intMinScore);
	}, 
	ResetStatus: function(){
		this.sendPipeMessageToLMS("#pipeMessage_ResetStatus");
	}, 
	CommitData: function(){
		this.sendPipeMessageToLMS("#pipeMessage_CommitData");
	},
 	SetPassed: function(){
		this.sendPipeMessageToLMS("#pipeMessage_SetPassed");
	},
	SetFailed: function(){
		this.sendPipeMessageToLMS("#pipeMessage_SetFailed");
	},
	PauseTimeTracking: function(){
		this.sendPipeMessageToLMS("#pipeMessage_PauseTimeTracking");
	},
	ResumeTimeTracking: function(){
		this.sendPipeMessageToLMS("#pipeMessage_ResumeTimeTracking");
	},
	SetObjectiveScore: function(strObjectiveID, intScore, intMaxScore, intMinScore){
		this.sendPipeMessageToLMS("#pipeMessage_SetObjectiveScore:"+strObjectiveID+":"+intScore+":"+intMaxScore+":"+intMinScore);
	},
	SetObjectiveStatus: function(strObjectiveID, Lesson_Status){	
		this.sendPipeMessageToLMS("#pipeMessage_SetObjectiveStatus:"+strObjectiveID+":"+Lesson_Status);
	},
	SetObjectiveDescription: function(strObjectiveID, strObjectiveDescription){	
		this.sendPipeMessageToLMS("#pipeMessage_SetObjectiveStatus:"+strObjectiveID+":"+strObjectiveDescription);
	},
	SetSessionTime: function(intMilliseconds){
		this.sendPipeMessageToLMS("#pipeMessage_SetSessionTime:"+intMilliseconds);
	},
	SetAudioPreference: function(PlayPreference, intPercentOfMaxVolume){
		this.sendPipeMessageToLMS("#pipeMessage_SetAudioPreference:"+PlayPreference+":"+intPercentOfMaxVolume);
	},
	SetLanguagePreference: function(strLanguage){
		this.sendPipeMessageToLMS("#pipeMessage_SetLanguagePreference:"+strLanguage);
	},
	SetSpeedPreference: function(intPercentOfMax){
		this.sendPipeMessageToLMS("#pipeMessage_SetSpeedPreference:"+intPercentOfMax);
	},
	SetTextPreference: function(intPreference){	
		this.sendPipeMessageToLMS("#pipeMessage_SetTextPreference:"+intPreference);
	},
	SetBookmark: function(strBookmark){
		this.sendPipeMessageToLMS("#pipeMessage_SetBookmark:"+strBookmark);
	},
	SetDataChunk: function(strData){
		this.sendPipeMessageToLMS("#pipeMessage_SetDataChunk:"+strData);
	},
	WriteComment: function(strComment){
		this.sendPipeMessageToLMS("#pipeMessage_WriteComment:"+strComment);
	},
	RecordTrueFalseInteraction: function(strID, blnResponse, blnCorrect, blnCorrectResponse, strDescription, intWeighting, intLatency, strLearningObjectiveID){
		this.sendPipeMessageToLMS("#pipeMessage_RecordTrueFalseInteraction:"+strID+":"+blnResponse+":"+blnCorrect+":"+blnCorrectResponse+":"+strDescription+":"+intWeighting+":"+intLatency+":"+strLearningObjectiveID);
	},
	RecordMultipleChoiceInteraction: function(strID, response, blnCorrect, correctResponse, strDescription, intWeighting, intLatency, strLearningObjectiveID){
		this.sendPipeMessageToLMS("#pipeMessage_RecordMultipleChoiceInteraction:"+strID+":"+response+":"+blnCorrect+":"+correctResponse+":"+strDescription+":"+intWeighting+":"+intLatency+":"+strLearningObjectiveID);
	},
	RecordFillInInteraction: function(strID, strResponse, blnCorrect, strCorrectResponse, strDescription, intWeighting, intLatency, strLearningObjectiveID){
		this.sendPipeMessageToLMS("#pipeMessage_RecordFillInInteraction:"+strID+":"+strResponse+":"+blnCorrect+":"+strCorrectResponse+":"+strDescription+":"+intWeighting+":"+intLatency+":"+strLearningObjectiveID);
	},
	RecordMatchingInteraction: function(strID, response, blnCorrect, correctResponse, strDescription, intWeighting, intLatency, strLearningObjectiveID){
		this.sendPipeMessageToLMS("#pipeMessage_RecordMatchingInteraction:"+strID+":"+response+":"+blnCorrect+":"+correctResponse+":"+strDescription+":"+intWeighting+":"+intLatency+":"+strLearningObjectiveID);
	},
	RecordPerformanceInteraction: function(strID, strResponse, blnCorrect, strCorrectResponse, strDescription, intWeighting, intLatency, strLearningObjectiveID){
		this.sendPipeMessageToLMS("#pipeMessage_RecordPerformanceInteraction:"+strID+":"+blnResponse+":"+blnCorrect+":"+strCorrectResponse+":"+strDescription+":"+intWeighting+":"+intLatency+":"+strLearningObjectiveID);
	},
	RecordSequencingInteraction: function(strID, response, blnCorrect, correctResponse, strDescription, intWeighting, intLatency, strLearningObjectiveID){
		this.sendPipeMessageToLMS("#pipeMessage_RecordSequencingInteraction:"+strID+":"+response+":"+blnCorrect+":"+correctResponse+":"+strDescription+":"+intWeighting+":"+intLatency+":"+strLearningObjectiveID);
	},
	RecordLikeInteraction: function(strID, response, blnCorrect, correctResponse, strDescription, intWeighting, intLatency, strLearningObjectiveID){
		this.sendPipeMessageToLMS("#pipeMessage_RecordLikeInteraction:"+strID+":"+response+":"+blnCorrect+":"+correctResponse+":"+strDescription+":"+intWeighting+":"+intLatency+":"+strLearningObjectiveID);
	},
	RecordNumericInteraction: function(strID, strResponse, blnCorrect, strCorrectResponse, strDescription, intWeighting, intLatency, strLearningObjectiveID){
		this.sendPipeMessageToLMS("#pipeMessage_RecordNumericInteraction:"+strID+":"+strResponse+":"+blnCorrect+":"+strCorrectResponse+":"+strDescription+":"+intWeighting+":"+intLatency+":"+strLearningObjectiveID);
	},

//getters

	GetScore: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetScore");
	},
	GetPassingScore: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetPassingScore");
	},
	GetAudioVolumePreference: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetAudioVolumePreference");
	},
	GetPreviouslyAccumulatedTime: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetPreviouslyAccumulatedTime");
	},
	GetSessionAccumulatedTime: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetSessionAccumulatedTime");
	},
	GetMaxTimeAllowed: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetMaxTimeAllowed");
	},
	GetEntryMode: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetEntryMode");
	},
	GetLessonMode: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetLessonMode");
	},
	GetSpeedPreference: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetSpeedPreference");
	},
// boolean returns
	IsLoaded: function(){
		this.sendPipeMessageToLMS("#pipeMessage_IsLoaded");
	},
	IsLmsPresent: function(){
		this.sendPipeMessageToLMS("#pipeMessage_IsLmsPresent");
	},		
// string returns
	GetBookmark: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetBookmark");
	},
	GetDataChunk: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetDataChunk");
	},
	GetStatus: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetStatus");
	},
	GetStudentID: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetStudentID");
	},
	GetStudentName: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetStudentName");
	},
	GetLastError: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetLastError");
	},
	GetLastLMSErrorCode: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetLastLMSErrorCode");
	},
	GetLastErrorDesc: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetLastErrorDesc");
	},
	GetLaunchData: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetLaunchData");
	},
	GetLMSComments: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetLMSComments");
	},
	GetSpeedPreference: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetSpeedPreference");
	},
	GetLanguagePreference: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetLanguagePreference");
	},
	GetTextPreference: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetTextPreference");
	},
	GetTakingForCredit: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetTakingForCredit");
	},
	GetAudioPlayPreference: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetAudioPlayPreference");
	},
	GetObjectiveStatus: function(strObjectiveID){
		this.sendPipeMessageToLMS("#pipeMessage_GetObjectiveStatus");
	},
	GetObjectiveDescription: function(strObjectiveID){
		this.sendPipeMessageToLMS("#pipeMessage_GetObjectiveDescription");
	},
	GetObjectiveScore: function(strObjectiveID){
		this.sendPipeMessageToLMS("#pipeMessage_GetObjectiveScore");
	},
	GetComments: function(){
		this.sendPipeMessageToLMS("#pipeMessage_GetComments");
	}//,


//ssp	
/*
	CreateDataBucket: function(strBucketId, intMinSize, intMaxSize){
		locationPipeFrame=urlToPipeXD+"#pipeMessage_CreateDataBucket:");
	},
	//function GetDataFromBucket(strBucketId){
	PutDataInBucket: function(strBucketId, strData, blnAppendToEnd){
		locationPipeFrame=urlToPipeXD+"#pipeMessage_GetDataFromBucket:");
	},
	DetectSSPSupport: function(){
		locationPipeFrame=urlToPipeXD+"#pipeMessage_DetectSSPSupport:");
	},
	GetBucketInfo: function(strBucketId){
		locationPipeFrame=urlToPipeXD+"#pipeMessage_GetBucketInfo:");
	},
	SSPBucketSize: function(totalSpace, usedSpace){
		locationPipeFrame=urlToPipeXD+"#pipeMessage_SSPBucketSize:");
	}
*/	
}// end class

var SD = SCORMDriver;
setInterval(checkForMessages, 200);