var canvas;
var context;

window.onload = function()
{
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	
	drawCurve(100, 100, 150, 140, 200, 100);
	drawCurve(140, 60, 150, 80, 160, 60);
	drawCircle(120, 20, 5)
	drawCircle(180, 20, 5)
}

function fillSquare(colour, x, y, width) {
	
	context.fillStyle = colour;
	context.fillRect(x, y, width, width);
	
}

function drawCurve(startx, starty, cpx, cpy, endx, endy) {
	
	// 'startx' and 'starty' = start of the line
	// 'cpx' and 'cpy' = curve point
	// 'endx' and 'endy' = end of the line
	
	context.moveTo(startx, starty);
	context.quadraticCurveTo(cpx, cpy, endx, endy);
	context.stroke();
}

function drawCircle(posx, posy, radius) {
	
	// 'posx' and 'posy' = position of circle
	// 'radius' = radius of circle
	
	context.beginPath();
	context.arc(posx, posy, radius, 0, Math.PI*2, true);
	context.closePath();
	context.fill();
}