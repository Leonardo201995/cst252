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

function Vehicle(make, model, year, color, details) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.details = details;
  this.info = function() {
    return "Make: " + this.make + "<br>Model: " + this.model + "<br>Year: " + this.year +
    "<br>Color: " + this.color + "<br>Details: " + this.details;
  }
}

var jetta =     new Vehicle("Volkswagen", "Jetta", 2014, "Red", "Heated seats");
var cherokee =  new Vehicle("Jeep", "Cherokee", 1999, "Blue", "New windshield");
