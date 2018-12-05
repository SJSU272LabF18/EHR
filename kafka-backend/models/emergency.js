var mongoose = require('mongoose');

var Emergency = mongoose.model('emergency',{
    
    fName : {
        type : String
    },
    lName : {
        type : String 
    },
    contact : {
        type : String 
    },
    relation : {
        type : String
    },
    address : {
        type : String
    },
    userEmail : {
        type : String
    },
    created_at : {
        type : Date 
    }      
},'emergency');

module.exports = {Emergency};