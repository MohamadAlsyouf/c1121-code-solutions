/* exported capitalizeWords */
// create storage and store the words separated by a space
// turn the letter values of the word into an array
// iterate through each value of the array
//  capitalize the first letter and attach the remaining lowercased letters to it, add to storage
// give back the location of the word but in word form.

function capitalizeWords(string) {
  var capitalWord = [];
  var splitWord = string.split(' ');
  for (var i = 0; i < splitWord.length; i++) {
    capitalWord.push(splitWord[i].slice(0, 1).toUpperCase() + splitWord[i].slice(1, splitWord[i].length).toLowerCase());
  }
  return capitalWord.join(' ');
}
