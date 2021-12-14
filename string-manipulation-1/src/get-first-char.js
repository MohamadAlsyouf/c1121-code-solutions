/* exported getFirstChar */
// storage for the first character in a string.
// for each character in a string, one by one,
// get the first character value of the string and store it.
// give back the location of stored first character of the string.
function getFirstChar(string) {
  var firstChar = [];
  for (var i = 0; i < string.length; i++) {
    firstChar = string[0];
  }
  return firstChar;
}
