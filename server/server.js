const express = require('express');
const Product = require('./db/database');

const app = express();
const port = process.env.PORT || 3001;
const PUBLIC_DIR = './client/public/';

app.use('/', express.static(PUBLIC_DIR));

app.listen(port, () => {
  console.log(`[Server] : Listening on port ${port}`);
});