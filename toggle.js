// Changes width and color of text box while resetting cursor back to the text input

var CarLot = (function(toggle) {

  var userInput = document.getElementById("text-input");
  var thisCard;
  toggle.toggleCard = function(event, lightyellow) {
    thisCard = event.currentTarget;
    toggle.toggleReset();
    if (thisCard.tagName.toLowerCase() === "div") {
      thisCard.classlist.toggle("lightyellow");
      userInput.value = "";
      userInput.focus();
      return thisCard;
      return userInput;
    }
  }
  toggle.changeDescription = function(event) {
    if (userInput.length !== 0) {
      thisCard.lastElementChild.innerHTML = "Description: " + userInput.value;
    }
  }
  toggle.toggleReset = function() {
    var clearCard = document.getElementsByClassName("card");
    for (var i = 0; i < clearCard.length; i++) {
      clearCard[i].classlist.remove("lightyellow");
    }
  }

  return toggle;

})(CarLot || {});
