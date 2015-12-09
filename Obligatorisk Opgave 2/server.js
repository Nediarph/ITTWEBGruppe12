// modules ======================================================
var express 	= require('express');
var app 		= express();
var bodyParser = require('body-parser');
var db = require('./config/db');

// configuration  ===============================================

// config =======================================================

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set our port 
var port = process.env.PORT || 8080;

var mongoose = require('mongoose');
mongoose.connect(db.url); // connect to our database
var Varer = require('./app/models/varer');

////connect to our mongoDB database
////mongoose.connect (db.url);

//// routes ==================================================
//require('./app/routes.js')(app); // configure our routes

var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/varer')
    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var varer = new Varer(); // create a new instance of the Bear model
        varer.name = req.body.name; // set the bears name (comes from the request)

        // save the bear and check for errors
        varer.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Varer created!' });
        });
    })

    .get(function (req, res) {
        Varer.find(function (err, varer) {
            if (err)
                res.send(err);

            res.json(varer);
        });
    });

router.route('/bears/:bear_id')
    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function (req, res) {
        Varer.findById(req.params.bear_id, function (err, varer) {
            if (err)
                res.send(err);
            res.json(varer);
        });
    })

    .put(function (req, res) {

        // use our bear model to find the bear we want
        Varer.findById(req.params.bear_id, function (err, varer) {

            if (err)
                res.send(err);

            varer.name = req.body.name;  // update the bears info

            // save the bear
            varer.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Varer updated!' });
            });

        });
    })

    .delete(function (req, res) {
        Varer.remove({
            _id: req.params.bear_id
        }, function (err, varer) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

//frontend routes ===================
//route to handle all angular requests
app.get('*', function (req, res) {
    res.sendfile('./public/views/index.html'); // load public/indx.html file
});

//// start app ===============================================
//// startup our app at http://localhost:8080
app.listen(port);               

//// shoutout to the user                     
console.log('Magic happens on port ' + port);

//// expose app           
//exports = module.exports = app;   