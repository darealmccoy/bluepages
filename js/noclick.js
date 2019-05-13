document.onmousedown=click
var times=0
var times2=10
function click() {
if ((event.button==2) || (event.button==3)) {
if (times>=1) { bye() }
alert("Dont right click again please"); 
times++ } }
function bye() {
alert("I said NO right clicking! click ok to EXIT haha");
bye() }