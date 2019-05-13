var x,y
var kern=20 
var flag=0
var message="..."
message=message.split("")
var xpos=new Array()
for (i=0;i<message.length;i++) {
	xpos[i]=-50
	}
var ypos=new Array()
for (i=0;i<message.length;i++) {
	ypos[i]=-50
	}
function handlerMM(e){
	x = (e) ? e.pageX : document.body.scrollLeft+event.clientX
	y = (e) ? e.pageY : document.body.scrollTop+event.clientY
	flag=1
	}
function makebanner() {
	if (flag==1) {
		for (i=message.length-1; i>=1; i--) {
			xpos[i]=xpos[i-1]+kern
			ypos[i]=ypos[i-1]
			}
		xpos[0]=x+kern
		ypos[0]=y
		for (i=0; i<message.length; i++) {
			if (document.getElementById) {
				var thisspan = document.getElementById("span"+i).style
				} else {
				var thisspan = eval((document.layers)?"document.span"+i:"span"+(i)+".style")
				}
			if (thisspan.posLeft) {
				thisspan.posLeft=xpos[i]
				thisspan.posTop=ypos[i]
				}
			if (!thisspan.posLeft) {
				thisspan.left=xpos[i]
				thisspan.top=ypos[i]
				}
			}
		}
		var timer=setTimeout("makebanner()",30)
	}
window.onload=makebanner;


for (i=0;i<message.length;i++) {
document.write("<span id='span"+i+"' class='spanstyle'>")
document.write(message[i])
document.write("</span>")
}
if (document.layers){
document.captureEvents(Event.MOUSEMOVE);
}
document.onmousemove = handlerMM;

var x,y
var kern=20 
var flag=0
var message="..."
message=message.split("")
var xpos=new Array()
for (i=0;i<message.length;i++) {
	xpos[i]=-50
	}
var ypos=new Array()
for (i=0;i<message.length;i++) {
	ypos[i]=-50
	}
function handlerMM(e){
	x = (e) ? e.pageX : document.body.scrollLeft+event.clientX
	y = (e) ? e.pageY : document.body.scrollTop+event.clientY
	flag=1
	}
function makebanner() {
	if (flag==1) {
		for (i=message.length-1; i>=1; i--) {
			xpos[i]=xpos[i-1]+kern
			ypos[i]=ypos[i-1]
			}
		xpos[0]=x+kern
		ypos[0]=y
		for (i=0; i<message.length; i++) {
			if (document.getElementById) {
				var thisspan = document.getElementById("span"+i).style
				} else {
				var thisspan = eval((document.layers)?"document.span"+i:"span"+(i)+".style")
				}
			if (thisspan.posLeft) {
				thisspan.posLeft=xpos[i]
				thisspan.posTop=ypos[i]
				}
			if (!thisspan.posLeft) {
				thisspan.left=xpos[i]
				thisspan.top=ypos[i]
				}
			}
		}
		var timer=setTimeout("makebanner()",12)
	}
window.onload=makebanner;

for (i=0;i<message.length;i++) {
document.write("<span id='span"+i+"' class='spanstyle'>")
document.write(message[i])
document.write("</span>")
}
if (document.layers){
document.captureEvents(Event.MOUSEMOVE);
}
document.onmousemove = handlerMM;