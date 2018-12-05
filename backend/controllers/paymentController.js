var kafka = require('./../kafka/client');
module.exports.payment = function (req, res) {
    var today = new Date();
    var data = {
        "email":req.query.patient_email,
        "cardHolderName":req.body.cardHolderName,
        "cardNumber": req.body.cardNumber,
        "expDate": req.body.expDate,
        "cvv":req.body.cvv,
    }
    kafka.make_request('patient_payment'
    , data, function (err, result) {
      console.log("inside");
      if (typeof result == "string") {
        console.log("error ocurred", error);
        res.status(408).send(result);
      } else {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(result));
      }
    })
  }



