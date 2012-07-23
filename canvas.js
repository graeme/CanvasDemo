window.onload = function()
{
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	context.fillStyle = 'red';
	// default height is 150 and width 300
	context.fillRect(100, 50, 100, 50);
}
