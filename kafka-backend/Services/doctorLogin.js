var { mongoose } = require('./../db/mongoose');
var { Doctor } = require('./../models/doctor');
var crypt = require('./../crypt');

function handle_request(data, callback) {
    console.log("In handle request:" + JSON.stringify(data));
    Doctor.findOne({
        email: data.email
    }, function (err, result) {
        if (err) {
            //throw err;
            callback(err, "Error");
        } else {
            if (result) {
                console.log(result)
                crypt.compareHash(data.password, result.password, function (err, isMatch) {
                    console.log(isMatch);
                    if (isMatch && !err) {
                        callback(null, result);
                    }
                    else {
                        callback(null, "Incorrect Password");
                    }
                })
            } else {
                callback(null, "Email does not exist.");
            }
        }
    })
}

exports.handle_request = handle_request;