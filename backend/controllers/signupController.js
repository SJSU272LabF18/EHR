var kafka = require('./../kafka/client');
var jwt = require('jsonwebtoken');
var config = require('./../config/setting');
exports.signup = function (req, res) {

  kafka.make_request('patient_signup',req.body, function(err,user){
      console.log('in result');
      console.log(user);
      if (err){
        console.log("Error in server");
        res.status(403).send("Error in server");
      }else {
        if (typeof user == "string") {
          res.status(403).send(user);
        }else {
          console.log("Sign Up: ", user);
          var user ={
            "email": user.email,
            "userType": user.isPatient,
            "name": user.fName + " " + user.lName
          }
          var token = jwt.sign(user, config.secret, {
            expiresIn: 10080 // in seconds
          });
          res.json({
            status: 200,
            message: "user registered sucessfully",
            token: 'JWT ' + token
          }),(err) => {
            console.log("Error in Signup");
            res.status(403).send("Error in signup");
          }
        }
      }
    });
}



