
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PersonSchema = new Schema({
    name: String,
    //_id: String,
    email: String
    
});

module.exports = mongoose.model('person', PersonSchema);