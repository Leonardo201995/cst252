/**
 * Author:    Leonardo Sanchez
 * Created:   2.09.2022
 *
 * (c) Copyright by Blub Corp.
 **/

 // get inout from user
function getUserName() {
  return prompt("Please insert your username");
}
//split the string into an array, sort the array, join the array into a string.
function sortString(inputString) {
  return inputString.split('').sort().join('');
}
// print to the document
document.write(sortString(getUserName()));
