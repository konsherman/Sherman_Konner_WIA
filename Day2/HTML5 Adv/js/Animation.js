window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		//setup variable for rotation of the picture 
		var rotation = 0;

		//set a variable for the image 

		var srcImg = document.getElementById ("img1");

		// find the center of the canvas and translate 

		ctx.translate(ctx.canvas.width/2, theCanvas.height/2);

		setInterval(function(){


			ctx.clearRect(-800,-800,1600,1600);
			//rotate the picture

			ctx.rotate(rotation*(Math.PI/180));

			ctx.drawImage(srcImg,-75,-75,150,150);

			//change out rotation angle 
			rotation+=8;

		},5);

		var width = 10;
		var height = 20;

		ctx.fillStyle = "green";

		//create functoin for the setinterval 

		setInterval(function(){
			ctx.fillRect(0,0,width,height);

			//change demensions 
			width+=20;
			height+=20;

		},5);

		

		

		
				
						
		}
	}
}