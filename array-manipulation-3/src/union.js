/* exported union */
// create storage for new Array
// iterate over each value in the first array
//  if newArray does not contain the current value
//    push current value into newArray
// iterate over each value in the second array
//  if newArray does not include the current value
//    push current value into newArray
// return newArray

const union = (first, second) => {
  const newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (!newArray.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!newArray.includes(second[i])) {
      newArray.push(second[i]);
    }
  }
  return newArray;
};
