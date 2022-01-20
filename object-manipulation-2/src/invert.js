/* exported invert */
// create a new object to store inverted object properties into
// iterate over the properties of the given source object
//   store and set the value at the current key of the source object's property equal to the current key
// give back allocated storage for the inverted object

function invert(source) {
  var invertedObject = {};
  for (var key in source) {
    invertedObject[source[key]] = key;
  }
  return invertedObject;
}
