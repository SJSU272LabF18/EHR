var { mongoose } = require('./../db/mongoose');
var { Emergency } = require('./../models/emergency');

function handle_request(data, callback) {
    console.log("In handle request:" + JSON.stringify(data));
   
    var emergency = new Emergency(data);
    
      emergency.save().then((user) => {
        console.log("Emergency: ", user);
        callback(null,user);
      }, (err) => {
        console.log(err);
        callback(null,[]);
      })
}

exports.handle_request = handle_request;