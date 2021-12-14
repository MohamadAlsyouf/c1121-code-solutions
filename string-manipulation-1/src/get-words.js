/* exported getWords */
// storage of empty list for no word given
// check if word has no characters
//    if so, give back the empty list
// check if word has a two words or one word
//    if so, give back the words or word split up inside their own list
// add newly divided word to storage
// give back location of storage
function getWords(string) {
  var emptyArray = [];
  if (string === '') {
    return emptyArray;
  } else if (string.includes(' ') || string !== '') {
    var splitWords = string.split(' ');
    return splitWords;
  }
}
