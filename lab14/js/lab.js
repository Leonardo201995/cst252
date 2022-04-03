/**
 * Author:    Leonardo Sanchez
 * Created:   2.09.2022
 *
 * (c) Copyright by Blub Corp.
 **/

function checkIfInt(num) {
  if(parseInt(num) == num) {
    return true
  } else {
    return false;
  }
}

function chiPotle(topNum) {
  let returnArray = Array();
  for(let i=1;i<=topNum;i++) {
    let outStr = "";
    if(i % 2 == 0) outStr += "Pico de gayo";
    if(i % 4 == 0) outStr += "Meat";
    if(i % 6 == 0) outStr += "Corn";
    if(i % 9 == 0) outStr += "Cream";
    outStr == "" ? returnArray.push(i) : returnArray.push(outStr + "!");
  }
  return returnArray;
}

$("#go-button").click(function() {
  let chipotleInput = $("#chipotle-input").val();
  let chipotleOutput = chiPotle(chipotleInput);
  if(checkIfInt(chipotleInput)) {
    let outputStr = "";
    for(var i=0;i<chipotleOutput.length;i++) {
      outputStr += chipotleOutput[i]
      if(i < chipotleOutput.length-1) outputStr += "<br>";
    }
    $("#chipotle").html(outputStr);
  } else {
    $("chipotle").html("Oops sorry, try again until you hit the even!");
  }
)
