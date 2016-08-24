// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

//Bread
document.getElementById("bread").addEventListener("change",determineSelectedBread);
function determineSelectedBread(event) {
  selectedTopping = event.target.value;
  finalSandwichPrice += SandwichMaker.addBread(selectedTopping);
  document.getElementById("output").innerHTML += selectedTopping + "<br />";
  document.getElementById("final_price").innerHTML = "Final Price: $" + finalSandwichPrice;
}

//Meat
document.getElementById("meat").addEventListener("change",determineSelectedMeat);
function determineSelectedMeat(event) {
  selectedTopping = event.target.value;
  finalSandwichPrice += SandwichMaker.addMeat(selectedTopping);
  document.getElementById("output").innerHTML += selectedTopping + "<br />";
  document.getElementById("final_price").innerHTML = "Final Price: $" + finalSandwichPrice;
}

//Cheese
document.getElementById("cheese").addEventListener("change",determineSelectedCheese);
function determineSelectedCheese(event) {
  selectedTopping = event.target.value;
  finalSandwichPrice += SandwichMaker.addCheese(selectedTopping);
  document.getElementById("output").innerHTML += selectedTopping + "<br />";
  document.getElementById("final_price").innerHTML = "Final Price: $" + finalSandwichPrice;
}

//Condiments
document.getElementById("condiments").addEventListener("change",determineSelectedCondiments);
function determineSelectedCondiments(event) {
  selectedTopping = event.target.value;
  finalSandwichPrice += SandwichMaker.addCondiments(selectedTopping);
  document.getElementById("output").innerHTML += selectedTopping + "<br />";
  document.getElementById("final_price").innerHTML = "Final Price: $" + finalSandwichPrice;
}

//Veggies
document.getElementById("veggies").addEventListener("change",determineSelectedVeggies);
function determineSelectedVeggies(event) {
  selectedTopping = event.target.value;
  finalSandwichPrice += SandwichMaker.addVeggies(selectedTopping);
  document.getElementById("output").innerHTML += selectedTopping + "<br />";
  document.getElementById("final_price").innerHTML = "Final Price: $" + finalSandwichPrice;
}