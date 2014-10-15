$(function (){
	$("#show").click(function(){
		$("#theDiv").show("normal");
	});

	$("#hide").click(function(){
		$("#theDiv").hide("fast");
	})

	$("#toggle").click(function(){
		$("#theDiv").toggle(2000);
	})
})