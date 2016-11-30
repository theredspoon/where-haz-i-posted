var express = require('express');
var app = express();

app.listen(1337);
console.log('L1s+3n1ng 0n p0r+ 1337');

app.use(express.static('client'));