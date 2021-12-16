/* exported toObject */
// store the first item in the keyValuePair list given to us
// store the second item in that list in another storage location
// make an empty list storage of key value pairs
// set the 2nd item given to us in the list equal to the 1st item
// give back location of the empty list we made, now full.
function toObject(keyValuePair) {
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  var pairObject = {};
  pairObject[key] = value;
  return pairObject;
}
