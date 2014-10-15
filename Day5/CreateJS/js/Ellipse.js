window.onload = function() {

	var stage = new createjs.Stage("canvas1");

	var shape = new createjs.Shape();

	shape.graphics.beginStroke("red");

	shape.graphics.setStrokeStyle(10,0,1);

	shape.graphics.drawCircle(100,100,50);

	shape.graphics.drawEllipse(75,200,150,50);

	shape.graphics.beginStroke("blue");
	shape.graphics.arc(100,100,75,0,-90*(Math.PI/180),1)


	//add to stage and then update 
	stage.addChild(shape);
	stage.update();
	

}