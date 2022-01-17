/* exported pick */
// create storage for the new object
// iterate over each property in the source object
//   if the keys array includes the source object's property name,
//     set a property of the new object equal to that property
// return allocated storage for the new object

function pick(source, keys) {
  var newObject = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
