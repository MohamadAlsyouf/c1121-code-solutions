/* exported isVowel */
// change character input to lowercase
// if the character is a, e, i, o, u
// give back true
// otherwise
// give back false
function isVowel(char) {
  var lowerChar = char.toLowerCase();
  if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
    return true;
  }
  return false;
}
