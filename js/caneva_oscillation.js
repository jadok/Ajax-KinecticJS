window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

function drawRectangle(myRectangle, context)
{
  context.beginPath();
  context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
  context.fillStyle = '#8ED6FF';
  context.fill();
  context.lineWidth = myRectangle.borderWidth;
  context.strokeStyle = 'black';
  context.stroke();
}

function animate(myRectangle, canvas, context, startTime)
{
  var time = (new Date()).getTime() - startTime;
  var amplitude = 150;

  var period = 2000; // in ms
  var centerX = canvas.width / 2 - myRectangle.width / 2;
  var nextX = amplitude * Math.sin(time * 2 * Math.PI / period) + centerX;
  myRectangle.x = nextX;

  // clear
  context.clearRect(0, 0, canvas.width, canvas.height);

  // draw
  drawRectangle(myRectangle, context);

  // request new frame
  requestAnimFrame(function() {
    animate(myRectangle, canvas, context, startTime);
  });
}

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var myRectangle = {
	x: 250,
	y: 70,
	width: 100,
	height: 50,
	borderWidth: 5
};

drawRectangle(myRectangle, context);

// wait one second before starting animation
setTimeout(function() {
  var startTime = (new Date()).getTime();
  animate(myRectangle, canvas, context, startTime);
}, 1000);