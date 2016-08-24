// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(veggies) {

  // Private variable to store the different meat prices
  var veggiesObject = {
    Lettuce: 1.50,
    Tomato: 2,
    Pickles: 1,
    Jalapenos: 2.50,
    "No veggies": 0.00
  }

  // Augment the original object with another method
  veggies.addVeggies = function(selectedTopping) {
    return veggiesObject[selectedTopping];
  };

  // Return the new, augmented object with the new method on it
  return veggies;
})(SandwichMaker);