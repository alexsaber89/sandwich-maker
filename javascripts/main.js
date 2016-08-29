// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

//Bread
document.getElementById("bread").addEventListener("change",determineSelectedBread);
function determineSelectedBread(event) {
  selectedTopping = event.target.value;
  SandwichMaker.addBread(selectedTopping);
  finalSandwichPrice = SandwichMaker.getTopping();
  document.getElementById("final_price").innerHTML = "Final Price: $" + finalSandwichPrice;
  document.getElementById("output").innerHTML += selectedTopping + "<br />";
}

//Meat
document.getElementById("meat").addEventListener("change",determineSelectedMeat);
function determineSelectedMeat(event) {
  selectedTopping = event.target.value;
  SandwichMaker.addMeat(selectedTopping);
  finalSandwichPrice = SandwichMaker.getTopping();
  document.getElementById("final_price").innerHTML = "Final Price: $" + finalSandwichPrice;
  document.getElementById("output").innerHTML += selectedTopping + "<br />";
}

//Cheese
document.getElementById("cheese").addEventListener("change",determineSelectedCheese);
function determineSelectedCheese(event) {
  selectedTopping = event.target.value;
  SandwichMaker.addCheese(selectedTopping);
  finalSandwichPrice = SandwichMaker.getTopping();
  document.getElementById("final_price").innerHTML = "Final Price: $" + finalSandwichPrice;
  document.getElementById("output").innerHTML += selectedTopping + "<br />";
}

//Condiments
document.getElementById("condiments").addEventListener("change",determineSelectedCondiments);
function determineSelectedCondiments(event) {
  selectedTopping = event.target.value;
  SandwichMaker.addCondiments(selectedTopping);
  finalSandwichPrice = SandwichMaker.getTopping();
  document.getElementById("final_price").innerHTML = "Final Price: $" + finalSandwichPrice;
  document.getElementById("output").innerHTML += selectedTopping + "<br />";
}

//Veggies
document.getElementById("veggies").addEventListener("change",determineSelectedVeggies);
function determineSelectedVeggies(event) {
  selectedTopping = event.target.value;
  SandwichMaker.addVeggies(selectedTopping);
  finalSandwichPrice = SandwichMaker.getTopping();
  document.getElementById("final_price").innerHTML = "Final Price: $" + finalSandwichPrice;
  document.getElementById("output").innerHTML += selectedTopping + "<br />";
}