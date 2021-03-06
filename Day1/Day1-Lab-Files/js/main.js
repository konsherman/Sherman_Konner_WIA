/*
     Name:Konner Sherman
     Date:September 30, 2014
     Class & Section:  WIA-00
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

window.onload = function(){
	var theCanvas = document.getElementById("Canvas1");
	var ctx = theCanvas.getContext("2d");
	if(ctx !=null){

		ctx.strokeStyle = "black";
		ctx.fillStyle = "blue"

		ctx.fillRect (0,0,50,100);
		ctx.strokeRect (0,0,50,100);



	};




/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here


	var theCanvas2 = document.getElementById("Canvas2");
	var ctx2 = theCanvas2.getContext("2d");
	if(ctx2 !=null){



		ctx2.beginPath();
		ctx2.arc(50,50,20,0,2.5*Math.PI);
		ctx2.stroke();
		ctx2.fill();

		ctx2.strokeStyle= "black";
		ctx2.fillStyle = "rgba(255, 21, 0, 0.5)";
		ctx2.beginPath();
		ctx2.arc(50,50,30,0,2.5*Math.PI);
		ctx2.stroke();
		ctx2.fill();





	};






/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
	var theCanvas3 = document.getElementById("Canvas3");
	var ctx3 = theCanvas3.getContext("2d");
	if(ctx3){
					
					ctx3.beginPath();
					ctx3.moveTo(100,100);
					ctx3.lineTo(70,20);
					ctx3.lineTo(70,100);
					ctx3.lineTo(30,100);
					ctx3.lineTo(85,120);
					ctx3.lineTo(100,200);
					ctx3.lineTo(110,116);
					ctx3.lineTo(200,100);
					ctx3.lineTo(100,100);
					ctx3.stroke();
			

	};



/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

	var theCanvas6 = document.getElementById("Canvas6");
	var ctx6 = theCanvas6.getContext("2d");
	if(ctx6){
					
					ctx6.beginPath();
					ctx6.arc(200,200,100,0,1*Math.PI,true);
					ctx6.stroke();
					ctx6.beginPath()
					ctx6.moveTo(200,200);
					ctx6.lineTo(200,300);
					ctx6.stroke();
					ctx6.beginPath();
					ctx6.moveTo(200,100);
					ctx6.bezierCurveTo(50,200,200,100,100,100);
					ctx6.stroke();
				

			

	};


/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

var theCanvas5 = document.getElementById("Canvas5");
var ctx5 = theCanvas5.getContext("2d");
if(ctx5){
	var words = "Konner Sherman was here!";
	ctx5.fillStyle = "red";

	ctx5.fillText(words,20,20);
}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
};

