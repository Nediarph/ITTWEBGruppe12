
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MealSchema = new Schema({
    dato: String,
    varer: String,
    gram: String,
    person_id: String
 
});

module.exports = mongoose.model('person', MealSchema);