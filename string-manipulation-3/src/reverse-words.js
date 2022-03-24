/* exported reverseWords */
// create storage for the reversed string
// split the string up at each char ''
//   reverse the string,
//   join the words back into a sentance and store
// create storage for the new string
//   split the previous reversed string up at each space seperating the words,
//   reverse the previously reversed string, setting the correct order of words
//   join the words back into a sentance and store new sentance into allocated storage
// return new sentance

function reverseWords(string) {
  var reversedString = string.split('').reverse().join('');
  var newString = reversedString.split(' ').reverse().join(' ');
  return newString;
}
