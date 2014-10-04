//instead of using the html5 data picker - lets use the jquery one.

console.log("BROWSER DOES NOT SUPPORT HTML5 DATE PICKER");

$("input[type=date]").datepicker({
	dateFormat:"mm/dd/yy"
});