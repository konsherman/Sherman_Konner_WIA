window.onload = function() {

	//create our stage

	var stage = new createjs.Stage("canvas1");

	//lets DRAW A RECTANGLE DYAYAYAYAYAYAYA OMGOMGOMGOMOMGOMGOMG

	//create a new shape 

	var rect1 = new createjs.Shape();

	//come sail away come sail away come sail away with meeeee
	rect1.graphics.beginFill("purple");
	rect1.graphics.beginFill("rgb(120,216,232)");


	rect1.graphics.beginLinearGradientFill(["yellow","red"],[0,1],50,50,150,150);
	rect1.graphics.beginLinearGradientFill(["yellow","purple","red"],[0,.5,1],50,50,150,150);

	rect1.graphics.beginRadialGradientFill(["yellow","red"],[0,1],100,100,0,100,100,40);
	rect1.graphics.beginRadialGradientFill(["yellow","purple","red"],[0,0.5,1],100,100,0,100,100,40);

assithjediajsitmeisncomcimes


	//draw rectangle 

	rect1.graphics.rect(50,50,100,100);
	stage.addChild(rect1);
	stage.update();
	
			
}