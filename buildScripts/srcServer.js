import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
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
