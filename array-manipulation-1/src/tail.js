/* exported tail */
// make storage for the new word sequence
// go through each word in the sequence starting at the 2nd word
// insert those words into the new storage
// give back location of storage for the new word sequence

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
