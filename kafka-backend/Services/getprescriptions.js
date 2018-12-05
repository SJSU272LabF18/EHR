var { PatientRecord } = require('./../models/patientRecord');
var { mongoose } = require('./../db/mongoose');

function handle_request(msg, callback){
    console.log(msg)
    var pageNo = msg.pageNo
    var size = 10
    var query = {}
    query.skip = size * (pageNo - 1)
    query.limit = size
    var patientDetail = {
        'patientEmail': msg.patientEmail,
    }
        
    PatientRecord.count(patientDetail,function(err, totalCount){
        if(err){
            console.log(err);
            callback(err,[]);
        }else{
            var totalPages = Math.ceil(totalCount / size)

            PatientRecord.find(patientDetail,{},query,function(err, prescriptions){
                if (err) {
                    console.log(err);
                    callback(err,[]);
                } else {
                    var response = {
                        "prescriptions": prescriptions,
                        "totalPages": totalPages
                    }
                    console.log(prescriptions)
                    callback(null,response);
                }
            })
        }
    })    
}
exports.handle_request = handle_request;
