window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
			
			var srcImg = document.getElementById("img1");



			//create a circle clipping path 

			ctx.beginPath();
			ctx.arc(ctx.canvas.width/2,ctx.canvas.width/2,150,0,2*Math.PI);
			ctx.clip();





			
		 
			ctx.beginPath();
			ctx.moveTo(105,200);
			ctx.lineTo(250,25);
			ctx.lineTo(525,50);
			ctx.lineTo(475,285);
			ctx.closePath();
			ctx.clip();
			ctx.drawImage(srcImg,0,0);
		}
	}
}