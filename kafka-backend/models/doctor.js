var mongoose = require('mongoose');

var Doctor = mongoose.model('doctor',{
    fName : {
        type : String 
    },
    lName : {
        type : String 
    },
    email : {
        type : String
    },
    password : {
        type : String 
    },
    isPatient :{
        type : String 
    }
},'doctor');

    module.exports = {Doctor};