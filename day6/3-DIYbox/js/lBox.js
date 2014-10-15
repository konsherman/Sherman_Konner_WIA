window.onload = function() {

	$(".lightbox_trigger").click(function(e){

		//prevent the default action
		e.preventDefault();
		var image_href = $(this).attr("href");

		if("#lightbox").length>0{
			$("#content").html('<img src="'+image_href+'"/>');

		}else{

			var lightbox = '<div id="lightbox">'+'<p>Click To Close</p>'+'<div id="content">'+'<img src="'+image_href+'"/>'+'</div>'+'</div>';

		}

	});

	
	
	

}