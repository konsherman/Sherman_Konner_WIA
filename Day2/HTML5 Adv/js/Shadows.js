window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
				

				var origShadowColor = ctx.shadowColor;
				//setup of the basic shadow 
				ctx.shadowColor = "black";
				ctx.shadowOffsetX = 10;
				ctx.shadowOffsetY = 10;
				ctx.shadowBlur = 15;

				//draw rect 

				ctx.fillStyle = "red";
				ctx.fillRect(20,20,200,100);
				//change shadow ssettttinggssss

				ctx.shadowColor = "blue";
				ctx.shadowOffsetX = 5;
				ctx.shadowOffsetY = 5;
				ctx.shadowBlur = 5;




				//make some text 
				var theString = "Drawing text on a canvas";

				// style our text 
				ctx.font = "20pt comic-sans";

				ctx.fillText(theString, 250, 75);
				


				ctx.fillStyle = "green";
				ctx.fillRect =(20,255,200,50);
		}
	}
}