const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((previousNum, currentNum) => previousNum + currentNum);
console.log(sum);

const product = numbers.reduce((previousNum, currentNum) => previousNum * currentNum);
console.log(product);

const balance = account.reduce((previousValue, currentValue) => {
  if (currentValue.type === 'deposit') {
    previousValue += currentValue.amount;
  } else if (currentValue.type === 'withdrawal') {
    previousValue -= currentValue.amount;
  }
  return previousValue;
}, 0);
console.log(balance);

const composite = traits.reduce((previousValue, currentValue) => {
  currentValue = Object.assign(previousValue, ...traits);
  return currentValue;
}, {});
console.log(composite);
