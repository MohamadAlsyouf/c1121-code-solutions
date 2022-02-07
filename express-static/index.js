// for server code
const express = require('express');
const path = require('path');
const app = express();

const newPath = path.join(__dirname, 'public');
console.log(newPath);

const theStatic = express.static('public');
app.use(theStatic);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on PORT 3000');
});
