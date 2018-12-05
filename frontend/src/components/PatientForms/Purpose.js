import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';

class Purpose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purpose: "",
            allergy: "",
            date: "",
            medicine1: "",
            dose1: "",
            duration1: "",
            medicine2: "",
            dose2: "",
            duration2: "",
            medicine3: "",
            dose3: "",
            duration3: "",
            medicine4: "",
            dose4: "",
            duration4: "",
            medicine5: "",
            dose5: "",
            duration5: "",
            surgery: "",
            height: "",
            weight: "",
            bloodPressure: "",
            sugarLevel: "",
            heartRate: "",
            bodyTemp: ""
        }
        this.purposeHandler = this.purposeHandler.bind(this);
        this.allergyHandler = this.allergyHandler.bind(this);
        this.dateHandler = this.dateHandler.bind(this);
        this.medicineHandler = this.medicineHandler.bind(this);
        this.doseHandler = this.doseHandler.bind(this);
        this.durationHandler = this.durationHandler.bind(this);
        this.surgeryHandler = this.surgeryHandler.bind(this);

        this.heightHandler = this.heightHandler.bind(this);
        this.weightHandler = this.weightHandler.bind(this);
        this.bloodPressureHandler = this.bloodPressureHandler.bind(this);
        this.sugarLevelHandler = this.sugarLevelHandler.bind(this);
        this.heartRateHandler = this.heartRateHandler.bind(this);
        this.bodyTempHandler = this.bodyTempHandler.bind(this);
        this.submitPaitentRecord = this.submitPaitentRecord.bind(this);
    }

    purposeHandler = (e) => {
        this.setState({
            purpose: e.target.value,

        });
    }
    allergyHandler = (e) => {
        this.setState({
            allergy: e.target.value,

        });
    }
    dateHandler = (e) => {
        this.setState({
            date: e.target.value,

        });
    }
    medicineHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        });
    }
    doseHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        });
    }
    durationHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        });
    }
    surgeryHandler = (e) => {
        this.setState({
            surgery: e.target.value,

        });
    }

    heightHandler = (e) => {
        this.setState({
            height: e.target.value,

        });
    }
    weightHandler = (e) => {
        this.setState({
            weight: e.target.value,

        });
    }
    bloodPressureHandler = (e) => {
        this.setState({
            bloodPressure: e.target.value,

        });
    }
    sugarLevelHandler = (e) => {
        this.setState({
            sugarLevel: e.target.value,

        });
    }
    heartRateHandler = (e) => {
        this.setState({
            heartRate: e.target.value,

        });
    }
    bodyTempHandler = (e) => {
        this.setState({
            bodyTemp: e.target.value,

        });
    }

    submitPaitentRecord = (e) => {

        const data = {
        
            purpose: this.state.purpose,
            allergy: this.state.allergy,
            date: this.state.date,
            medicine1: this.state.medicine1,
            dose1: this.state.dose1,
            duration1: this.state.duration1,
            medicine2: this.state.medicine2,
            dose2: this.state.dose2,
            duration2: this.state.duration2,
            medicine3: this.state.medicine3,
            dose3: this.state.dose3,
            duration3: this.state.duration3,
            medicine4: this.state.medicine4,
            dose4: this.state.dose4,
            duration4: this.state.duration4,
            medicine5: this.state.medicine5,
            dose5: this.state.dose5,
            duration5: this.state.duration5,
            surgery: this.state.surgery,
            height: this.state.height,
            weight: this.state.weight,
            bloodPressure: this.state.bloodPressure,
            sugarLevel: this.state.sugarLevel,
            heartRate: this.state.heartRate,
            bodyTemp: this.state.bodyTemp

        }
        console.log(data)
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:3001/patientrecord', data,
            {
                params: {
                    userEmail: localStorage.getItem('email')
                }
            })
            .then(response => {
                console.log("Status Code : ", response.status);
                if (response.status === 200) {
                    this.setState({
                        onclick: true,
                        resultmsg: "Patient Record saved Successfully"
                    })

                } else {
                    this.setState({
                        onclick: false
                    })
                }
            })
            .catch(error => {
                this.setState({
                    onclick: false,
                    errormsg: error.response.data
                })
            });
    }


    render() {
        console.log(this.state.medicine3);
        console.log(this.state.medicine5);
        if(this.state.onclick == true){
            window.alert("Patient Record saved Successfully");
        }
        return (
            <div className="col-md-12" >
                <div className="col-md-3"></div>
                <div className="col-md-6 form-box">
                    <div className="col-md-12 form-heading-box">
                        <h2 className="form-heading">Patient Visit Record</h2>

                    </div>
                    <div className="col-md-12 content-box" >
                        <form role="form" onSubmit = {()=>this.submitPaitentRecord()}>
                            <div className="col-md-12">
                                <div class=" form-group col-md-12">
                                    <label>Purpose of Visit</label>
                                    <div class="input-group">
                                        <input type="radio" name="purpose" value="regular" onChange={this.purposeHandler} defaultValue={this.state.purpose} /> Regular checkup <br />
                                        <input type="radio" name="purpose" value="existing" onChange={this.purposeHandler} defaultValue={this.state.purpose} /> Visit regarding existing  <br />
                                        <input type="radio" name="purpose" value="new" onChange={this.purposeHandler} defaultValue={this.state.purpose} /> Visit regarding new case
                                    </div>
                                </div>
                            </div>
                            <div class=" form-group col-md-12">
                                <div class=" form-group col-md-8">
                                    <label>Date of visit</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-calendar"></span></span>
                                        <input class="form-control right-border-none" placeholder="Date of Visit" type="date" name="date" onChange={this.dateHandler} defaultValue={this.state.date} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div class=" form-group col-md-5">
                                    <label>Height</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input "><span class="fa fa-address-book"></span></span>
                                        <input class="form-control right-border-none" placeholder="Height" type="text" name="height" onChange={this.heightHandler} defaultValue={this.state.height} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                <div class=" form-group col-md-1"></div>
                                <div class=" form-group col-md-5">
                                    <label>Weight</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><i class="fa fa-weight"></i></span>
                                        <input class="form-control right-border-none" placeholder="Weight" type="text" name="weight" onChange={this.weightHandler} defaultValue={this.state.weight} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-12" >
                                <div class=" form-group col-md-5">
                                    <label>Blood Pressure</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><i class="fa fa-stethoscope"></i></span>
                                        <input class="form-control right-border-none" placeholder="Blood Pressure" type="text" name="bloodPressure" onChange={this.bloodPressureHandler} defaultValue={this.state.bloodPressure} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                <div class=" form-group col-md-1"></div>
                                <div class=" form-group col-md-5">
                                    <label>Sugar Level</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><i class="fa fa-stethoscope"></i></span>
                                        <input class="form-control right-border-none" placeholder="Sugar Level" type="text" name="sugarLevel" onChange={this.sugarLevelHandler} defaultValue={this.state.sugarLevel} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12" >
                                <div class=" form-group col-md-5">
                                    <label>Heart Rate</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><i class="fa fa-heartbeat"></i></span>
                                        <input class="form-control right-border-none" placeholder="Heart Rate" type="text" name="heartRate" onChange={this.heartRateHandler} defaultValue={this.state.heartRate} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                <div class=" form-group col-md-1"></div>
                                <div class=" form-group col-md-5">
                                    <label>Body Temperature</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><i class="fa fa-thermometer-three-quarters"></i></span>
                                        <input class="form-control right-border-none" placeholder="Body Temperature" type="text" name="bodyTemp" onChange={this.bodyTempHandler} defaultValue={this.state.bodyTemp} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>

                            </div>
                            <div class=" form-group col-md-12">
                                <div class=" form-group col-md-12">
                                    <label>Allergy</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-th-list"></span></span>
                                        <input class="form-control right-border-none" placeholder="Allergy" type="text" name="allergy" onChange={this.allergyHandler} defaultValue={this.state.allergy} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12" style={{ border: "thin" }}>
                                <label>Medication Priscribed</label>

                                <div class=" form-group col-md-12">
                                    <label>Medicine Name 1</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-list-alt"></span></span>
                                        <input class="form-control right-border-none" placeholder="Medicine Name" type="text" name="medicine1" onChange={this.medicineHandler} defaultValue={this.state.medicine} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-6">
                                    <label>Dose</label>
                                    <div class="input-group radio-group-box" >
                                        <input type="checkbox" name="dose1" value="Moring" onChange={this.doseHandler} defaultValue={this.state.dose} /> <span style={{ marginRight: "70px" }}>Morning</span>
                                        <input type="checkbox" name="dose1" value="AfterNoon" onChange={this.doseHandler} defaultValue={this.state.dose} /><span style={{ marginRight: "70px" }}>Afternoon </span>
                                        <input type="checkbox" name="dose1" value="Evening" onChange={this.doseHandler} defaultValue={this.state.dose} />Evening
                                    </div>
                                </div>
                                <div class=" form-group col-md-6">
                                    <label>Duration</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-hourglass"></span></span>
                                        <input class="form-control right-border-none" placeholder="Duration" type="text" name="duration1" onChange={this.durationHandler} defaultValue={this.state.duration} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-12">
                                    <label>Medicine Name 2</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-list-alt"></span></span>
                                        <input class="form-control right-border-none" placeholder="Medicine Name" type="text" name="medicine2" onChange={this.medicineHandler} defaultValue={this.state.medicine} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-6">
                                    <label>Dose</label>
                                    <div class="input-group radio-group-box" >
                                        <input type="checkbox" name="dose2" value="Moring" onChange={this.doseHandler} defaultValue={this.state.dose} /> <span style={{ marginRight: "70px" }}>Morning</span>
                                        <input type="checkbox" name="dose2" value="AfterNoon" onChange={this.doseHandler} defaultValue={this.state.dose} /><span style={{ marginRight: "70px" }}>Afternoon </span>
                                        <input type="checkbox" name="dose2" value="Evening" onChange={this.doseHandler} defaultValue={this.state.dose} />Evening
                                    </div>
                                </div>
                                <div class=" form-group col-md-6">
                                    <label>Duration</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-hourglass"></span></span>
                                        <input class="form-control right-border-none" placeholder="Duration" type="text" name="duration2" onChange={this.durationHandler} defaultValue={this.state.duration} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-12">
                                    <label>Medicine Name 3</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-list-alt"></span></span>
                                        <input class="form-control right-border-none" placeholder="Medicine Name" type="text" name="medicine3" onChange={this.medicineHandler} defaultValue={this.state.medicine} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-6">
                                    <label>Dose</label>
                                    <div class="input-group radio-group-box" >
                                        <input type="checkbox" name="dose3" value="Moring" onChange={this.doseHandler} defaultValue={this.state.dose} /> <span style={{ marginRight: "70px" }}>Morning</span>
                                        <input type="checkbox" name="dose3" value="AfterNoon" onChange={this.doseHandler} defaultValue={this.state.dose} /><span style={{ marginRight: "70px" }}>Afternoon </span>
                                        <input type="checkbox" name="dose3" value="Evening" onChange={this.doseHandler} defaultValue={this.state.dose} />Evening
                                    </div>
                                </div>
                                <div class=" form-group col-md-6">
                                    <label>Duration</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-hourglass"></span></span>
                                        <input class="form-control right-border-none" placeholder="Duration" type="text" name="duration3" onChange={this.durationHandler} defaultValue={this.state.duration} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-12">
                                    <label>Medicine Name 4</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-list-alt"></span></span>
                                        <input class="form-control right-border-none" placeholder="Medicine Name" type="text" name="medicine4" onChange={this.medicineHandler} defaultValue={this.state.medicine} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-6">
                                    <label>Dose</label>
                                    <div class="input-group radio-group-box" >
                                        <input type="checkbox" name="dose4" value="Moring" onChange={this.doseHandler} defaultValue={this.state.dose} /> <span style={{ marginRight: "70px" }}>Morning</span>
                                        <input type="checkbox" name="dose4" value="AfterNoon" onChange={this.doseHandler} defaultValue={this.state.dose} /><span style={{ marginRight: "70px" }}>Afternoon </span>
                                        <input type="checkbox" name="dose4" value="Evening" onChange={this.doseHandler} defaultValue={this.state.dose} />Evening
                                    </div>
                                </div>
                                <div class=" form-group col-md-6">
                                    <label>Duration</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-hourglass"></span></span>
                                        <input class="form-control right-border-none" placeholder="Duration" type="text" name="duration4" onChange={this.durationHandler} defaultValue={this.state.duration} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-12">
                                    <label>Medicine Name 5</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-list-alt"></span></span>
                                        <input class="form-control right-border-none" placeholder="Medicine Name" type="text" name="medicine5" onChange={this.medicineHandler} defaultValue={this.state.medicine} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-6">
                                    <label>Dose</label>
                                    <div class="input-group radio-group-box" >
                                        <input type="checkbox" name="dose5" value="Moring" onChange={this.doseHandler} defaultValue={this.state.dose} /> <span style={{ marginRight: "70px" }}>Morning</span>
                                        <input type="checkbox" name="dose5" value="AfterNoon" onChange={this.doseHandler} defaultValue={this.state.dose} /><span style={{ marginRight: "70px" }}>Afternoon </span>
                                        <input type="checkbox" name="dose5" value="Evening" onChange={this.doseHandler} defaultValue={this.state.dose} />Evening
                                    </div>
                                </div>
                                <div class=" form-group col-md-6">
                                    <label>Duration</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-hourglass"></span></span>
                                        <input class="form-control right-border-none" placeholder="Duration" type="text" name="duration5" onChange={this.durationHandler} defaultValue={this.state.duration} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <label>Need for Surgery </label>
                                <br />
                                <fieldset class="col-md-3 radio-group-box">
                                    <input type="radio" value="Yes" id="yes" onChange={this.surgeryHandler} /><span style={{ marginRight: "35px" }}>Yes </span>
                                    <input type="radio" value="No" id="no" onChange={this.surgeryHandler} /><span style={{ marginRight: "35px" }}>No </span>
                                </fieldset>

                            </div>
                            <div className="col-md-12">
                                <div className="col-md-4"></div>
                                <div className="col-md-3">
                                    <button style={{ marginTop: "20px", marginLeft: "20px" }} type="submit" className="btn btn-success btn-lg">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Purpose;