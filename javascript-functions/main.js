function minutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var minutesToSecondsResult = minutesToSeconds(5);
console.log('minutesToSecondsResult:', minutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name + '!';
  return greeting;
}
var greetResult = greet('Butthead');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var areaResult = getArea(6, 8);
console.log('areaResult:', areaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var personResult = getFirstName({ firstName: 'John', lastName: 'Cena' });
console.log('personResult:', personResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
var lastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('lastElementResult:', lastElementResult);
