var mongoose = require('mongoose');

var Payment = mongoose.model('payment',{
    
    email : {
        type : String
    },
    cardHolderName : {
        type : String 
    },
    cardNumber : {
        type : String 
    },
    expDate : {
        type : String 
    },
    cvv : {
        type : String
    },
      
},'payment');

module.exports = {Payment};