
// var randomNumber = ( Math.floor((Math.random() * 100) + 1))+19;
var generateRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
$("#randomNumber").text(generateRandom (19,120));
console.log (generateRandom (19,120));

$("#crystal1").text(generateRandom (1,12));
console.log (generateRandom (1,12));