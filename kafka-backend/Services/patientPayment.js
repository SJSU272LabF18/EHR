var { mongoose } = require('./../db/mongoose');
var { Payment } = require('./../models/payment');

function handle_request(data, callback) {
    console.log("In handle request:" + JSON.stringify(data));
    var today = new Date();
    var paymentData = new Payment({
    email:data.email,
    cardHolderName: data.cardHolderName,
    cardNumber: data.cardNumber,
    expDate: data.expDate,
    cvv: data.cvv,
    created_at: today,
     });

     paymentData.save().then((data) => {
        console.log("Sign Up: ", data);
        callback(null,data);
      }, (err) => {
        console.log("Error in Saving Payment Details");
        callback(null,[]);
      })
}

exports.handle_request = handle_request;