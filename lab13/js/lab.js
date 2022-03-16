/**
 * Author:    Leonardo Sanchez
 * Created:   2.09.2022
 *
 * (c) Copyright by Blub Corp.
 **/

function sortingCastle(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Disneyland"
  }
  else if (mod == 1) {
    return "Magic"
  }
  else if (mod == 2) {
    return "Hat"
  }
  else if (mod == 3) {
    return "Train"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingCastle(name);
    newText = "<p>The Castle has accept you + magic + </p>";
    document.getElementById("output").innerHTML = newText;
})
