// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(meat) {

  // Private variable to store the different meat prices
  var meatObject = {
    Ham: 1.50,
    Turkey: 2,
    Bologna: 1,
    Salami: 2.50,
    "No meat": 0.00
  }

  // Augment the original object with another method
  meat.addMeat = function(selectedTopping) {
    return meatObject[selectedTopping];
  };

  // Return the new, augmented object with the new method on it
  return meat;
})(SandwichMaker);