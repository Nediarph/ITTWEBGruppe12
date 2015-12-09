// modules ======================================================
var express 	= require('express');
var app 		= express();
var bodyParser = require('body-parser');
var db = require('./config/db');

// configuration  ===============================================
var port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/public'));

////connect to our mongoDB database
var mongoose = require('mongoose');
mongoose.connect(db.url); 


require('./app/routes.js')(app); // configure our routes


app.listen(port);               

                   
console.log('Magic on port ' + port);

          
exports = module.exports = app;   