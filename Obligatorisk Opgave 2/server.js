// modules ======================================================
var express 	= require('express');
var app 		= express();
var bodyParser = require('body-parser');
var db = require('./config/db');

// configuration  ===============================================

// config =======================================================
//set our port 
var port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

////connect to our mongoDB database
var mongoose = require('mongoose');
mongoose.connect(db.url); // connect to our database

//// routes ==================================================
require('./app/routes.js')(app); // configure our routes

//// more routes for our API will happen here

//// REGISTER OUR ROUTES -------------------------------
//// all of our routes will be prefixed with /api
//app.use('/api', router);


//// start app ===============================================
//// startup our app at http://localhost:8080
app.listen(port);               

//// shoutout to the user                     
console.log('Magic happens on port ' + port);

//// expose app           
exports = module.exports = app;   