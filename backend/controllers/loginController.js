
var jwt = require('jsonwebtoken');
// var config = require('./../config/setting');
var kafka = require('./../kafka/client');
exports.login = function (req, res) {
  kafka.make_request('patient_login',req.body, function(err,result){
    console.log('in result');
    console.log(result);
    if (err) {
      res.status(402).send("Error in server");
    }
    else {
        if(typeof result == "string"){
          res.status(403).send(result);
        }else{
        //   var user ={
        //     "email": result.email,
        //     "userType": result.userType,
        //     "name": result.name
        //   }
        //   var token = jwt.sign(user, config.secret, {
        //     expiresIn: 10080 // in seconds
        //   });
         
        //   res.status(200).json({success: true, token: 'JWT ' + token});
          res.status(200).json({success: true});
        }       
      }
    
  })
}