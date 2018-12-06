var crypt = require('./../crypt');
var { mongoose } = require('.././db/mongoose');
var { PatientRecord } = require('.././models/patientRecord');

function handle_request(msg, callback) {
    console.log("In handle request:" + JSON.stringify(msg));
    
        PatientRecord.aggregate([  
            { $match: {'patientEmail': {$regex: new RegExp("a" , "i")}} },
            { $group: {_id: '$purpose', total: { $sum: 1 }} }
        ], function (err, data) {
            if (err) {
                callback(msg, "Some error with the query");
                console.log("Some error with the query");
            } else {
                if (data) {
                    callback(null, data)
                } else {
                    callback(null, [])
                }
            }
        });
    
    
}
exports.handle_request = handle_request;