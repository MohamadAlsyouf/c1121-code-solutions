/* exported flatten */
// created storage for new Array
// iterate over the indexes of given array
// if the current index value is an array,
//    insert the array into allocated storage for children arrays
//    iterate over the children array
//      insert each value of the child array into allocated storage for the new arrray
// otherwise,
//    push that index value into our allocated storage for the new array
// return the new array

const flatten = array => {
  const newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const babyArray = array[i];
      for (var j = 0; j < babyArray.length; j++) {
        newArray.push(babyArray[j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
