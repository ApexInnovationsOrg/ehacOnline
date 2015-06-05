// This is required for the Apex LMS Score Reporting (non-SCORM or AICC)
var timerArray = [0, 0];
var savedDataArray = [];	// Array of saved data
var errorToReport = "";

// Get the HTTP Object
function getHTTPObject(){
	if (window.ActiveXObject) 
		return new ActiveXObject("Microsoft.XMLHTTP");
	else if (window.XMLHttpRequest) 
		return new XMLHttpRequest();
	else {
		clearTimers();
		doAlertUser(false, "Your browser does not support AJAX.");
		return null;
	}
}

// Clear any timers
function clearTimers() {
	clearInterval(timerArray[0]);
	clearTimeout(timerArray[1]);
}

// MAIN FUNCTION - wrapper that attempts to save score data to the LMS
function saveScore(action, method, data, https) {
	savedDataArray = [action, method, data, https];
	sendScore(action, method, data, https);
	timerArray[0] = setInterval("sendScore('" + action + "'," + method + ",'" + data + "'," + https + ")", 15000);
	timerArray[1] = setTimeout("lmsSaveFailed('" + action + "'," + method + ",'" + data + "'," + https + ")", 43000);
}

// Called when saving to the LMS fails for any reason
function lmsSaveFailed(action, method, data, https) {
	clearTimers();
	httpObject = getHTTPObject();
	if (httpObject != null) {
		httpObject.open("GET", 'http' + (https ? 's' : '') + '://www.apexinnovations.com/LMS/LMSReportingError.php?action=' + action + '&method=' + method + '&data=' + data + '&error=' + errorToReport, true);
		httpObject.send(null);
		httpObject.onreadystatechange = reportError;
	}
}

// Sends score data to the LMS and specifies callback function
function sendScore(action, method, data, https){
	httpObject = getHTTPObject();
	if (httpObject != null) {
		errorToReport = "LMS reporting page: No response.";
		httpObject.open("GET", 'http' + (https ? 's' : '') + '://www.apexinnovations.com/LMS/LMSAjaxRequest_XD.php?action=' + action + '&method=' + method + '&data=' + data, true);
		httpObject.send(null);
		httpObject.onreadystatechange = reportOutcome;
	}
}

// Report success or failure from LMS Score Saving
function reportOutcome(){
	if(httpObject.readyState == 4 && httpObject.status == 200) {
		try {
			response = eval("(" + httpObject.responseText + ")");
			if (response.success != undefined) {
				clearTimers();
				errorToReport = "";
				doAlertUser(true, response.success);
			} else if (response.error != undefined) {
				clearTimers();
				errorToReport = response.error;
				lmsSaveFailed(savedDataArray[0], savedDataArray[1], savedDataArray[2], savedDataArray[3]);
			} else {
				errorToReport = "LMS reporting page: Not reporting properly formatted JSON data: " + httpObject.responseText.replace(/<\S[^><]*>/g, '') + ".";
			}
		} catch (e) {
			errorToReport = "LMS reporting page: Not reporting properly formatted JSON data: " + httpObject.responseText.replace(/<\S[^><]*>/g, '') + ".";
		}
	}
}

// Report success or failure from Apex Error Recording
function reportError(){
	if(httpObject.readyState == 4 && httpObject.status == 200) {
		try {
			response = eval("(" + httpObject.responseText + ")");
			if (response.success != undefined) {
				doAlertUser(true, "Data Saved!\n\nPlease allow up to 24 hours to appear in your transcript.");
			} else if (response.error != undefined) {
				doAlertUser(false, "LMS Save - Critical Failure.\n\nPlease call Apex Innovations tech support at 866-294-4599 ext. 111 and relay the following information:\n\nAction:\t" + savedDataArray[0] + "\nData:\t" + savedDataArray[2] + "\nError:\t" + errorToReport);
			}
		} catch (e) {
			errorToReport = "Apex reporting page: Not reporting properly formatted JSON data: " + httpObject.responseText.replace(/<\S[^><]*>/g, '') + "."; // Just in case
			doAlertUser(false, "LMS Save - Critical Failure.\n\nPlease call Apex Innovations tech support at 866-294-4599 ext. 111 and relay the following information:\n\nAction:\t" + savedDataArray[0] + "\nData:\t" + savedDataArray[2] + "\nError:\t" + errorToReport);
		}
	}
}