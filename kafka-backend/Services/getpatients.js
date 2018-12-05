var { Patient } = require('./../models/patient');
var { mongoose } = require('./../db/mongoose');

function handle_request(msg, callback){
    console.log(msg)
    var pageNo = msg.pageNo
    var size = 10
    var query = {}
    query.skip = size * (pageNo - 1)
    query.limit = size
    var patientDetail = {
    }
    if(msg.patientName){
        patientDetail.fName = {$regex: new RegExp(msg.patientName , "i")}
    }
    
    Patient.count(patientDetail,function(err, totalCount){
        if(err){
            console.log(err);
            callback(err,[]);
        }else{
            var totalPages = Math.ceil(totalCount / size)

            Patient.find(patientDetail,{},query,function(err, patients){
                if (err) {
                    console.log(err);
                    callback(err,[]);
                } else {
                    var response = {
                        "patients": patients,
                        "totalPages": totalPages
                    }
                    console.log(patients)
                    callback(null,response);
                }
            })
        }
    })    
}
exports.handle_request = handle_request;
