/* exported unique */
// create storage for new Array names uniqueArray
// iterate over each string in the array
//  if uniqueArray does not contain the current string
//    push string into uniqueArray
// return uniqueArray

const unique = array => {
  const uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
};
