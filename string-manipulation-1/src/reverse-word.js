/* exported reverseWord */
// create storage for reversed word
// create a copy of the word with its order of characters reversed
// store that copy of the word
// give back the reversed word

// function reverseWord(word) {
//   // var wordReverse = '';
//   var wordReverse = word.lastIndexOf(word.length);
//   return wordReverse;
// }
function reverseWord(word) {
  var flippedWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    flippedWord = flippedWord + word[i];
  }
  return flippedWord;
}
