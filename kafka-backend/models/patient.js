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
   
    gender : {
        type : String
    },
  
    bloodGroup : {
        type : String
    },
  
   
},'patient');

module.exports = {Patient};