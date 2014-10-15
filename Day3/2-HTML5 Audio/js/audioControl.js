var audio;

window.onLoad = function (){

	audio = document.getElementById("audio");

};

//Create our clicked funciton 

function clicked(){
	audio.currentTime +=2;
};