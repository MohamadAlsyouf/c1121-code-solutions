const fs = require('fs');

fs.writeFile('random.txt', String(Math.random()), err => {
  if (err) throw err;
  console.log(Math.random());
});
