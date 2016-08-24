// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(bread) {

  // Private variable to store the different bread prices
  var breadObject = {
    White: 1.50,
    Wheat: 2,
    Rye: 1,
    Sourdough: 2.50,
    "No bread": 0.00
  }

  // Augment the original object with another method
  bread.addBread = function(selectedTopping) {
    return breadObject[selectedTopping];
  };

  // Return the new, augmented object with the new method on it
  return bread;
})(SandwichMaker);