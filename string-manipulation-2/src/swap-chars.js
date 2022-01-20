/* exported swapChars */
// create storage for the word with swapped characters in the form of an array
// iterate over each letter of the string
//  if the current letter is equal to the first index provided:
//    set the letter at the first index equal to the letter at the second given index
//    set the letter at the second index equal to the letter at the first index
// return the allocated storage which includes the swapped letters and turn it back into a string

function swapChars(firstIndex, secondIndex, string) {
  var newString = string.split('');
  var indexOne = newString[firstIndex];
  var indexTwo = newString[secondIndex];
  newString[firstIndex] = indexTwo;
  newString[secondIndex] = indexOne;
  return newString.join('');
}
