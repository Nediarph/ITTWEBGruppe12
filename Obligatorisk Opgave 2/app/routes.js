var Varer = require('./models/varer');
var Person = require('./models/person');
var Meal = require('./models/meals');

	module.exports = function(app) {
   
    app.use(function(req, res, next) {
       
        console.log('Something is happening.');
        next(); 
    });

    // test route
    app.get('/', function(req, res) {
        res.json({ message: 'hooray! api is working!' });
    });

    app.route('/varer')
        
        .post(function(req, res) {

            var varer = new Varer(); 
            varer.name = req.body.name;
            varer.gppg = req.body.gppg;

            
            varer.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Varer created!' });
            });
        })
        .get(function(req, res) {
            Varer.find(function(err, varer) {
                if (err)
                    res.send(err);

                res.json(varer);
            });
        });

    app.route('/varer/:varer_id')
        
        .get(function(req, res) {
            Varer.findById(req.params.varer_id, function(err, varer) {
                if (err)
                    res.send(err);
                res.json(varer);
            });
        })
        .put(function(req, res) {

            
            Varer.findById(req.params.varer_id, function(err, varer) {

                if (err)
                    res.send(err);

                varer.name = req.body.name; 

               
                varer.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Varer updated!' });
                });

            });
        })
        .delete(function(req, res) {
            Varer.remove({
                _id: req.params.varer_id
            }, function(err, varer) {
                if (err)
                    res.send(err);

                res.json({ message: 'Successfully deleted' });
            });
        });

    app.route('/person')
       
        .post(function(req, res) {

            var person = new Person(); 
            person.name = req.body.name; 
            person._id = req.body._id;

            
            person.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Person created!' });
            });
        });

    app.route('/person/:person_id')
        .get(function(req, res) {
            Person.findId(req.params.person_id, function(err, person) {
                
                if (err)
                    res.send(err);
                res.json(person);
            });
        })

        .delete(function (req, res) {
            Person.remove({
                _id: req.params.person_id
            }, function (err, person) {
                if (err)
                    res.send(err);

                res.json({ message: 'Successfully deleted' });
            });
        });

	    app.route('/meals/:person_id/:dato/:varer/:gram')
	        .post(function(req, res) {

	            var meal = new Meal();
	            meal.dato = req.params.dato;
	            meal.varer = req.params.varer;
	            meal.gram = req.params.gram;
	            meal.person_id = req.params.person_id;

	            meal.save(function(err) {
	                if (err)
	                    res.send(err);

	                res.json({ message: 'Meal added!' });
	            });
	        })
	        .get(function(req, res) {
	            Meal.findId(req.params.person_id, function(err, meal) {

	                if (err)
	                    res.send(err);
	                res.json(meal);
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
	
		
		//frontend routes ===================
		app.get('*', function(req, res){
			res.sendfile('./public/views/index.html'); 
		});
	};