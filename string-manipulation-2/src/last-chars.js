/* exported lastChars */
// create storage for last amount of letters in a string
// find the last amount of letters using the given length up until the last letter
// store these letters in their allocated storage
// return the storage where the last letters are located.

function lastChars(length, string) {
  var lastChars = '';
  lastChars = string.slice(-length, string.length);
  return lastChars;
}
