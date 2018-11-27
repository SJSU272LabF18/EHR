var kafka = require('./../kafka/client');
module.exports.registration = function (req, res) {
    var today = new Date();
    var data = {
        "address":req.body.address,
        "city": req.body.city,
        "state": req.body.state,
        "zip":req.body.zip,
        "email": req.query.email,  
        "phone": req.body.phone,
        "diversity":req.body.diversity,
        "gender":req.body.gender,
        "dob":req.body.dob,
        "maritalStatus":req.body.maritalStatus,
        "bloodGroup":req.body.bloodGroup,
        "allergy":req.body.allergy,   
        "created_at": today,
    }
    kafka.make_request('patient_registration'
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



