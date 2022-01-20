/* exported take */
// store the given array starting from the first letter up until the number given
// give back the location of the new array

function take(array, count) {
  var newArray = array.slice(0, count);
  return newArray;
}
