
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WorkOutPlanSchema = new Schema({
    _id: String,
    name: String,
    userEmail: String,
    completeCount: String,
    lastCompleteDate: String,
    exercises: [
        {
            name: String,
            describtion: String,
            exerciseset: String,
            repititions: String
        }
    ]
    
});

module.exports = mongoose.model('workOutPlan', WorkOutPlanSchema);