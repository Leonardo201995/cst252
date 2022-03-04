/**
 * Author:    Leonardo Sanchez
 * Created:   2.09.2022
 *
 * (c) Copyright by Blub Corp.
 **/

var outputEl = document.getElementById('output');

var oneEl = document.createElement('button');
var twoEl = document.createElement('button');

oneEl.innerHTML = "Red";
twoEl.innerHTML = "Blue";
oneEl.id = "Red";
twoEl.id = "Blue";
oneEl.style.color = "red";
twoEl.style.color = "blue";
oneEl.style.backgroundColor = "orange";
twoEl.style.backgroundColor = "yellow";

outputEl.appendChild(oneEl);
outputEl.appendChild(twoEl);
