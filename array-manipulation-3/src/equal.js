/* exported equal */
// if the length of the first array is not equal to the length of second array
//  return false
// iterate over the indexes of the first array
// if index of first array is not equal to index of second array,
//  return false
// otherwise, return true

const equal = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};
