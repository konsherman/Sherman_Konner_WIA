window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		
			// Let's create an array of all our compositing methods
			var compMethods = ["source-over", "source-in", "source-out", "source-atop", "lighter", "xor", "destination-over", "destination-in", "destination-out", "destination-atop", "darker", "copy" ];

			var rects = [{x:20,y:20,width:75,height:75},{x:40,y:50,width:75,height:75}]

			var method = 0;

			for (var i=0; i<compMethods.lenght; i++){

				//setting up each canvas as we go threw the loooooop

				var ccsName = "Canvas"+(i+1);
				var curCanvas = document.getElementById(ccsName);
				var curCtx = curCanvas.getContext("2d");

				if(curCtx){
					//setting up styles

					curCtx.fillStyle = "red";

					//draw the first rectangle 

					curCtx.fillRect(rects[0].x,[0].y,rects[0].width,rects[0].height);
				}

			}
			
		
			
					
											
		}
	}
}