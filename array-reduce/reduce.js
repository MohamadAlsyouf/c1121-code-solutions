function reduce(array, combine, initialValue) {
  let index = 0;
  let finalValue = initialValue;
  if (arguments.length === 2) {
    index = 1;
    finalValue = array[0];
  }
  for (; index < array.length; index++) {
    // finalValue = combine(finalValue, ?);
  }
}
