﻿
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UsersSchema = new Schema({
    _id: String,
    name: String,
    password: String
    
});

module.exports = mongoose.model('users', UsersSchema);