window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		var linGrd = ctx.createLinearGradient(20,20,20,280);

		linGrd.addColorStop(0,"#f00");
		linGrd.addColorStop(.5,"blue");
		linGrd.addColorStop(1,"green");

		//make rectangle and fill it with that grd

		ctx.fillStyle = linGrd;
		ctx.fillRect(20,20,200,280);
							

						
		}
	}
}