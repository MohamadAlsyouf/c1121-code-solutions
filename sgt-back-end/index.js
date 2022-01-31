const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

// returns all rows from grade table
app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.use(express.json());
// inserts a new grade into the grades table and returns the new grade
app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score);
  const text = 'INSERT INTO grades(name, course, score) VALUES($1, $2, $3) RETURNING *';
  const values = [name, course, score];

  if (name === undefined || course === undefined || score === undefined) {
    res.status(400).json({ error: 'missing name, course, or score!' });
    return;
  } else if (score < 0 || score > 100) {
    res.status(400).json({ error: 'score is not an integer from 0-100!' });
    return;
  } else if (!Number.isInteger(score)) {
    res.status(400).json({ error: 'score is not an integer!' });
    return;
  }

  db.query(text, values)
    .then(result => {
      const newGrade = result.rows[0];
      res.status(201).json(newGrade);

    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });

    });
});

// updated a grade in the grades table and returns the updated grade
app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);

  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score);

  const sql = `
    UPDATE "grades"
    SET "poop" = $1,
        "butt" = $2,
        "face" = $3
    WHERE "gradeId" = ${gradeId}
    RETURNING *`;
  const values = [name, course, score];

  if (name === undefined || course === undefined || score === undefined) {
    res.status(400).json({ error: 'missing name, course, or score!' });
    return;
  } else if (score < 0 || score > 100) {
    res.status(400).json({ error: 'score is not an integer from 0-100!' });
    return;
  } else if (!Number.isInteger(score)) {
    res.status(400).json({ error: 'score is not an integer!' });
    return;
  } else if (gradeId === undefined) {
    res.status(404).json({ error: 'gradeId does not exist in grades table!' });
    return;
  }

  db.query(sql, values)
    .then(result => {
      const updatedGrade = result.rows[0];
      res.status(200).json(updatedGrade);

    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
      // my 500 error is not working right !!!
    });
});

// deletes a grade from the grades table
app.delete('/api/grades/:gradeId', (req, res) => {
  // const deleteGrade = Number(req.params.gradeId);
});

// connects to host
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on PORT 3000');
});
