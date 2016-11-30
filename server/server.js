var express = require('express');
var app = express();

app.listen(4568);
console.log('Listening on port 4568');

app.use(express.static('client'));

app.get('/fb', function(req, res) {
    res.redirect('/fb.html');
});