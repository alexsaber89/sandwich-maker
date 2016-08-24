// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(condiments) {

  // Private variable to store the different condiment prices
  var condimentsObject = {
    Mustard: 1.50,
    Mayo: 2,
    Italian: 1,
    Oil: 2.50,
    "No condiments": 0.00
  }

  // Augment the original object with another method
  condiments.addCondiments = function(selectedTopping) {
    return condimentsObject[selectedTopping];
  };

  // Return the new, augmented object with the new method on it
  return condiments;
})(SandwichMaker);