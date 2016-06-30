// Looping thru inventory to create strings, loads inventory and activates events via callback function

function populatePage(inventory) {
  var carDiv = document.getElementById("cards");
  var carString = "";
  for (var i = 0; i < inventory.length; i++) {
    if (i % 3 === 0) {
      carString += "<div class='row-fluid row-eq-h'>"
    }
    carString += "<div class='col-sm-4 card' id='card" + i + "'style='border-color: " + inventory[i].color + "'><p class='mainInfo'>" + inventory[i].year + " " + inventory[i].make + " " + inventory[i].model + "</p>";
    carString += "<p class='carPrice'>Price: $" + inventory[i].price + "</p>";
    carString += "<p class='carColor'>Color: " + inventory[i].color + "</p>";
    carString += "<p class='carDescription'>Description: " + inventory[i].description  + "</p></div>";

    if(i % 3 === 2) {
      carString += "</div>";
    }
      carDiv.innerHTML = carString;
  };
  CarLot.activateEvents();
}
CarLot.loadInventory(populatePage);
