/* exported dropRight */
// create storage for items in the array that come before the number index provided
// return allocated storage for the new array contents

function dropRight(array, count) {
  var newArray = array.slice(0, array.length - count);
  return newArray;
}
