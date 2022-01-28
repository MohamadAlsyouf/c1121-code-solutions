const takeAChance = require('./take-a-chance');

const promise1 = takeAChance('Mohamad');

promise1.then(message => {
  console.log(message);
});

promise1.catch(error => {
  console.log(error.message);
});
