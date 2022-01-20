/* exported takeRight */
// store given array containing the number given starting from the end of the array
// return allocated storage for the new array

function takeRight(array, count) {
  var newArray = array.slice(-count, array.length);
  return newArray;
}
