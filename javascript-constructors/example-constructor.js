function ExampleConstructor() {}
console.log('value of prototype property of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype property of ExampleConstructor:', typeof ExampleConstructor.prototype);
var newExample = new ExampleConstructor();
console.log('value of newExample:', newExample);
var isInstanceOf = newExample instanceof ExampleConstructor;
console.log('isInstanceOf ExampleConstructor:', isInstanceOf);
