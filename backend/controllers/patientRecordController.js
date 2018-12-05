var kafka = require('./../kafka/client');
module.exports.record = function (req, res) {
    var today = new Date();
    var data = {
        "purpose": req.body.purpose,
        "allergy": req.body.allergy,
        "date": req.body.date,
        "medicine1": req.body.medicine1,
        "dose1": req.body.dose1,
        "duration1": req.body.duration1,
        "medicine2": req.body.medicine2,
        "dose2": req.body.dose2,
        "duration2": req.body.duration2,
        "medicine3": req.body.medicine3,
        "dose3": req.body.dose3,
        "duration3": req.body.duration3,
        "medicine4": req.body.medicine4,
        "dose4": req.body.dose4,
        "duration4": req.body.duration4,
        "medicine5": req.body.medicine5,
        "dose5": req.body.dose5,
        "duration5": req.body.duration5,
        "surgery": req.body.surgery,
        "height": req.body.height,
        "weight": req.body.weight,
        "bloodPressure": req.body.bloodPressure,
        "sugarLevel": req.body.sugarLevel,
        "heartRate": req.body.heartRate,
        "bodyTemp": req.body.bodyTemp,
        "created_at": today,
    }
    kafka.make_request('patient_record'
        , data, function (err, result) {
            console.log("inside");
            if (typeof result == "string") {
                console.log("error ocurred", error);
                res.status(403).send(result);
            } else {
                res.writeHead(200, {
                    'Content-Type': 'application/json'
                })
                res.end(JSON.stringify(result));
            }
        })
}
