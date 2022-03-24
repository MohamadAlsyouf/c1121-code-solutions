/* exported titleCase */
// lowercase the given title
// initialize an array containing all minor words to test for
// create storage for each individual word in the lowercased title
// capitalize the first letter of each given title
// for each index of the words array,
//  if the current word is not found in the minor words array,
//    uppercase the first character and reattach the rest of the lowercased word
//  if the current index value is a colon,
//    uppercase the next word in the array
//  if the current index value of a dash is present,
//    uppercase the letter after the dash
//    reattach the rest of the word
//    set the current index to the new word
//  if the current word is equal to 'Javascript',
//    set the word equal to 'JavaScript'
//  if the current word is equal to 'javascript:',
//    set the word equal to 'JavaScript:'
//  if the current word is equal to 'Api',
//    set the word equal to 'API'
// return the titleCased title as a string after joining the elements of the wordArray.

const titleCase = title => {
  const lowerCasedTitle = title.toLowerCase();
  const minorWords = ['in', 'for', 'of', 'the', 'an', 'to', 'on', 'and'];
  const wordArray = lowerCasedTitle.split(' ');
  wordArray[0] = wordArray[0].charAt(0).toUpperCase() + wordArray[0].substring(1);

  for (let i = 0; i < wordArray.length; i++) {
    if (minorWords.indexOf(wordArray[i]) === -1) {
      wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].substring(1);
    }
    if (wordArray[i].includes(':')) {
      wordArray[i + 1] = wordArray[i + 1].charAt(0).toUpperCase() + wordArray[i + 1].substring(1);
    }
    if (wordArray[i].includes('-')) {
      const index = wordArray[i].indexOf('-');
      const letterAfterDash = wordArray[i].charAt(index + 1).toUpperCase();
      const newWord = wordArray[i].substring(0, index + 1) + letterAfterDash + wordArray[i].substring(index + 2, wordArray[i].length);
      wordArray[i] = newWord;
    }
    if (wordArray[i] === 'Javascript') {
      wordArray[i] = 'JavaScript';
    }
    if (wordArray[i] === 'Javascript:') {
      wordArray[i] = 'JavaScript:';
    }
    if ((wordArray[i] === 'Api')) {
      wordArray[i] = 'API';
    }
  }
  return wordArray.join(' ');
};
