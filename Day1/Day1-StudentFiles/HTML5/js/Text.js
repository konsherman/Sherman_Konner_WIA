window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
					

				var theString = "Drawing Text on a canvas! yay!";

				//drawing the text on the canvas super easy; 

				ctx.fillText(theString,20,20);

				//change the font style	

				ctx.font = "25pt Gerorgia";
				ctx.fillText(theString,20,60);

				//change color of the font 

				ctx.fillStyle = "blue";
				ctx.fillText(theString, 20,100);



				ctx.strokeStyle = "yello";

				ctx.strokeText(theString, 20, 100);


						
						
						
						
		}
	}
}