<!--this script got from www.javascriptfreecode.com-Coded by: Krishna Eydat -->
			<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1256">
<meta http-equiv="Content-Language" content="en-us">
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<title></title>
</head>

<body>

<head><script>

 function CC_getBrowserName()   {   
         document.forms[0].elements[0].value =navigator.appName;     
 }

 function CC_getBrowserVersion()   {   
         document.forms[0].elements[0].value =  navigator.appVersion;     
 }

 function CC_getBrowserCodeName()   {   
         document.forms[0].elements[0].value = navigator.appCodeName;     
 }

 function CC_getBrowserUserAgent()   {   
         document.forms[0].elements[0].value =  navigator.userAgent;     
 }

 function CC_getBrowserNameVersion()   {   
         document.forms[0].elements[0].value = navigator.appName + " " + navigator.appVersion;     
 }


 </script>
 </head>
 <center>
 
<center>
 <form NAME="detect">
 <input TYPE="text" NAME="browser" SIZE="26" MAXLENGTH="40" VALUE="Browser Detection"><br>
 <br><br>Choose a button to reveal your browser's self image.<br>
 <input TYPE="button" VALUE="appName" onClick="CC_getBrowserName()">
 <input TYPE="button" VALUE="appVersion" onClick="CC_getBrowserVersion()">
 <input TYPE="button" VALUE="appCodeName" onClick="CC_getBrowserCodeName()">
 <input TYPE="button" VALUE="userAgent" onClick="CC_getBrowserUserAgent()">
 <input TYPE="button" VALUE="appName / appVersion" onClick="CC_getBrowserNameVersion()"><br><br><br>
 </form>
 </center><p>	
<br />
<font face="Tahoma"><a target="_blank" href="http://www.javascriptfreecode.com/"><span style="font-size: 8pt; text-decoration: none">JavaScript Free Code</span></a></font>
<!-- End of Browser ID JavaScript-->
