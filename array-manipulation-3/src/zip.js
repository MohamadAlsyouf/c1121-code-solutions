/* exported zip */
// create storage for new Array named newArray
// create a new variable to store number of shortest length
// iterate over each string in the first and second array, until the shortest length,
//  push the current indexes into our allocated new Array storage
// return newArray.

const zip = (first, second) => {
  const newArray = [];
  const shortestLength = Math.min(first.length, second.length);
  for (let i = 0; i < shortestLength; i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
};
