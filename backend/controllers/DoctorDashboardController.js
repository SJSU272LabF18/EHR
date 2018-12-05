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