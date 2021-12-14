/* exported capitalize */
// storage for the word when capitalized
// capitalize the first character of the word, add on the rest of the lowercased characters and store new word
// give back location of new capitalized word
function capitalize(word) {
  var capitalWord = '';
  capitalWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return capitalWord;
}
