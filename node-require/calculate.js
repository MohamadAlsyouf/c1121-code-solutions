const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

if (process.argv[3] === 'plus') {
  const sum = add();
  console.log('result: ', sum);
}
if (process.argv[3] === 'minus') {
  const difference = subtract();
  console.log('result: ', difference);
}
if (process.argv[3] === 'times') {
  const product = multiply();
  console.log('result: ', product);
}
if (process.argv[3] === 'over') {
  const quotient = divide();
  console.log('result: ', quotient);
}
