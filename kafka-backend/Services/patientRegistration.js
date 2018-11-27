var { mongoose } = require('./../db/mongoose');
var { Patient } = require('./../models/patient');

function handle_request(data, callback) {
    console.log("In handle request:" + JSON.stringify(data));
    Patient.findOneAndUpdate({
        email: data.email
    }, { $set: data }, function (error, result) {
        if (error) {
            callback(null, "Error in Profile Update");
        } else {
            callback(null, result);
        }
    }
    )
}

exports.handle_request = handle_request;