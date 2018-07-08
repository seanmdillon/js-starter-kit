import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  // hard code a response for now
  res.json([
    {"id": 1,"firstName":"Sean","lastName":"Dillon","email":"seanmdillon@gmail.com"},
    {"id": 2,"firstName":"Kelly","lastName":"Dillon","email":"kellyldillon@icloud.com"},
    {"id": 3,"firstName":"Jordan","lastName":"Dillon","email":"jordandillon25@gmail.com"},
    {"id": 4,"firstName":"Cameron","lastName":"Dillon","email":"cameron.s.dillon@gmail.com"},
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
