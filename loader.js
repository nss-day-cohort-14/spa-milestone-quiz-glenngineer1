// LOADER of inventory from json file

var CarLot = (function() {
  var inventory = [];

  return {
// Getter, returns array
    getInventor: function() {
      return inventory;
    },
// Setter, calls json and assigns data to inventory
    loadInventory: function(callback) {
      var inventoryRequest = new XMLHttpRequest();
      inventoryRequest.open("GET", "inventory.json");
      inventoryRequest.send();
      inventoryRequest.addEventListener("load", function() {
        inventory = JSON.parse(this.responseText);
// Callback inventory passes all car info
        callback(inventory.cars);
      });
    }
  }
})(CarLot || {});
