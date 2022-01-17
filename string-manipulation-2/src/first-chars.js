/* exported firstChars */
// create storage for then first 'length' of the given string
// take the string's letters up until the length provided
// add these letters to their allocated storage

function firstChars(length, string) {
  var firstChars = '';
  firstChars = string.slice(0, length);
  return firstChars;
}
