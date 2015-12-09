//grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define the varer model
//export allows us to access to variable from other files when called.
var VarerSchema = new Schema({
    name: String,
    gppg: String
});

module.exports = mongoose.model('varer', VarerSchema);