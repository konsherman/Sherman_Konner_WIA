window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		var srcImg = document.getElementById("img1");

		// ctx.drawImage(srcImg,0,0);

		//draw and scale the image 
		
		// ctx.drawImage(srcImg,50,50,350,150);

		//draw a portion of slice of the source image!?!?!?!?!?!

		// ctx.drawImage(srcImg,350,200,125,100,50,50,125,100);

		//draw the video onto our canvas 
		//setup an interval function 
		//grasb each from as the video plays and PAINT it on canvas
		//hi my name is Konner Sherman

		var srcVid = document.getElementById("vid1");

		srcVid.play();

		setInterval(function(){
			ctx.drawImage(srcVid,0,0);
		});
				
						
		}
	}
}