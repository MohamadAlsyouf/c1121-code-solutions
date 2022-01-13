/* exported numVowels */
// create storage for number of values and set it equal to 0
// lowercase the string
// check if each letter of the given word is a vowel
//  if it is, add the number of vowels by 1
// give back the storage including the number of vowels

function numVowels(string) {
  var vowelNum = 0;
  var lowerString = string.toLowerCase();
  for (var i = 0; i < lowerString.length; i++) {
    if (lowerString[i] === 'a' || lowerString[i] === 'e' || lowerString[i] === 'i' || lowerString[i] === 'o' || lowerString[i] === 'u') {
      vowelNum++;
    }
  }
  return vowelNum;
}
