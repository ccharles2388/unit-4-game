
var wins = 0;
var losses = 0;
var c_randomNumber = randomNumberFromRange(19, 120);

function randomNumberFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(c_randomNumber);

// Display Random Number

$("#randomNumber").text(c_randomNumber);


// Defined A Starting Counter
var counter = 0;

// Created Array Of Number Options For Each Crystal
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (var c = 1; c < 5; c++) {
  // get a number at random from numberOptions
  var val = Math.floor(Math.random() * numberOptions.length) + 1;

  console.log(val)
  $('#crystal' + c).attr('data-crystalvalue', val)
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // Log Counter Score To Console
  console.log(counter);

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  console.log("New score: " + counter);

  // Show Total Sum Of Score After Crystals Are Selected
  $("#sumScore").text(counter);

  //  If Logic To Determine If User Wins Or Loses
  if (counter === c_randomNumber) {
    wins++;
    $("#wins").text(wins);
    alert("You win!");
    
  }

  else if (counter >= c_randomNumber) {
    losses++;
    $("#losses").text(losses);
    alert("You lose!!");
    
  }

}); 

// Reset Logic
$("#reset").on("click", function() {
c_randomNumber = randomNumberFromRange(19, 120);
$("#randomNumber").text(c_randomNumber);
$("#sumScore").text(0);
wins = 0;
losses = 0;
console.log(c_randomNumber);
})