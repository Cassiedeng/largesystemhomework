
//code from class
var osc = require('node-osc');

var client = new osc.Client('127.0.0.1', 3333);
var oscServer = new osc.Server(3333, '0.0.0.0');

//var for the protocol
var remoteColor = "white";
var x = undefined;
var y = undefined;

oscServer.on("message", function (msg, rinfo) {
   //runs whenever we get message from the network
   console.log(msg);
   if(msg[0]=="/brush-x"){
   	x = msg[1]
   	if(y !=undefined){
   		ellipse(x,y,10);//if you get some value, you draw an ellipse
   		var lastX = x;
   		var lastY = y;

   		var x = undefined;
		var y = undefined;//start over
   	}
   }else if (msg[0]=="/brush-y"){
   	y = msg[1];
   	if(x !=undefined){
   		ellipse(x,y,10);//if you get some value, you draw an ellipse
   		var x = undefined;
		var y = undefined;//start over
   }
}
  //not the protocol(more straightforward)
   // if(msg[0]=="/brush"){
   // 	var x = msg[1];
   // 	var y = msg[2];
   // 	ellipse(x,y,10);
   // }
  
});

//When user draws,                   send position to network
//When we get position from network, draw it on screen
 function setup() {
 	createCanvas(windowWidth, windowHeight);
 	strokeWeight(10);
 	stroke(0);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function mouseDragged(){
	// user draw something
	// send position to network here

// 	client.send('/brush-x', mouseX, function () {
//   	client.kill();
// });
	// client.send('/brush-x', mouseX);
	// client.send('/brush-y', mouseY);
	client.send('/brush',mouseX,mouseY);

	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
}

function draw(){
	//fill("papayawhip")
}

