/* exported drop */
// store the given a array starting from the count up until the end of the array
// return the storage location consisting of the new array

function drop(array, count) {
  var newArray = array.slice(count, array.length);
  return newArray;
}
