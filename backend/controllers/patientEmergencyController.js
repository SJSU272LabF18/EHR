var kafka = require('./../kafka/client');
module.exports.emergency = function (req, res) {
    var today = new Date();
    var data = {
        "fName": req.body.fName,
        "lName": req.body.lName,
        "contact":req.body.contact,
        "relation":req.body.relation,
        "address":req.body.address,
        "userEmail" : req.query.userEmail,
        "created_at": today,
    }
    kafka.make_request('patient_emergency'
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

  module.exports.emergencyDetails = function (req, res) {
  
    kafka.make_request('patient_emergency_details'
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

  module.exports.editEmergency = function (req, res) {
    var today = new Date();
    var data = {
        "fName": req.body.fName,
        "lName": req.body.lName,
        "contact":req.body.contact,
        "relation":req.body.relation,
        "address":req.body.address,
        "userEmail" : req.query.userEmail,
        "created_at": today,
    }
    kafka.make_request('patient_emergency_update'
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





