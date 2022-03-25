/* exported difference */
// create storage for new Array named diffArray
// iterate over each word in the first array
//  if second array does not contain the current word
//    push word into the new Array
// iterate over each word in the second array
//  if first array does not contain current item
//    push word into the new Array
// return diffArray

const difference = (first, second) => {
  const diffArray = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      diffArray.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      diffArray.push(second[i]);
    }
  }
  return diffArray;
};
