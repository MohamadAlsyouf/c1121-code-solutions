const fs = require('fs');
const jsonObject = require('./data.json');

const note = jsonObject.notes;
const newObject = jsonObject;
const newNotes = newObject.notes;
const nextId = newObject.nextId;
const noteCount = Object.keys(newNotes);

if (process.argv[2] === 'read') {
  for (var i = 1; i <= noteCount.length; i++) {
    const noQuoteNote = `${i}: ${note[i]}`;
    console.log(noQuoteNote);
  }
}

if (process.argv[2] === 'create') {
  newObject.nextId++;
  newNotes[nextId] = process.argv[3];
  fs.writeFile('data.json', JSON.stringify(newObject, null, 2), (err, data) => {
    if (err) throw err;
  });
  console.log(newObject);
}

if (process.argv[2] === 'delete') {
  delete newObject.notes[process.argv[3]];
  fs.writeFile('data.json', JSON.stringify(newObject, null, 2), (err, data) => {
    if (err) throw err;
  });
  console.log(newObject);
}

if (process.argv[2] === 'update') {
  newObject.notes[process.argv[3]] = process.argv[4];
  fs.writeFile('data.json', JSON.stringify(newObject, null, 2), (err, data) => {
    if (err) throw err;
  });
  console.log(newObject);
}
