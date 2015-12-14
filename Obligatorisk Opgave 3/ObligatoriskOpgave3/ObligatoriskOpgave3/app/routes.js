module.exports = function(app) {

//frontend routes ===================
    app.get('*', function(req, res) {
        res.sendfile('./app/views/index.html');
    });

};