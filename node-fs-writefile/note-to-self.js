const fs = require('fs');

fs.writeFile('note.txt', process.argv[2], err => {
  if (err) throw err;
  console.log(process.argv[2]);
});
