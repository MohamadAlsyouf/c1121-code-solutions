/* exported reverse */
// create storage for flipped list
// go through all items in list, starting from the last,
// add the new reverse list sequence to storage
// give back the location of the flipped list
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
