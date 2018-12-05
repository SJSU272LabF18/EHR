var kafka = require('./../kafka/client');
module.exports.registration = function (req, res) {
    var today = new Date();
    var data = {
        "address":req.body.address,
        "city": req.body.city,
        "state": req.body.state,
        "zipcode":req.body.zipcode,
        "email": req.query.email,  
        "phone": req.body.phone,
        "gender":req.body.gender,
        "bloodGroup":req.body.bloodGroup,
        "created_at": today,
    }
    kafka.make_request('patient_registration'
    , data, function (err, result) {
      console.log("inside");
      if (typeof result == "string") {
        console.log("error ocurred", error);
        res.status(403).send(result);
      } else {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(result));
      }
    })
  }

  module.exports.registrationDetails = function (req, res) {
  
    kafka.make_request('patient_registration_details'
    , req.query, function (err, result) {
      console.log("inside");
      if (typeof result == "string") {
        console.log("error ocurred", error);
        res.status(403).send(result);
      } else {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(result));
      }
    })
  }

  module.exports.editRegistration = function (req, res) {
    var today = new Date();
    var data = {
        "fName" : req.body.fName,
        "lName" : req.body.lName,
        "email" : req.query.email,
        "address":req.body.address,
        "city": req.body.city,
        "state": req.body.state,
        "zip":req.body.zip,
        "phone": req.body.phone,
        "gender":req.body.gender,
        "bloodGroup":req.body.bloodGroup,   
        "created_at": today,
    }
    kafka.make_request('patient_registration_update'
    , data, function (err, result) {
      console.log("inside");
      if (typeof result == "string") {
        console.log("error ocurred", error);
        res.status(403).send(result);
      } else {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(result));
      }
    })
  }

