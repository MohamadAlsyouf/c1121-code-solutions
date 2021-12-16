/* exported getKeys */
// make storage for the key values
// go through the key values one by one
// insert each key in storage
// give back location of storage for keys

function getKeys(object) {
  var propertyKeys = [];
  for (var key in object) {
    propertyKeys.push(key);
  }
  return propertyKeys;
}
