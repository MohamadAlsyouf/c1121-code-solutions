function reduce(array, combine, initialValue) {
  let finalValue = initialValue;
  let i = 0;
  if (arguments.length < 3) {
    finalValue = array[0];
    i = 1;
  }
  for (; i < array.length; i++) {
    finalValue = combine(finalValue, array[i]);
  }
  return finalValue;
}
