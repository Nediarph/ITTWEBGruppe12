var Person = require('/models/users');

module.exports = function (app) {
    
//Backend routes ====================
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

    


//frontend routes ===================
    app.get('*', function(req, res) {
        res.sendfile('./app/views/index.html');
    });

};