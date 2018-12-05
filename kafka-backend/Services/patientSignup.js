var {mongoose} = require('./../db/mongoose');
var { Patient } = require('./../models/patient');

var crypt = require('./../crypt');

function handle_request(data, callback){
    console.log("In handle request:"+ JSON.stringify(data));
    Patient.findOne({
            email: data.email
          },function (err, alreadyuser) {
            if(err){
                //throw err;
                callback(err,"Error");
            }else{
                if (alreadyuser) {
                    callback(null,"User Already Exists");
                          }
                else {
                console.log(data.password)
                crypt.createHash(data.password, function (hashPass) {
                  console.log(hashPass)
                  var today = new Date();
                  var newpatient = new Patient({
                    fName: data.fName,
                    lName: data.lName,
                    email: data.email,
                    password: hashPass,
                    created_at: today,
                    updated_at: today
                  });
                
                  newpatient.save().then((user) => {
                    console.log("Sign Up: ", user);
                    callback(null,user);
                  }, (err) => {
                    console.log(err);
                    callback(null,[]);
                  })
                })
              }
            }
        })
    }

exports.handle_request = handle_request;