Modernizr.load({
	test:Modernizr.inputtypes.date,
	yep: "js/success.js",
	nope:"js/fail.js",
	complete:function (){
		//this will run after our test / after our yep or nope file is loaded 
		console.log("This runs after our tests");

	}
})