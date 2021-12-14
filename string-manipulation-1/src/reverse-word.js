/* exported reverseWord */
// create storage for flipped word
// go through each letter of the word starting from the last letter
// add the last letter to the storage of flipped letters
// give back the reversed word
function reverseWord(word) {
  var flippedWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    flippedWord += word[i];
  }
  return flippedWord;
}
