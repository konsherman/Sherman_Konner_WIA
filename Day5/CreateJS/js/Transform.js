window.onload = function() {

	var stage = new createjs.Stage("canvas1");
	var shape = new createjs.Shape();

	shape.graphics.beginFill("red");
	shape.graphics.drawRect(50,50,100,100);

	//shape.rotation = 30;

	shape.regX = 100;
	shape.regY = 100;
	shape.rotation = 30;

	shape.x = 200;
	shape.y = 100;

	shape.scaleY= .5;
	shape.scaleX = 2;

	//visible 
	// 0 or 1?!?! say whatttt
	// 0 means it is not visible and is never drawn on the canvas??!!!?? o...m...g

	shape.visible = 1;



	stage.addChild(shape);
	stage.update();
	
	
	
	
}