module.exports = function (app) {
    
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
        res.render('partial_workouts.jade', { workoutList: [{ name: 'test1', completions: 1, lastCompleteDate: 'Today', exercises: [{name: 'test', description: 'teehee', reps: 2, time: '10 sek'}] }, { name: 'test2', completions: 2, lastCompleteDate: 'Today', exercises: [{ name: 'test2', description: 'teehee2', reps: 1, time: '2 sek' }] }, { name: 'test3', completions: 3, lastCompleteDate: 'Today', exercises: [{ name: 'test3', description: 'teehee3', reps: 3, time: '3 sek' }] }, { name: 'test4', completions: 4, lastCompleteDate: 'Today', exercises: [{ name: 'test4', description: 'teehee4', reps: 4, time: '4 sek' }] }] });
    });

    app.get('*', function(req, res) {
        res.render('partial_index.jade');
    });


};