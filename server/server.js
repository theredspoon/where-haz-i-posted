var express = require('express');
// var fs = require('fs');
var app = express();
// var router = express.Router();

app.listen(4568);
console.log('Listening on port 4568');

app.get('/fbnew', function(req, res) {
    res.sendFile(__dirname + '/fb.html', function (err) {
      if (err) {
        console.log('err is ', err);
      }
    });
});

app.get('/fbold', function(req, res) {
    res.sendFile(__dirname + '/fb2.html', function (err) {
      if (err) {
        console.log('err is ', err);
      }
    });
});
/*
app.get('/test', function(req, res) {
  console.log('reading!');
    res.redirect('http://www.google.com');
});

*/