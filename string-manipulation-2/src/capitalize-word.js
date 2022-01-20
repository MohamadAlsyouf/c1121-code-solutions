/* exported capitalizeWord */
// make storage for the capitalized word
// uppercase the first letter, add the rest of the letters but lowercased and store.
// if the 4th letter of the word is 's',
//   make the word JavaScript
// return location of storage for capitalized word

function capitalizeWord(word) {
  var capitalWord = '';
  capitalWord = word.slice(0, 1).toUpperCase() + word.slice(1, word.length).toLowerCase();
  if (capitalWord.toLowerCase() === 'javascript') {
    capitalWord = 'JavaScript';
  }
  return capitalWord;
}
