var Varer = require('./models/varer');

	module.exports = function(app) {
		// Server routes =====================
		//handle things like api call
	    //authentication routes

	    // middleware to use for all requests
	    app.use(function (req, res, next) {
	        // do logging
	        console.log('Something is happening.');
	        next(); // make sure we go to the next routes and don't stop here
	    });

	    // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
	    app.get('/', function (req, res) {
	        res.json({ message: 'hooray! welcome to our api!' });
	    });

	    app.route('/varer')
	        // create a bear (accessed at POST http://localhost:8080/api/bears)
	        .post(function(req, res) {

	            var varer = new Varer(); // create a new instance of the Bear model
	            varer.name = req.body.name; // set the bears name (comes from the request)
	            varer.gppg = req.body.gppg;

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

	    app.route('/varer/:varer_id')
	        // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
	        .get(function (req, res) {
	            Varer.findById(req.params.varer_id, function (err, varer) {
	                if (err)
	                    res.send(err);
	                res.json(varer);
	            });
	        })

	        .put(function (req, res) {

	            // use our bear model to find the bear we want
	            Varer.findById(req.params.varer_id, function (err, varer) {

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
	                _id: req.params.varer_id
	            }, function (err, varer) {
	                if (err)
	                    res.send(err);

	                res.json({ message: 'Successfully deleted' });
	            });
	        });

	    app.route('/varer')

	        .delete(function (req, res) {
	            Varer.remove({
	                _id: req.params.varer_id
	            }, function (err, varer) {
	                if (err)
	                    res.send(err);

	                res.json({ message: 'Successfully deleted' });
	            });
	        });

		////sample api route 
		//app.get('/api/varer', function(req, res){
		//	//use mongoose to get all varer in the db
		//	Vare.find(function (err, varer){
		//		//if there is error retrieving, send the error
		//		if (err)
		//			res.send(err);
		//		//nothing after res.send(err) will execute
		//		res.json(varer); //return all varer in JSON.
		//	});
		//});
		
		//route to handle creationg goes here app.post
		//rout to handle delete goes here (app.delete)
		
		//frontend routes ===================
		//route to handle all angular requests
		app.get('*', function(req, res){
			res.sendfile('./public/views/index.html'); // load public/indx.html file
		});
	};