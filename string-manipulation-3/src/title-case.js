/* exported titleCase */
// create storage for the new string
// lower case the string, separate the words into an array by ' ',
// iterate over each word in the array
//   if the word's length is more than 3, upper case the word
// ........

const titleCase = title => {
  const lowerTitle = title.toLowerCase().split(' ');
  // console.log(lowerTitle);
  for (let i = 0; i < lowerTitle.length; i++) {
    lowerTitle[i] = lowerTitle[i].charAt(0).toUpperCase() + lowerTitle[i].slice(1);
    if (lowerTitle[i].length <= 3 && lowerTitle[i].length > 1) {
      // console.log(lowerTitle[i]);
      lowerTitle[i] = lowerTitle[i].toLowerCase();
      // console.log(lowerTitle[i]);
    }
  }
  // console.log(lowerTitle);
  return lowerTitle.join(' ');
};
