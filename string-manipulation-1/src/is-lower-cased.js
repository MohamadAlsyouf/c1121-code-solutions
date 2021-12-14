/* exported isLowerCased */
// if word is all lowercased
// give back true
// otherwise
// give back false
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  }
  return false;
}
