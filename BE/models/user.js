const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const User = new Schema({
    "email": {
        "type": "String",
        "required": true,
    },
    "fullName": {
        "type": "String",
        "required": true,
    },
    "_id": { // this is username
        "type": "String",
        "required": true,
    }, 
    "password": { // TODO: hash password
         "type": "String",
        "required": true,
    }
    });

module.exports = mongoose.model('User', User);


 