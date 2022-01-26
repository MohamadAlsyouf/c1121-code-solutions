const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const allGrades = [];
  for (const grade in grades) {
    allGrades.push(grades[grade]);
  }
  res.json(allGrades);
});

app.delete('/api/grades/:id', (req, res) => {
  const toDelete = req.params;
  const id = parseInt(toDelete.id);
  grades[id] = toDelete;
  delete grades[id];
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on PORT 3000!');
});
