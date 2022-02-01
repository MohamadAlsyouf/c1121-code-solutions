function filter(array, predicate) {
  // create an empty array to put the filtered values inside of
  // loop through the array (from start to finish)
  // call the predicate with each element of the array
  // check it the predicate returns true or false
  // if it returns truthy push the element into the array
  // return the new array
  const outputArray = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      outputArray.push(array[i]);
    }
  }
  return outputArray;
}
