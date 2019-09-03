
// var randomNumber = ( Math.floor((Math.random() * 100) + 1))+19;
// var generateRandom = function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

// $("#randomNumber").text(generateRandom(19,120));
// console.log (generateRandom(19,120));

// $("#crystal1").text(generateRandom(1,12));
// console.log (generateRandom(1,12));

// Created The Computer Random Number With A Min And Max Global VAr
var c_minNumber = 19;
var c_maxNumber = 120;

var c_randomNumber = randomNumberFromRange(c_minNumber, c_maxNumber);

function randomNumberFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(c_randomNumber);

$("#randomNumber").text(c_randomNumber);


// Defined A Starting Counter
var counter = 0;

// Created Array Of Number Options For Each Crystal
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (var c = 1; c < 5; c++) {
  // get a number at random from numberOptions
  var val = Math.floor(Math.random() * numberOptions.length) +1;
 
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

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert("New score: " + counter);

  if (counter === targetNumber) {
    alert("You win!");
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }

}); 