// modules ======================================================
var express = require('express');
var app = express();
var db = require('./app/config/db');

// config
var port = process.env.port || 8080;
app.set('views', __dirname + '/app/views')
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));



//connect to mongoDb
var mongoose = require('mongoose');
mongoose.connect(db.url);

//configure routes, add API routes to routes.js
require('./app/routes.js')(app);


app.listen(port);
console.log('Magic on port ' + port);


exports = module.exports = app;  