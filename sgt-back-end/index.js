const express = require('express');
const app = express();
const pg = require('pg');
// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

// get - return all rows from grade table
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
  const text = 'INSERT INTO grades(name, course, score) VALUES($1, $2, $3) RETURNING *';
  const values = [req.body.name, req.body.course, req.body.score];

  db.query(text, values)
    .then(result => {
      const newGrade = result.rows[0];
      res.status(201).json(newGrade);

    })
    .catch(err => {
      if (values.name === undefined) {
        res.status(400).json({ error: 'missing name!' });

      } else {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
      }

    });
});

// connects to host
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on PORT 3000');
});
