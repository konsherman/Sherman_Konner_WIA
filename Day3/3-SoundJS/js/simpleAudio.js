window.onload=function(){

	if(!createjs.Sound.initializeDefaultPlugins()){
		//stopp all the code because soundjs is broekn 
		return;

	}

	//register our sound with soundJS
	createjs.Sound.registerSound({
		id:"soundId",
		src:"audio/music.mp3|audio/music.ogg"
	});

	createjs.Sound.addEventListener("filelaod",handFileLoad);

	function handFileLoad (event){
		console.log("Preloaded:",event.src);

		//play the file 
		createjs.Sound.play(event.src);

	}


}
	function playMusic(){
		console.log("Audio button has been clicked");
		createjs.Sound.play("soundId");
	}