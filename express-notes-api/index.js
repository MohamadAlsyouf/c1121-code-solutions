const fs = require('fs');
const jsonObject = require('./data.json');
const express = require('express');
const app = express();

const notes = jsonObject.notes;
const newObject = jsonObject;
const newNotes = newObject.notes;
let nextId = newObject.nextId;

app.use(express.json());

// ft.1 client can get all notes
app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const aNote in notes) {
    notesArray.push(notes[aNote]);
  }
  res.status(200).json(notesArray);
});

// ft.1.5 client can get a single note by id
app.get('/api/notes/:id', (req, res) => {
  const singleNote = req.params;
  const id = parseInt(singleNote.id);
  if (id < 0 || !Number.isInteger(id)) {
    res.status(400).json({ error: 'Id must be a positive integer!' });
  } else if (notes[id] !== undefined) {
    res.status(200).json(notes[id]);
  } else {
    res.status(404).json({ error: `Cannot find note with id ${id}!` });
  }
});

// ft.2 client can post a new note
app.post('/api/notes', (req, res) => {
  const newContent = req.body;
  const id = nextId;
  if (newContent.content === undefined) {
    res.status(400).json({ error: 'No content provided!' });
  } else {
    newNotes[id] = newContent;
    newContent.id = id;
    jsonObject.nextId++;
    nextId++;
    const updatedNotes = JSON.stringify(newObject, null, 2);
    fs.writeFile('data.json', updatedNotes, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured.' });
      } else {
        res.status(201).json(newContent);
      }
    });
  }
});

// ft.3 client can delete a note by id
app.delete('/api/notes/:id', (req, res) => {
  const toDelete = req.params;
  const id = parseInt(toDelete.id);

  if (id < 1 || !Number.isInteger(id)) {
    res.status(400).json({ error: 'Id must be a positive integer!' });
  } else if (notes[id] === undefined) {
    res.status(404).json({ error: `Cannot find note with id ${id}!` });
  } else {
    notes[id] = toDelete;
    delete notes[id];
    const updatedNotes = JSON.stringify(newObject, null, 2);
    fs.writeFile('data.json', updatedNotes, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

// ft.4 client can replace a note (PUT) by id
app.put('/api/notes/:id', (req, res) => {
  const toUpdate = req.params;
  const id = parseInt(toUpdate.id);
  const updatedContent = req.body;

  if ((id < 1 || !Number.isInteger(id)) || (updatedContent.content === undefined)) {
    res.status(400).json({ error: 'Invalid Id or Content' });
  } else if (notes[id] === undefined) {
    res.status(404).json({ error: `Cannot find note with id ${id}` });
  } else {
    updatedContent.id = id;
    notes[id] = updatedContent;
    const updatedNotes = JSON.stringify(newObject, null, 2);
    fs.writeFile('data.json', updatedNotes, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
      } else {
        res.status(200).json(updatedContent);
      }
    });
  }
});

// connects to host
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on PORT 3000');
});
