const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const grade in grades) {
    gradesArray.push(grades[grade]);
  }
  res.json(gradesArray);
});

const jsonMiddleWare = express.json();

app.use(jsonMiddleWare);

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  const id = nextId;
  newGrade.id = id;
  grades[id] = newGrade;
  nextId++;
  res.status(201).json(newGrade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
