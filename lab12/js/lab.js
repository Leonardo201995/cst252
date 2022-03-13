/**
 * Author:    Leonardo Sanchez
 * Created:   2.09.2022
 *
 * (c) Copyright by Blub Corp.
 **/

var buttonEl = $("<button></button>");
buttonEl.html("Press me for awesome things");
buttonEl.click(function() {
  alert("Sorry, false alarm")
});
buttonEl.css("background-color", "orange");
buttonEl.css("color", "yellow");
buttonEl.css("width", "30%");
buttonEl.css("margin", "40px");
$("#js-output").append(buttonEl);
