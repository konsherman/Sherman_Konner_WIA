window.onload = function() {

	//FIRST WE HAVE TO CREATE OOUR STAGE FOR EVERYTHING ELSE TO BE ON IT
	// stage is the main container for all other display objects 

	var canvas = document.getElementById("canvas1");

	var stage = new createjs.Stage(canvas);

	//create a blue circle 
	var circleGraphic = new createjs.Graphics();

	//Draw a circle with a radius of 50, centered at (0,0), relitive to our shapes postion 

	circleGraphic.beginFill("blue");
	circleGraphic.drawCircle(0,0,50);

	//shape is a displayobject class that draws the vector on our stage 
	//contains all the mehtods used to define our vector shapes 

	var circleShape= new createjs.Shape(circleGraphic);
	//adjust our display object properties 
	//positioninig transforming the object on the stage 

	circleShape.x = 50;
	circleShape.y = 50;
	circleShape.alpha = .5;
	

	//add this shape to our stage's display list
	// using addChild()
	stage.addChild(circleShape);
	stage.update();

	
			
}