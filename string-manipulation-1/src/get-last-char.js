/* exported getLastChar */
// storage for the last character in a string.
// for each character in the string, one by one, up to but not including the last character,
// find and store the last character value of the string
// add 1 character space to the current last character
// give back the location of stored last character of said string
function getLastChar(string) {
  var lastChar = [];
  for (var i = 0; i < string.length - 1; i++) {
    lastChar = string[i + 1];
  }
  return lastChar;
}
