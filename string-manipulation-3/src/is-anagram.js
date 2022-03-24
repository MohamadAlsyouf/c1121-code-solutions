/* exported isAnagram */
// create storage for the given strings
// get rid of the spaces in the strings, lower case it, insert each letter of the string into an array,
//   sort the letters of the array, and combine the individual letters back into a string, and store in allocated storage.
//  return true or false depending on whether or not the two strings are equal to each other.

function isAnagram(firstString, secondString) {
  var stringOne = firstString.replaceAll(' ', '').toLowerCase().split('').sort().join('');
  var stringTwo = secondString.replaceAll(' ', '').toLowerCase().split('').sort().join('');
  return stringOne === stringTwo;
}
