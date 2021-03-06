// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(cheese) {
  var toppingPrice;

  // Private variable to store the different cheese prices
  var cheeseObject = {
    American: 1.50,
    Swiss: 2,
    Colby: 1,
    Cheddar: 2.50,
    "No cheese": 0.00
  }

  // Augment the original object with another method
  cheese.addCheese = function(selectedTopping) {
    toppingPrice = cheeseObject[selectedTopping];
    SandwichMaker.addTopping(toppingPrice);
  };

  // Return the new, augmented object with the new method on it
  return cheese;
})(SandwichMaker);