// var crystal = {
// 	points: 0; 
// }

//created array for 4 crystals
var crystals = [];
var goalScores = 0;
var playerTotal = 0;
var winCount = 0;
var lossCount = 0;

for (var i = 0; i < 4; i++) {
	// creating crystal object at each index 'i'
	crystals[i] = {
		// created property
		points: 0
	}
	// calling the assignValue function which gives a value to the 4 crystals
	assignValue(crystals[i]);
}
console.log(crystals);

// starting our count
var count = 0;
//using each function callback
$(".pic").each(function() {
	var picture = $(this); //converts the .image into jquery objects(there are 4 of them)
	picture.attr("data-crystal", count);   // setting value for crystals and images(html)
	picture.on("click", function() {
		var clickedImage = $(this); 
		var crystalIndex = clickedImage.attr("data-crystal");
		playerTotal = playerTotal + crystals[crystalIndex].points;
		$("#player-value").html(playerTotal);

		if (playerTotal === goalScores) {
			winCount++;
			$("#wins").html(winCount);
			resetGame();
		}	
		else if (playerTotal > goalScores) {
			lossCount++;
			$("#losses").html(lossCount);
			resetGame();
		}
	});
	count++; //want to start at 0 then move up to 1
});


//gives a value to the 4 crystals
function assignValue(crystal) {
	var min = 1;
	var max = 12;
	crystal.points = Math.floor(Math.random() * (max - min + 1))+min;

}


function goalScore() {
	var min = 19;
	var max = 120;
	goalScores = Math.floor(Math.random() * (max - min + 1))+min;
	$("#match-this").html(goalScores);
}
goalScore();


function resetGame() {
	playerTotal = 0;
	$("#player-value").html(playerTotal);
	for (var i = 0; i < crystals.length; i++) {
		assignValue(crystals[i]);

	}
	goalScore();
}