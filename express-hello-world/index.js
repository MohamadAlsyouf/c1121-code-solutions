const express = require('express');
const app = express();

const html = '<h1>meow meow meow!</h1>';

app.use((req, res) => {
  res.send(html);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
