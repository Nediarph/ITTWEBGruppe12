var Person = require('./models/users');
var Workout = require('./models/workOutPlan');

module.exports = function (app) {
    
    //Backend routes ====================
    //User routes ====================
    app.route('/users')
        .get(function(req, res) {
            Person.find(function(err, users) {
                if (err)
                    res.send(err);

                res.json(users);
            });
        })
    
        .post(function (req, res) {

            var user = new Person();
            user.id = req.body.id;
            user.name = req.body.name;
            user.password = req.body.password;

            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'User created' });
            });
    });

    app.route('/users/:user_id')
        .get(function(req, res) {
            Person.findById(req.params.user_id, function(err, users) {
                if (err)
                    res.send(err);

                res.json(users);
            });
        })
        .put(function(req, res) {

            Person.findById(req.params.user_id, function(err, user) {
                if (err)
                    res.send(err);

                user.id = req.body.id;
                user.name = req.body.name;
                user.password = req.body.password;

                user.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'User updated' });
                });
            });

        })
        .delete(function(req, res) {
            Person.remove({
                _id: req.params.user_id
            }, function(err, user) {
                if (err)
                    res.send(err);

                res.json({ message: 'Successfully deleted user' });
            });
        });

    //WorkOutPlan routes ====================
    app.route('/workoutplan/')
        .get(function(req, res) {
            Workout.find(function(err, workOutPlans) {
                if (err)
                    res.send(err);

                res.json(workOutPlans);
            });
        })
        .post(function (req, res) {

            var workout = new Workout();
            workout.name = req.body.name;
            workout.userEmail = req.body.userEmail;
            workout.completeCount = req.body.completeCount;
            workout.lastCompleteDate = req.body.lastCompleteDate;

            workout.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Workout plan created' });
            });
        });
    app.route('/workoutplan/:plan_id')
        .put(function (req, res) {
        
        Workout.findById(req.params.plan_id, function (err, plan) {
            if (err)
                res.send(err);
            
            plan.name = req.body.name;
            plan.completeCount = req.body.completeCount;
            plan.lastCompleteDate = req.body.lastCompleteDate;
            
            plan.save(function (err) {
                if (err)
                    res.send(err);
                
                res.json({ message: 'Workout plan updated' });
            });
        });

    })
        .delete(function (req, res) {
        Workout.remove({
            _id: req.params.plan_id
        }, function (err, plan) {
            if (err)
                res.send(err);
            
            res.json({ message: 'Successfully deleted Workout plan' });
        });
    });
    app.route('/addexercise/:plan_id')
        .put(function(req, res) {

            Workout.findById(req.params.plan_id, function(err, plan) {
                if (err)
                res.send(err);

                plan.exercises.push({
                    name: req.body.name,
                    describtion: req.body.describtion,
                    exerciseset: req.body.exerciseset,
                    repititions: req.body.repititions
                });

                plan.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Exercise added' });
                });
            });
        });

//frontend routes ===================
    app.get('/workouts/*', function (req, res) {
        
        url = req.url;
        url = url.split("/");
        //Somehow get whatever workout clicked details on in here.
        res.render('workoutDetails.jade', {
            workout: {
                name: 'test1',
                completions: 2,
                lastCompleteDate: 'Today',
                exercises: [
                    { name: 'TestExer', description: 'gotta go fast', reps: 1, time: '10sek' },
                    { name: 'TestExer2', description: 'gotta go fast!!', reps: 2, time: '20sek' }
                ]
            }
        })
    });
    app.get('/workouts', function (req, res) {
        
        //Get all workouts from DB here.
        res.render('partial_workouts.jade', { workoutList: [{ name: 'test1', completions: 1, lastCompleteDate: 'Today', exercises: [{ name: 'test', description: 'teehee', reps: 2, time: '10 sek' }] }, { name: 'test2', completions: 2, lastCompleteDate: 'Today', exercises: [{ name: 'test2', description: 'teehee2', reps: 1, time: '2 sek' }] }, { name: 'test3', completions: 3, lastCompleteDate: 'Today', exercises: [{ name: 'test3', description: 'teehee3', reps: 3, time: '3 sek' }] }, { name: 'test4', completions: 4, lastCompleteDate: 'Today', exercises: [{ name: 'test4', description: 'teehee4', reps: 4, time: '4 sek' }] }] });
    });
    
    app.get('*', function (req, res) {
        res.render('partial_index.jade');
    });


};

};