/* exported truncate */
// make storage for the new string
// take the string values up until a certain point (length)
// move that new string into storage
// add ellipsis to the end of the new string

function truncate(length, string) {
  var newString = '';
  newString = string.slice(0, length);
  newString += '...';
  return newString;
}
