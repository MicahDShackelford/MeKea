const express = require('express');
const path = require('path');
const Product = require('./db/database');

const app = express();
const port = process.env.PORT || 3001;
const PUBLIC_DIR = path.join(__dirname + '/../client/public');

app.use('/', express.static(PUBLIC_DIR));

app.get('/product/:pid', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  let pid = parseInt(req.params.pid);
  Product.collection.findOne({id: pid}, (err, doc) => {
    if(err) {
      res.statusCode = 400;
      res.end();
    }else {
      res.send(doc);
      res.statusCode = 200;
      res.end()
    }
  })
})

app.listen(port, () => {
  console.log(`[Server] : Listening on port ${port}`);
});