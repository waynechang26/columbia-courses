//was not indented correcly

$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * booFacts.length));
	$("#factText").text(booFacts[number])
})

//Need to separate the facts with " " for each data
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]


$("#textPink").on("click", function() {
	//Pink needs to be in " "
	$("#funText").css("color", "pink")
})

$("#textOrange").on("click", function() {
	$("#funText").css("color", "orange")
})

$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})


//click needs to be in " "
$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

//click needs to be in " "
$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})