function map(array, transform) {
  // create an empty array to put the transformed values inside of
  // loop through the array from start to finish
  // call the transform with each element of the array
  // check if the transform returns true or false
  // if it returns truthy, then push the transformed element into the array
  // return the new array
  const outputArray = [];
  for (let i = 0; i < outputArray.length; i++) {
    if (transform(array[i])) {
      outputArray.push(array[i]);
    }
  }
  return outputArray;
}
