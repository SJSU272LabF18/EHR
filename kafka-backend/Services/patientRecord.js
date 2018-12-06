var { mongoose } = require('./../db/mongoose');
var { PatientRecord } = require('./../models/patientRecord');

function handle_request(data, callback) {
    console.log("In handle request:" + JSON.stringify(data));
   
    var record = new PatientRecord(data);
    
      record.save().then((user) => {
        console.log("Record: ", user);
        callback(null,user);
      }, (err) => {
        console.log(err);
        callback(null,[]);
      })
}

exports.handle_request = handle_request;