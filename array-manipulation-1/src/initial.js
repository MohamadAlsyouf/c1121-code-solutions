/* exported initial */
// make storage for new list of items
// go through each item in the list starting at the 1st, not including the last
// insert those words into the new list storage
// give back location of storage for new list item sequence
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
