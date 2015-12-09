
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VarerSchema = new Schema({
    name: String,
    gppg: String
});

module.exports = mongoose.model('varer', VarerSchema);