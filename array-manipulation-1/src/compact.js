/* exported compact */
// make storage for the new list of words
// go through the list one by one
// if word at given position is true,
// add
// if the item at that position is not equal to a condition,

function compact(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
