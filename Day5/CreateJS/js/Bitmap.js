window.onload = function() {
	
 //    var canvas = document.getElementById("canvas");
	// var stage =  new createjs.Stage("canvas");
    
 //    var bmp = new createjs.Bitmap();
    
 //    //Create our image variable
 //    var img = new Image();
 //    img.src = "images/ship.svg";
 //    img.onload = updateStage;
    
    
 //    function updateStage(e){
        
 //        //Create a bitmap variable to hold our image in createJS
 //        bmp = new createjs.Bitmap(e.target);
        
 //        //Set our X & Y to place the image in the center of canvas
        
 //        var centerX = canvas.width/2;
 //        var centerY = canvas.height/2;
        
 //        bmp.x = centerX;
 //        bmp.y = centerY;
        
 //        bmp.regX = 50;
 //        bmp.regY = 50;
        
 //        //Scale the ship up
 //        bmp.scaleX = 4;
 //        bmp.scaleY = 4;
        
        
 //        stage.addChild(bmp);
 //        //stage.update();

        
 //    }
    
    
    
 //    //add eventlistener to hear our  "tick"

    
 //    createjs.Ticker.addEventListener("tick", tick);
    
 //    function tick(e){
        
 //        //This function will be called default of 20 fps
        
 //        bmp.rotation +=2;
        
 //        bmp.x +=2;
 //        bmp.y +=2;
        
        
 //        stage.update();
        
        
 //    }

 var stage = new createjs.Stage("canvas");

 var img = new Image();
 var canvas = document.getElementById("canvas");
 var stage = new createjs.Stage("canvas");
 //create a bit to hold the raster image 
 var bmp = new createjs.Bitmap();
    var centerX = canvas.width/2;
    var centerY = canvas.height/2;
 img.src = "images/ship.svg";
 //wait for the image load 

 img.onload = updateStage;
 function updateStage(e){
    //create a bitmap wich is the class to hold raster images .
    //create this outside of this function 
    //lets fill our bmp var with the image now that it loaded 
    bmp = new createjs.Bitmap(e.target);
    //find the center of the "stage"
    //create the var for the canvs 
    var centerX = canvas.width/2;
    var centerY = canvas.height/2;
    //set the reg points 
    bmp.regX = 50;
    bmp.regY = 50;

    bmp.x = centerX;
    bmp.y = centerY;

    bmp.scaleY =4;
    bmp.scaleX = 4;

    stage.addChild(bmp);
    stage.update();
 }

 //add a lister for the tick 
 createjs.Ticker.addEventListener("tick",tick);

 function tick(){
    // bmp.rotation += 2;
    // bmp.x +=10;
    //use MATH to move our ship 
    //shake the ship 
    // bmp.x = centerX + (Math.random()-.5)*50;
    // bmp.y = centerY + (Math.random()-.5)*50;
    //wave motion 
    bmp.x = centerX + Math.sin(createjs.Ticker.getTicks()/7)*50;
    bmp.y = centerY + Math.cos(createjs.Ticker.getTicks()/7)*50;
    //update stage every time
    stage.update();
 }

}


















    
			
