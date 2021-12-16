/* exported getValues */
// make storage for property values
// go through each property, one by one
// insert that property value into storage
// give back location of storage

function getValues(object) {
  var propertyKeys = [];
  for (var key in object) {
    propertyKeys.push(object[key]);
  }
  return propertyKeys;
}
