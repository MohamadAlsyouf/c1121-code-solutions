// for server code
const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, 'public');
console.log(publicPath);

const staticMiddleware = express.static(publicPath);
app.use(staticMiddleware);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on PORT 3000');
});
