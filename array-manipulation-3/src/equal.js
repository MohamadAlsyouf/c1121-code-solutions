/* exported equal */
// iterate over the indexes of the first array
// if index of first array is not equal to index of second array or if they aren't equal length,
//  return false
// otherwise, return true

const equal = (first, second) => {
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i] || first.length !== second.length) {
      return false;
    }
  }
  return true;
};
