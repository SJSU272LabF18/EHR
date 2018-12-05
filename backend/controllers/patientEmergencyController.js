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



