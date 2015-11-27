//grab the mongoose module
var mongoose = require('mongoose');

//define the varer model
//export allows us to access to variable from other files when called.
module.exports = mongoose.model('varer', {
	name : {type : String, default: ''}
})