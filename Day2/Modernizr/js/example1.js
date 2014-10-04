if(Modernizr.canvas){

	//setup canvas and ctx sstufff

	var theCanvas = document.getElementById("Canvas1");
	var ctx = theCanvas.getContext ("2d");

	//test to verify our context
	if(ctx){
		//draw our string of text 
		//setup font info
		ctx.font = "25pt Georgia";
		ctx.fillText("Canvas is Working!",20,60);
	}

}else{
	//fallback content would go here
}

console.log(Modernizr)