// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(veggies) {
  var toppingPrice;

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
    toppingPrice = veggiesObject[selectedTopping];
    SandwichMaker.addTopping(toppingPrice);
  };

  // Return the new, augmented object with the new method on it
  return veggies;
})(SandwichMaker);