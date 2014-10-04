window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
				
				// //create patter from an image 

				// //make a var to hold the image 

				// var patImg = new Image();

				// //wait for the image to load into memory; 

				// patImg.onload = function () {
				//	ctx.fillStyle = ctx.createPattern(patImg,"repeat");

				//	//create rect
				//	ctx.fillRect (0,0,ctx.canvas.width,ctx.canvas.height) 
				// }
				// patImg.src="images/desert_desc_bug.gif";


				var patCanvas = document.getElementById("patCan");
				var ctx2 = patCanvas.getContext ("2d");
				if(ctx2){
					ctx2.strokeStyle = "red";
					ctx2.lineWidth = 2;


					//draw the line

					ctx2.beginPath();
					ctx2.moveTo(0,0);
					ctx2.lineTo(25,25);
					ctx2.stroke();

					var strokePat = ctx.createPattern(patCanvas,"repeat");

					ctx.strokeStyle = strokePat;

					ctx.lineWidth = 25;
					ctx.strokeRect (50,50,200,200);


				}


		}
	}
}