window.onload = function() {

	var stage = new createjs.Stage("canvas1");

	var rect1 = new createjs.Shape();

	rect1.graphics.beginFill("blue").drawRect(0,0,100,100);

	rect1.regX = 50;
	rect1.regY = 50;

	rect1.x = 100;
	rect1.y = 100;

	stage.addChild(rect1);

	stage.update();

	//ticker class controls the timing of our animation 
	//create a listner and assing it to the listen for that tick 
	//control how often the tick ticks 
	//set the frame rate of our animation 
	//default FPS is 20

	createjs.Ticker.setFPS(30);

	//create an event listner to hear the tick 
	createjs.Ticker.addEventListener("tick",ticks);

	function ticks(event){
		rect1.rotation += 8;
		// rect1.x ++;
		// rect1.y +=5;
		// rect1.skewX += 20;
		rect1.scaleX +=.1;
		rect1.scaleY +=.1;
		stage.update();

	}

	
			
}