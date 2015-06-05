


function GetQueryStringValue(strElement,strQueryString){var aryPairs;var i;var intEqualPos;var strArg="";var strValue="";WriteToDebug("In GetQueryStringValue strElement="+strElement+", strQueryString="+strQueryString);strQueryString=strQueryString.substring(1);aryPairs=strQueryString.split("&");strElement=strElement.toLowerCase();for(i=0;i<aryPairs.length;i++){WriteToDebug("Looking at element-"+aryPairs[i]);intEqualPos=aryPairs[i].indexOf('=');if(intEqualPos!=-1){strArg=aryPairs[i].substring(0,intEqualPos);WriteToDebug("Arg="+strArg);if(EqualsIgnoreCase(strArg,strElement)){WriteToDebug("Found Match");strValue=aryPairs[i].substring(intEqualPos+1);WriteToDebug("Decoding value-"+strValue);strValue=new String(strValue)
strValue=strValue.replace(/\+/g,"%20")
strValue=unescape(strValue);WriteToDebug("Returning value-"+strValue);return new String(strValue);}}}
WriteToDebug("No Match Found, returning empty string");return"";}
function ConvertStringToBoolean(str){var intTemp;WriteToDebug("In ConvertStringToBoolean");if(EqualsIgnoreCase(str,"true")||EqualsIgnoreCase(str,"t")){WriteToDebug("Found alpha true");return true;}
else{intTemp=parseInt(str);if(intTemp==1||intTemp==-1){WriteToDebug("Found numeric true");return true;}
else{WriteToDebug("Returning false");return false;}}}
function EqualsIgnoreCase(str1,str2){WriteToDebug("In EqualsIgnoreCase str1="+str1+", str2="+str2);var blnReturn;str1=new String(str1);str2=new String(str2);blnReturn=(str1.toLowerCase()==str2.toLowerCase())
WriteToDebug("Returning "+blnReturn);return blnReturn;}
function ValidInteger(intNum){WriteToDebug("In ValidInteger intNum="+intNum);var str=new String(intNum);if(str.indexOf("-",0)==0){str=str.substring(1,str.length-1);}
var regValidChars=new RegExp("[^0-9]");if(str.search(regValidChars)==-1){WriteToDebug("Returning true");return true;}
WriteToDebug("Returning false");return false;}
function ConvertDateToIso8601TimeStamp(dtm){var strTimeStamp;dtm=new Date(dtm);var Year=dtm.getFullYear();var Month=dtm.getMonth()+1;var Day=dtm.getDate();var Hour=dtm.getHours();var Minute=dtm.getMinutes();var Second=dtm.getSeconds();Month=ZeroPad(Month,2);Day=ZeroPad(Day,2);Hour=ZeroPad(Hour,2);Minute=ZeroPad(Minute,2);Second=ZeroPad(Second,2);strTimeStamp=Year+"-"+Month+"-"+Day+"T"+Hour+":"+Minute+":"+Second;return strTimeStamp;}
function ConvertDateToCMIDate(dtmDate){WriteToDebug("In ConvertDateToCMIDate");var strYear;var strMonth;var strDay;var strReturn;dtmDate=new Date(dtmDate);strYear=dtmDate.getFullYear()
strMonth=dtmDate.getMonth();strDay=dtmDate.getDate();strReturn=ZeroPad(strYear,4)+"/"+ZeroPad(strMonth,2)+"/"+ZeroPad(strDay,2);return strReturn;}
function ConvertDateToCMITime(dtmDate){var strHours;var strMinutes;var strSeconds;var strReturn;dtmDate=new Date(dtmDate);strHours=dtmDate.getHours();strMinutes=dtmDate.getMinutes();strSeconds=dtmDate.getSeconds();strReturn=ZeroPad(strHours,2)+":"+ZeroPad(strMinutes,2)+":"+ZeroPad(strSeconds,2);return strReturn;}
function ConvertCMITimeSpanToMS(strTime){WriteToDebug("In ConvertSCORMTimeToMS, strTime="+strTime);var aryParts;var intHours;var intMinutes;var intSeconds;var intTotalMilliSeconds;aryParts=strTime.split(":");if(!IsValidCMITimeSpan(strTime)){WriteToDebug("ERROR - Invalid TimeSpan");SetErrorInfo(SCORM_ERROR_GENERAL,"LMS ERROR - Invalid time span passed to ConvertSCORMTimeToMS, please contact technical support");return 0;}
intHours=aryParts[0];intMinutes=aryParts[1];intSeconds=aryParts[2];WriteToDebug("intHours="+intHours+" intMinutes="+intMinutes+" intSeconds="+intSeconds);intTotalMilliSeconds=(intHours*3600000)+(intMinutes*60000)+(intSeconds*1000);intTotalMilliSeconds=Math.round(intTotalMilliSeconds);WriteToDebug("Returning "+intTotalMilliSeconds);return intTotalMilliSeconds;}
function ConvertScorm2004TimeToMS(strIso8601Time){WriteToDebug("In ConvertScorm2004TimeToMS, strIso8601Time="+strIso8601Time);var intTotalMs=0;var strNumberBuilder;var strCurrentCharacter;var blnInTimeSection;var Seconds=0;var Minutes=0;var Hours=0;var Days=0;var Months=0;var Years=0;var MILLISECONDS_PER_SECOND=1000;var MILLISECONDS_PER_MINUTE=MILLISECONDS_PER_SECOND*60;var MILLISECONDS_PER_HOUR=MILLISECONDS_PER_MINUTE*60;var MILLISECONDS_PER_DAY=MILLISECONDS_PER_HOUR*24;var MILLISECONDS_PER_MONTH=MILLISECONDS_PER_DAY*(((365*4)+1)/48);var MILLISECONDS_PER_YEAR=MILLISECONDS_PER_MONTH*12;strIso8601Time=new String(strIso8601Time);strNumberBuilder="";strCurrentCharacter="";blnInTimeSection=false;for(var i=1;i<strIso8601Time.length;i++){strCurrentCharacter=strIso8601Time.charAt(i);if(IsIso8601SectionDelimiter(strCurrentCharacter)){switch(strCurrentCharacter.toUpperCase()){case"Y":Years=parseInt(strNumberBuilder);break;case"M":if(blnInTimeSection){Minutes=parseInt(strNumberBuilder);}
else{Months=parseInt(strNumberBuilder);}
break;case"D":Days=parseInt(strNumberBuilder);break;case"H":Hours=parseInt(strNumberBuilder);break;case"S":Seconds=parseFloat(strNumberBuilder);break;case"T":blnInTimeSection=true;break;}
strNumberBuilder="";}
else{strNumberBuilder+=""+strCurrentCharacter;}}
WriteToDebug("Years="+Years+"\n"+"Months="+Months+"\n"+"Days="+Days+"\n"+"Hours="+Hours+"\n"+"Minutes="+Minutes+"\n"+"Seconds="+Seconds+"\n");intTotalMs=(Years*MILLISECONDS_PER_YEAR)+
(Months*MILLISECONDS_PER_MONTH)+
(Days*MILLISECONDS_PER_DAY)+
(Hours*MILLISECONDS_PER_HOUR)+
(Minutes*MILLISECONDS_PER_MINUTE)+
(Seconds*MILLISECONDS_PER_SECOND);intTotalMs=Math.round(intTotalMs);WriteToDebug("returning-"+intTotalMs);return intTotalMs;}
function IsIso8601SectionDelimiter(str){if(str.search(/[PYMDTHS]/)>=0){return true;}
else{return false;}}
function IsValidCMITimeSpan(strValue){WriteToDebug("In IsValidCMITimeSpan strValue="+strValue);var regValid=/^\d?\d?\d?\d:\d?\d:\d?\d(.\d\d?)?$/;if(strValue.search(regValid)>-1){WriteToDebug("Returning True");return true;}
else{WriteToDebug("Returning False");return false;}}
function IsValidIso8601TimeSpan(strValue){WriteToDebug("In IsValidIso8601TimeSpan strValue="+strValue);var regValid=/^P(\d+Y)?(\d+M)?(\d+D)?(T(\d+H)?(\d+M)?(\d+(.\d\d?)?S)?)?$/;if(strValue.search(regValid)>-1){WriteToDebug("Returning True");return true;}
else{WriteToDebug("Returning False");return false;}}
function ConvertMilliSecondsToSCORMTime(intTotalMilliseconds){var intHours;var intintMinutes;var intSeconds;var intMilliseconds;var intHundredths;var strCMITimeSpan;WriteToDebug("In ConvertMilliSecondsIntoSCORMTime, intTotalMilliseconds="+intTotalMilliseconds);intMilliseconds=intTotalMilliseconds%1000;intSeconds=((intTotalMilliseconds-intMilliseconds)/1000)%60;intMinutes=((intTotalMilliseconds-intMilliseconds-(intSeconds*1000))/60000)%60;intHours=(intTotalMilliseconds-intMilliseconds-(intSeconds*1000)-(intMinutes*60000))/3600000;WriteToDebug("Separated Parts, intHours="+intHours+", intMinutes="+intMinutes+", intSeconds="+intSeconds+", intMilliseconds="+intMilliseconds);if(intHours==10000)
{WriteToDebug("Max intHours detected");intHours=9999;intMinutes=(intTotalMilliseconds-(intHours*3600000))/60000;if(intMinutes==100)
{intMinutes=99;}
intMinutes=Math.floor(intMinutes);intSeconds=(intTotalMilliseconds-(intHours*3600000)-(intMinutes*60000))/1000;if(intSeconds==100)
{intSeconds=99;}
intSeconds=Math.floor(intSeconds);intMilliseconds=(intTotalMilliseconds-(intHours*3600000)-(intMinutes*60000)-(intSeconds*1000));WriteToDebug("Separated Parts, intHours="+intHours+", intMinutes="+intMinutes+", intSeconds="+intSeconds+", intMilliseconds="+intMilliseconds);}
intHundredths=Math.floor(intMilliseconds/10);strCMITimeSpan=ZeroPad(intHours,4)+":"+ZeroPad(intMinutes,2)+":"+ZeroPad(intSeconds,2)+"."+intHundredths;WriteToDebug("strCMITimeSpan="+strCMITimeSpan);if(intHours>9999)
{strCMITimeSpan="9999:99:99.99";}
WriteToDebug("returning "+strCMITimeSpan);return strCMITimeSpan;}
function ConvertMilliSecondsIntoSCORM2004Time(intTotalMilliseconds){WriteToDebug("In ConvertMilliSecondsIntoSCORM2004Time intTotalMilliseconds="+intTotalMilliseconds);var ScormTime="";var HundredthsOfASecond;var Seconds;var Minutes;var Hours;var Days;var Months;var Years;var HUNDREDTHS_PER_SECOND=100;var HUNDREDTHS_PER_MINUTE=HUNDREDTHS_PER_SECOND*60;var HUNDREDTHS_PER_HOUR=HUNDREDTHS_PER_MINUTE*60;var HUNDREDTHS_PER_DAY=HUNDREDTHS_PER_HOUR*24;var HUNDREDTHS_PER_MONTH=HUNDREDTHS_PER_DAY*(((365*4)+1)/48);var HUNDREDTHS_PER_YEAR=HUNDREDTHS_PER_MONTH*12;HundredthsOfASecond=Math.floor(intTotalMilliseconds/10);Years=Math.floor(HundredthsOfASecond/HUNDREDTHS_PER_YEAR);HundredthsOfASecond-=(Years*HUNDREDTHS_PER_YEAR);Months=Math.floor(HundredthsOfASecond/HUNDREDTHS_PER_MONTH);HundredthsOfASecond-=(Months*HUNDREDTHS_PER_MONTH);Days=Math.floor(HundredthsOfASecond/HUNDREDTHS_PER_DAY);HundredthsOfASecond-=(Days*HUNDREDTHS_PER_DAY);Hours=Math.floor(HundredthsOfASecond/HUNDREDTHS_PER_HOUR);HundredthsOfASecond-=(Hours*HUNDREDTHS_PER_HOUR);Minutes=Math.floor(HundredthsOfASecond/HUNDREDTHS_PER_MINUTE);HundredthsOfASecond-=(Minutes*HUNDREDTHS_PER_MINUTE);Seconds=Math.floor(HundredthsOfASecond/HUNDREDTHS_PER_SECOND);HundredthsOfASecond-=(Seconds*HUNDREDTHS_PER_SECOND);if(Years>0){ScormTime+=Years+"Y";}
if(Months>0){ScormTime+=Months+"M";}
if(Days>0){ScormTime+=Days+"D";}
if((HundredthsOfASecond+Seconds+Minutes+Hours)>0){ScormTime+="T";if(Hours>0){ScormTime+=Hours+"H";}
if(Minutes>0){ScormTime+=Minutes+"M";}
if((HundredthsOfASecond+Seconds)>0){ScormTime+=Seconds;if(HundredthsOfASecond>0){ScormTime+="."+HundredthsOfASecond;}
ScormTime+="S";}}
if(ScormTime==""){ScormTime="0S";}
ScormTime="P"+ScormTime;WriteToDebug("Returning-"+ScormTime);return ScormTime;}
function ZeroPad(intNum,intNumDigits){WriteToDebug("In ZeroPad intNum="+intNum+" intNumDigits="+intNumDigits);var strTemp;var intLen;var i;strTemp=new String(intNum);intLen=strTemp.length;if(intLen>intNumDigits){WriteToDebug("Length of string is greater than num digits, trimming string");strTemp=strTemp.substr(0,intNumDigits);}
else{for(i=intLen;i<intNumDigits;i++){strTemp="0"+strTemp;}}
WriteToDebug("Returning - "+strTemp);return strTemp;}
function IsValidDecimal(strValue){WriteToDebug("In IsValidDecimal, strValue="+strValue);strValue=new String(strValue);if(strValue.search(/[^.\d-]/)>-1){WriteToDebug("Returning False - character other than a digit, dash or period found");return false;}
if(strValue.search("-")>-1){if(strValue.indexOf("-",1)>-1){WriteToDebug("Returning False - dash found in the middle of the string");return false;}}
if(strValue.indexOf(".")!=strValue.lastIndexOf(".")){WriteToDebug("Returning False - more than one decimal point found");return false;}
if(strValue.search(/\d/)<0){WriteToDebug("Returning False - no digits found");return false;}
WriteToDebug("Returning True");return true;}
function IsAlphaNumeric(strValue){WriteToDebug("In IsAlphaNumeric");if(strValue.search(/\w/)<0){WriteToDebug("Returning false");return false;}
else{WriteToDebug("Returning true");return true;}}