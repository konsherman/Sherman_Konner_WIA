window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		ctx.save();

		ctx.fillStyle = "blue";
		ctx.fillRect(150,30,100,50);

		//rotate around the origin 

		ctx.rotate((Math.PI/180)*20);

		//draw out second recct

		ctx.fillStyle = "yellow";
		ctx.fillRect (150,30,100,50);

		ctx.restore();

		ctx.translate(200,55);

		ctx.rotate((Math.PI/180)*45);




		ctx.fillStyle = "green";
		ctx.fillRect (150,30,100,50);

				
				
						
		}
	}
}