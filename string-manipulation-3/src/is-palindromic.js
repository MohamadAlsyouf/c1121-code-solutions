/* exported isPalindromic */
// create storage for flipped string
// create storage for the string without spaces
// iterate over the space-less string's letters starting from the last letter to the first and
// add the individual letters to the flipped string
// if the backwards string is equal to the space-less string given
//   return true

function isPalindromic(string) {
  var flippedWord = '';
  var newString = string.replaceAll(' ', '');
  for (var i = newString.length - 1; i >= 0; i--) {
    flippedWord += newString[i];
  }
  if (flippedWord === newString) {
    return true;
  }
  return false;
}
