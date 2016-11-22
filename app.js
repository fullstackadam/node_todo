var express = require('express');
var config = require('./config/index.js');
var app = express();

console.log(config.getDbConnectionString());

var port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.listen(port);