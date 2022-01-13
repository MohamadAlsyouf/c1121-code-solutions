/* exported ransomCase */
// storage for true or false value to determine whether or not letter should be uppercased.
// storage for new ransomCased word.
// for each letter in the word:
// if current letter should not be uppercased;
//   lowercase that letter,
//   set boolean value to true, so we know to uppercase next letter.
// if current letter should be uppercased;
//   uppercase that letter,
//   set boolean value to false, so we know to lowercase next letter.
// return storage containing new ransomCased word.

function ransomCase(string) {
  var shouldBeUpperCase = false;
  var ransomWord = '';
  for (var i = 0; i < string.length; i++) {
    if (shouldBeUpperCase === false) {
      ransomWord += string[i].toLowerCase();
      shouldBeUpperCase = true;
    } else if (shouldBeUpperCase === true) {
      ransomWord += string[i].toUpperCase();
      shouldBeUpperCase = false;
    }
  }
  return ransomWord;
}
