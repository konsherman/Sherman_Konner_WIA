var vid;

window.onLoad = function (){
	vid=document.getElementById("vid");
}
function clicked(){
	vid.currentTime += 2;

}
//functhat that when we click on the video itself it will pause or play a video
function pauseToggle (){
	//test if the video is curently playing or paused 
	//paused property - boolean 

	if(vid.paused){
		//if paused, then play the video 
		vid.play();

	}else{
		//video is currently playing, so lets pause when we click 
		vid.pause();
	};

};

