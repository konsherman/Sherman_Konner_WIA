window.onload = function() {
	console.log('test');
	//get canvas element
	var canvas = document.getElementById("canvas1");
	
	//Create our stage wrapped around our canvas
	var stage = new createjs.Stage(canvas);
	
	//create a graphic 
	var shape = new createjs.Shape();
	
	//Draw The Shape
    //Prefix is shape.graphics.
    
    shape.graphics.f("rgba(38,22,15,254)").ss(1).s("rgba(0,0,0,254)").p("EBLoAOsYAAAAr4CMJYFoYJYFoA8ksAAAAIhuloIi+CMYAAAAmajmHMAAYHMAAFUhuAAAAYAAAACWrGm4EiYm4EihaAUjmj6Yjmj6oSCWA8EEYA8EEAUBaC0g8YC0g8EEgeAAAA").cp().ef().es();






	stage.addChild(shape);
	// Then we update the stage to draw it up
	stage.update();

}