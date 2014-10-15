$(document).ready(function() {

	//listen for when the form changes so it nows what to RUN THAT FUNCTION	
	$("#mapForm").change(function(){
		//test with an alert
		//alert($("#mapForm option:selected").val());
		//create a variable to see what is actually selected in our dropdown 
		var selectedContinent = $("#mapForm option:selected").val();

		//test what continent is showing and show the appropriate dot
		if(selectedContinent==="ALL"){
			//use jquery transisitions and show all of the dots
			$("a.dot").slideDown(500);
			console.log("inside all");
			

		}else{
			//show all the dots on the selected continent 
			//hide all of the dots

			$('a.dot[continent="'+selectedContinent+'"]').slideDown(1000);
			$('a.dot[continent="'+selectedContinent+'"]').slideUp(1000);
			console.log("else")
			
		}



	});

	//when the posisiton tag is clicked change the details information 
	$("a.dot").click(function(){
		//test with alert
		// alert($(this).attr("country"));
		//change the dot color when clicked
		//remove any selected class from all anchros tags 
		$("a.dot").removeClass("selected");

		$(this).addClass("selected")

		//need a var to hold the path of the matching div 
		//country form the anchor tag 
		var country = '.country_detail#'+$(this).attr("country");
		var htmlCode = $(country).html();

		//animate the conotainer to fade out 
		//put the new html code in and then of course fade back into view 

		$(".detail_container").fadeOut(500,function(){
			$(".detail_container .country_detail").html(htmlCode);
			//fadde in the div again 
			$(".detail_container").fadeIn(500);
		});


	});


	$(".detail_container img").live({
		mouseenter:function(){
			$(".detail_container img").animate({left:"-100",width:"98%",height:"125%"},500);
		},mouseleave:function(){
			$(".detail_container img").animate({left:"0",width:"75px",height:"75px"},500);

		}
	})



});