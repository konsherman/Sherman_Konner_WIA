window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
				
		
			ctx.fillStyle = "blue";

			ctx.fillRect(0,0,100,50);	

			//translae the origin to the middel of the canvas 

			ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2);
			//drawing the same rectangle 
			ctx.fillRect(-50,-25,100,50);
		}
	}
}