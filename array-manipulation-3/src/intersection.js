/* exported intersection */
// create storage for new array named newArray
// iterate over each word in the first array
//  if the second array contains the current word
//    push word into newArray
// iterate over each word in the second array
//  if the first array contains the current word and it's not in newArray
//    push word into newArray
// return newArray.

const intersection = (first, second) => {
  const newArray = [];
  for (let i = 0; i < second.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (let i = 0; i < first.length; i++) {
    if (first.includes(second[i]) && (!newArray.includes(second[i]))) {
      newArray.push(second[i]);
    }
  }
  return newArray;
};
