var x = 2;
var y = 4;
var z = 6;
var maximumValue = Math.max(x, y, z);
console.log('return value of maximumValue:', maximumValue);

var heroes = ['spiderman', 'captain underpants', 'barnicle boy', 'ant man'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'Deep Work',
    author: 'Cal Newport'
  },
  {
    title: 'Python Crash Course',
    author: 'Eric Matthes'
  },
  {
    title: 'Smart Thinking',
    author: 'Art Markman'
  }
];
var lastBook = library.pop();
console.log('value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

var fullName = 'Mohamad Alsyouf';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
