window.onload = function() {

	var stage = new createjs.Stage("canvas1");

	var shape = new createjs.Shap();


	shape.graphics.beginStroke("purple");
	//Move to our starting postoin 

	shape.graphics.moveTo(25,25);

	shape.graphics.lineTo(250,25);

	stage.addChild(shape);

	stage.update();
	
}