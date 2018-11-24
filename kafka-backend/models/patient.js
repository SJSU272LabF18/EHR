var mongoose = require('mongoose');

var Patient = mongoose.model('patient',{
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
   
},'patient');

module.exports = {Patient};