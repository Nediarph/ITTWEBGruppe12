//var Vare = require('./models/varer);

	module.exports = function(app) {
		// Server routes =====================
		//handle things like api call
		//authentication routes
		
		//sample api route 
		app.get('/api/varer', function(req, res){
			//use mongoose to get all varer in the db
			Vare.find(function (err, varer){
				//if there is error retrieving, send the error
				if (err)
					res.send(err);
				//nothing after res.send(err) will execute
				res.json(varer); //return all varer in JSON.
			});
		});
		
		//route to handle creationg goes here app.post
		//rout to handle delete goes here (app.delete)
		
		//frontend routes ===================
		//route to handle all angular requests
		app.get('*', function(req, res){
			res.sendfile('./public/views/index.html'); // load public/indx.html file
		});
	};