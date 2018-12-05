var kafka = require('./../kafka/client');

module.exports.getpatients = function (req, res) {
    console.log(req.query)
    var request = {
        'pageNo': req.query.pageNo,
        'patientName': req.query.patientName
    }
    kafka.make_request('get_patients', request, function (err, properties) {       
        if (err) {
            res.status(400);
            res.send(err);
        }else{
            console.log(properties)
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(properties));
        }

    });
}

module.exports.getprescriptions = function (req, res) {
    console.log(req.query)
    var request = {
        'pageNo': req.query.pageNo,
        'patientEmail': req.query.patientEmail
    }
    kafka.make_request('get_prescriptions', request, function (err, properties) {       
        if (err) {
            res.status(400);
            res.send(err);
        }else{
            console.log(properties)
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(properties));
        }

    });
}

module.exports.getpatientstatistics = function (req, res){
    var data = {
        "email": req.query.email,
      }
      kafka.make_request('get_patientstatistics', data, function (err, jobs) {
        if (err) {
          res.status(400);
          res.send(err);
        } else {
          console.log(jobs)
          res.writeHead(200, {
            'Content-Type': 'application/json'
          });
          res.end(JSON.stringify(jobs));
        }
    
      });
  }