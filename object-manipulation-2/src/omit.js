/* exported omit */
// create storage for the new object
// iterate over each property in the given source object
//   if the keys array does NOT include the source object's property name,
//     set property of the new object equal to that properties value
// give back allocated storage for the new object

function omit(source, keys) {
  var newObject = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
