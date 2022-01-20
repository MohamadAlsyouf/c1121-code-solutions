/* exported defaults */
// create storage for the key's included in the given target object
// for each key of the source object
// if that key is not included in the target object's keys
//  add the property to the target object

function defaults(target, source) {
  var targetArray = Object.keys(target);
  for (var key in source) {
    if (!targetArray.includes(key)) {
      target[key] = source[key];
    }
  }
}
