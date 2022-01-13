/* exported truncate */
// make storage for the new string
// take the string values up until a certain point (length)
// move that new string into storage
// add ellipsis to the end of the new string
var newString = '';
function truncate(length, string) {
  newString = string.slice(0, length);
  newString += '...';
  return newString;
}
