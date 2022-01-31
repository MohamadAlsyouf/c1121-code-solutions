const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

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

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score);
  const sql = `
  INSERT INTO grades(name, course, score)
  VALUES($1, $2, $3)
  RETURNING *
  `;
  const values = [name, course, score];

  if (!name || !course || !score) {
    res.status(400).json({ error: 'missing name, course, or score!' });
    return;
  } else if (score < 0 || score > 100) {
    res.status(400).json({ error: 'score is not an integer from 0-100!' });
    return;
  } else if (!Number.isInteger(score)) {
    res.status(400).json({ error: 'score is not an integer!' });
    return;
  }

  db.query(sql, values)
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

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score);
  const sql = `
    UPDATE "grades"
    SET "name" = $1,
        "course" = $2,
        "score" = $3
    WHERE "gradeId" = ${gradeId}
    RETURNING *
    `;
  const values = [name, course, score];

  if (!name || !course || !score) {
    res.status(400).json({ error: 'missing name, course, or score!' });
    return;
  } else if (score < 0 || score > 100) {
    res.status(400).json({ error: 'score is not an integer from 0-100!' });
    return;
  }

  db.query(sql, values)
    .then(result => {
      const updatedGrade = result.rows[0];
      if (!updatedGrade) {
        res.status(404).json({ error: 'gradeId does not exist in grades table!' });
      } else {
        res.status(200).json(updatedGrade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const sql = `
  DELETE FROM "grades"
  WHERE "gradeId" = ${gradeId}
  RETURNING *
  `;
  if (!Number(gradeId)) {
    res.status(400).json({ error: 'Invalid gradeId!' });
    return;
  }

  db.query(sql)
    .then(result => {
      const deletedGrade = result.rows[0];
      if (!deletedGrade) {
        res.status(404).json({ error: 'gradeId does not exist in grades table!' });
      } else {
        res.status(204).json(deletedGrade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on PORT 3000');
});
