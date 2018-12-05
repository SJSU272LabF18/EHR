var mongoose = require('mongoose');

var PatientRecord = mongoose.model('patientrecord', {

    patientEmail: {
        type: String
    },
    purpose: {
        type: String
    },
    allergy: {
        type: String
    },
    date: {
        type: String
    },
    medicine1: {
        type: String
    },
    dose1: {
        type: String
    },
    duration1: {
        type: String
    },
    medicine2: {
        type: String
    },
    dose2: {
        type: String
    },
    duration2: {
        type: String
    },
    medicine3: {
        type: String
    },
    dose3: {
        type: String
    },
    duration3: {
        type: String
    },
    medicine4: {
        type: String
    },
    dose4: {
        type: String
    },
    duration4: {
        type: String
    },
    medicine5: {
        type: String
    },
    dose5: {
        type: String
    },
    duration5: {
        type: String
    },
    surgery: {
        type: String
    },
    height: {
        type: String
    },
    weight: {
        type: String
    },
    bloodPressure: {
        type: String
    },
    sugarLevel: {
        type: String
    },
    heartRate: {
        type: String
    },
    bodyTemp: {
        type: String
    },
    diagnosisResult: {
        type: String
    },
    created_at : {
        type : Date 
    }    
}, 'patientrecord');

module.exports = { PatientRecord };