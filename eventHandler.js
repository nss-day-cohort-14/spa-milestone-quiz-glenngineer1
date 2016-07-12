// Event Handlers for toggle functions and description changes

var CarLot = (function(oldCarLot) {
  var cardClick = document.getElementsByClassName("card");
  var userInput = document.getElementById("text-input");

  oldCarLot.activateEvents = function() {

    for (var i = 0; i < cardClick.length; i++) {
      cardClick[i].addEventListener("click", CarLot.toggleCard);
    }
    userInput.addEventListener("keyup", CarLot.changeDescription);
    };

  return oldCarLot;

})(CarLot || {});






