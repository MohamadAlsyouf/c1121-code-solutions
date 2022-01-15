/* exported chunk */
// create storage for the new array
// iterate over the items in the array up until the end
// after each iteration, add size given to the initial counter
// insert the given array's items from the counter up to the size given
// give back allocated storage containing the new array of subarrays

function chunk(array, size) {
  var bigArray = [];
  for (var i = 0; i <= array.length - 1; i += size) {
    bigArray.push(array.slice(i, i + size));
  }
  return bigArray;
}
