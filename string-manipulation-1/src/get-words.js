/* exported getWords */
// storage of empty list for no word given
// check if word has no characters
//    if so, give back the empty list
// otherwise,
//    divide the words wherever there is a space
// add newly divided word to storage
// give back location of storage
function getWords(string) {
  var emptyArray = [];
  if (string === '') {
    return emptyArray;
  } else {
    var splitWords = string.split(' ');
    return splitWords;
  }
}
