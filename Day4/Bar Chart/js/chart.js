//set up some global properties aka vars

var barSpacing = 0;
var barWidth = 0;
var chartHeight = 0;
var chartHeightArea = 0;
var chartScale = 0;
var maxValue = 0;
var highestYLabel = 0;
var valueMultiplier = 0;

//document ready functoin 
$(document).ready(function(){
	window.chartHeight = Number($(".chart-area").height());
	window.barWidth = $(".chart-area .chart-bar").width();
	window.highestYLabel = Number($(".chart-y-axis p").first().html());
	window.chartHeightArea = window.chartHeight - Number($("p.axis-value").first().height);
	window.chartScale = chartHeightArea / window.highestYLabel;
	window.barSpacing = Number($(".chart-area").attr("bar-spacing"));

	postionBars();



});

	function postionBars(){
	$(".chart-area .chart-bar").each(function(index){
		var barPosition = (window.barWidth*index)+(index*window.barSpacing)+window.barSpacing;

		//move the var to that postoin  
		$(this).css("left",barPosition+"px");

		$(this).html('<p>'+$(this).attr('bar-value')+'</p>');

		$(".chart-x-axis").append('<p style="left:'+(barPosition-(window.barWidth/2)));

		var barValue = Number($(this).attr("bar-value"));

		if(barValue>window.maxValue){
			window.maxValue = barValue;
			window.valueMultiplier = window.maxValue / window.highestYLabel;
		}
		
	});
}


function animateChart(){
	$(".chart-area .chart-bar").each(function(index){

		var revisedValue = Number($(this).attr("bar-value"))*window.chartScale;
		var newDelay = 125*index;
		$(this).delay(newDelay).animate({height:revisedValue},1000,function(){
			$(this).children("p").delay(500).fadeIn(250);
		});

	});
}

