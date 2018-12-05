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
    isPatient :{
        type : String 
    },
    address : {
        type : String 
    },
    city : {
        type : String 
    },
    state : {
        type : String
    },
    zipcode : {
        type : String 
    },
    phone : {
        type : String 
    },
    race : {
        type : String 
    },
    gender : {
        type : String
    },
    dob : {
        type : String 
    },
    maritalStatus : {
        type : String 
    },
    bloodGroup : {
        type : String
    },
    allergy : {
        type : String 
    },

   
},'patient');

module.exports = {Patient};