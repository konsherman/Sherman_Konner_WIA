window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		ctx.fillStyle="rgb(255,255,255)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(163,81,220,195);
ctx.strokeRect(163,81,220,195);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(38,22,15)";
ctx.lineStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.beginPath();
ctx.moveTo(110,49);
ctx.lineTo(182,49);
ctx.lineTo(202,28);
ctx.lineTo(254,62);
ctx.lineTo(254,124);
ctx.lineTo(110,161);
ctx.lineTo(74,120);
ctx.lineTo(34,48);
ctx.lineTo(110,49);
ctx.fill();
ctx.stroke();

				













						
		}
	}
}