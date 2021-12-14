/* exported isUpperCased */
// if word is all uppercased
// give back true
// otherwise
// give back false

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
