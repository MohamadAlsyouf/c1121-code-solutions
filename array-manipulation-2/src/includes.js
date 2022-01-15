/* exported includes */
// iterate over each value in the array through the end of the array
// if the current value of the array at any given index is equal to the value given
// give back true, otherwise give back false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
