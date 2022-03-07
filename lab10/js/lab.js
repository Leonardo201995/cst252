/**
 * Author:    Leonardo Sanchez
 * Created:   2.09.2022
 *
 * (c) Copyright by Blub Corp.
 **/

var nameEl = document.getElementById("name-text");
var buttonEl = document.getElementById("fix-button");
var inputEl = document.getElementById("name-input");

buttonEl.addEventsListener("click", function () {
    let tempName = inputEl.value;
    tempName = tempName.split('').sort().join('');
    console.log(tempName);
    nameEl.innerHTML = tempName;
});
