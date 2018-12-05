import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';

class ViewPurpose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patientEmail: "",
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
            bodyTemp: "",
            diagnosisResult: ""
        }

    }


    componentDidMount() {
        try {
            this.setState({
                patientEmail: this.props.location.state.prescription.patientEmail,
                purpose: this.props.location.state.prescription.purpose,
                allergy: this.props.location.state.prescription.allergy,
                date: this.props.location.state.prescription.date,
                medicine1: this.props.location.state.prescription.medicine1,
                dose1: this.props.location.state.prescription.dose1,
                duration1: this.props.location.state.prescription.duration1,
                medicine2: this.props.location.state.prescription.medicine2,
                dose2: this.props.location.state.prescription.dose2,
                duration2: this.props.location.state.prescription.duration2,
                medicine3: this.props.location.state.prescription.medicine3,
                dose3: this.props.location.state.prescription.dose3,
                duration3: this.props.location.state.prescription.duration3,
                medicine4: this.props.location.state.prescription.medicine4,
                dose4: this.props.location.state.prescription.dose4,
                duration4: this.props.location.state.prescription.duration4,
                medicine5: this.props.location.state.prescription.medicine5,
                dose5: this.props.location.state.prescription.dose5,
                duration5: this.props.location.state.prescription.duration5,
                surgery: this.props.location.state.prescription.surgery,
                height: this.props.location.state.prescription.height,
                weight: this.props.location.state.prescription.weight,
                bloodPressure: this.props.location.state.prescription.bloodPressure,
                sugarLevel: this.props.location.state.prescription.sugarLevel,
                heartRate: this.props.location.state.prescription.heartRate,
                bodyTemp: this.props.location.state.prescription.bodyTemp,
                diagnosisResult: this.props.location.state.prescription.diagnosisResult
            })
        } catch (e) {

        }
    }


    render() {
        console.log(this.state.medicine3);
        console.log(this.state.medicine5);
        if (this.state.onclick == true) {
            window.alert("Patient Record saved Successfully");
        }
        return (
            <div className="col-md-12">
                <div className="col-md-3"></div>
                <div className="col-md-6 form-box" style={{ backgroundColor: "#fff" }}>
                    <div className="col-md-12 form-heading-box">
                        <h2 className="form-heading">Patient Visit Record</h2>

                    </div>
                    <div className="col-md-12 content-box" >
                        <form role="form">
                            <div className="col-md-12">
                                <div class=" form-group col-md-12">
                                    <label>Purpose of Visit</label>
                                    <div class="input-group">
                                        <input type="radio" name="purpose" value="regular" defaultValue={this.state.purpose} checked={this.state.purpose === 'regular'}/> Regular checkup <br />
                                        <input type="radio" name="purpose" value="existing" defaultValue={this.state.purpose} checked={this.state.purpose === 'existing'}/> Visit regarding existing  <br />
                                        <input type="radio" name="purpose" value="new" defaultValue={this.state.purpose} checked={this.state.purpose === 'new'}/> Visit regarding new case
                                    </div>
                                </div>
                            </div>
                            <div class=" form-group col-md-12">
                                <div class=" form-group col-md-8">
                                    <label>Date of visit</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-calendar"></span></span>
                                        <input class="form-control" placeholder="Date of Visit" type="date" name="date" defaultValue={this.state.date} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div class=" form-group col-md-5">
                                    <label>Height</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input "><span class="fa fa-address-book"></span></span>
                                        <input class="form-control" placeholder="Height" type="text" name="height" defaultValue={this.state.height} />
                                    </div>
                                </div>
                                <div class=" form-group col-md-1"></div>
                                <div class=" form-group col-md-5">
                                    <label>Weight</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><i class="fa fa-address-book"></i></span>
                                        <input class="form-control" placeholder="Weight" type="text" name="weight" defaultValue={this.state.weight} />
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-12" >
                                <div class=" form-group col-md-5">
                                    <label>Blood Pressure</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><i class="fa fa-stethoscope"></i></span>
                                        <input class="form-control" placeholder="Blood Pressure" type="text" name="bloodPressure" defaultValue={this.state.bloodPressure} />

                                    </div>
                                </div>
                                <div class=" form-group col-md-1"></div>
                                <div class=" form-group col-md-5">
                                    <label>Sugar Level</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><i class="fa fa-stethoscope"></i></span>
                                        <input class="form-control" placeholder="Sugar Level" type="text" name="sugarLevel" defaultValue={this.state.sugarLevel} />

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12" >
                                <div class=" form-group col-md-5">
                                    <label>Heart Rate</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><i class="fa fa-heartbeat"></i></span>
                                        <input class="form-control" placeholder="Heart Rate" type="text" name="heartRate" defaultValue={this.state.heartRate} />

                                    </div>
                                </div>
                                <div class=" form-group col-md-1"></div>
                                <div class=" form-group col-md-5">
                                    <label>Body Temperature</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><i class="fa fa-thermometer-three-quarters"></i></span>
                                        <input class="form-control " placeholder="Body Temperature" type="text" name="bodyTemp" defaultValue={this.state.bodyTemp} />

                                    </div>
                                </div>

                            </div>
                            <div class=" form-group col-md-12">
                                <div class=" form-group col-md-12">
                                    <label>Allergy</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-th-list"></span></span>
                                        <input class="form-control " placeholder="Allergy" type="text" name="allergy" defaultValue={this.state.allergy} />

                                    </div>
                                </div>
                            </div>
                            <div class=" form-group col-md-12">
                                <div class=" form-group col-md-12">
                                    <label>Diagnosis Result</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-th-list"></span></span>
                                        <input class="form-control " placeholder="Diagnosis Result" type="text" name="allergy" defaultValue={this.state.diagnosisResult} />

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12" style={{ border: "thin" }}>
                                <label>Medication Priscribed</label>

                                <div class=" form-group col-md-12">
                                    <label>Medicine Name 1</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-list-alt"></span></span>
                                        <input class="form-control" placeholder="Medicine Name" type="text" name="medicine1" defaultValue={this.state.medicine1} />

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-6">
                                    <label>Dose</label>
                                    <div class="input-group radio-group-box" >
                                        <input type="checkbox" name="dose1" value="Moring" defaultValue={this.state.dose1} checked={this.state.dose1 === 'Moring'}/> <span style={{ marginRight: "70px" }}>Morning</span>
                                        <input type="checkbox" name="dose1" value="AfterNoon" defaultValue={this.state.dose1} checked={this.state.dose1 === 'AfterNoon'}/><span style={{ marginRight: "70px" }}>Afternoon </span>
                                        <input type="checkbox" name="dose1" value="Evening" defaultValue={this.state.dose1} checked={this.state.dose1 === 'Evening'}/>Evening
                                    </div>
                                </div>
                                <div class=" form-group col-md-6">
                                    <label>Duration</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-hourglass"></span></span>
                                        <input class="form-control" placeholder="Duration" type="text" name="duration1" defaultValue={this.state.duration1} />

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-12">
                                    <label>Medicine Name 2</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-list-alt"></span></span>
                                        <input class="form-control" placeholder="Medicine Name" type="text" name="medicine2" defaultValue={this.state.medicine2} />

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-6">
                                    <label>Dose</label>
                                    <div class="input-group radio-group-box" >
                                        <input type="checkbox" name="dose2" value="Moring" defaultValue={this.state.dose2} checked={this.state.dose2 === 'Moring'}/> <span style={{ marginRight: "70px" }}>Morning</span>
                                        <input type="checkbox" name="dose2" value="AfterNoon" defaultValue={this.state.dose2} checked={this.state.dose2 === 'AfterNoon'}/><span style={{ marginRight: "70px" }}>Afternoon </span>
                                        <input type="checkbox" name="dose2" value="Evening" defaultValue={this.state.dose2} checked={this.state.dose2 === 'Evening'}/>Evening
                                    </div>
                                </div>
                                <div class=" form-group col-md-6">
                                    <label>Duration</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-hourglass"></span></span>
                                        <input class="form-control" placeholder="Duration" type="text" name="duration2" defaultValue={this.state.duration2} />

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-12">
                                    <label>Medicine Name 3</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-list-alt"></span></span>
                                        <input class="form-control" placeholder="Medicine Name" type="text" name="medicine3" defaultValue={this.state.medicine3} />

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-6">
                                    <label>Dose</label>
                                    <div class="input-group radio-group-box" >
                                        <input type="checkbox" name="dose3" value="Moring" defaultValue={this.state.dose3} checked={this.state.dose3 === 'Moring'}/> <span style={{ marginRight: "70px" }}>Morning</span>
                                        <input type="checkbox" name="dose3" value="AfterNoon" defaultValue={this.state.dose3} checked={this.state.dose3 === 'AfterNoon'}/><span style={{ marginRight: "70px" }}>Afternoon </span>
                                        <input type="checkbox" name="dose3" value="Evening" defaultValue={this.state.dose3} checked={this.state.dose3 === 'Evening'}/>Evening
                                    </div>
                                </div>
                                <div class=" form-group col-md-6">
                                    <label>Duration</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-hourglass"></span></span>
                                        <input class="form-control" placeholder="Duration" type="text" name="duration3" defaultValue={this.state.duration3} />

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-12">
                                    <label>Medicine Name 4</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-list-alt"></span></span>
                                        <input class="form-control" placeholder="Medicine Name" type="text" name="medicine4" defaultValue={this.state.medicine4} />

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-6">
                                    <label>Dose</label>
                                    <div class="input-group radio-group-box" >
                                        <input type="checkbox" name="dose4" value="Moring" defaultValue={this.state.dose4} checked={this.state.dose4 === 'Moring'}/> <span style={{ marginRight: "70px" }}>Morning</span>
                                        <input type="checkbox" name="dose4" value="AfterNoon" defaultValue={this.state.dose4} checked={this.state.dose4 === 'AfterNoon'}/><span style={{ marginRight: "70px" }}>Afternoon </span>
                                        <input type="checkbox" name="dose4" value="Evening" defaultValue={this.state.dose4} checked={this.state.dose4 === 'Evening'}/>Evening
                                    </div>
                                </div>
                                <div class=" form-group col-md-6">
                                    <label>Duration</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-hourglass"></span></span>
                                        <input class="form-control" placeholder="Duration" type="text" name="duration4" defaultValue={this.state.duration4} />

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-12">
                                    <label>Medicine Name 5</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-list-alt"></span></span>
                                        <input class="form-control" placeholder="Medicine Name" type="text" name="medicine5" defaultValue={this.state.medicine5} />

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-6">
                                    <label>Dose</label>
                                    <div class="input-group radio-group-box" >
                                        <input type="checkbox" name="dose5" value="Moring" defaultValue={this.state.dose5} checked={this.state.dose5 === 'Moring'}/> <span style={{ marginRight: "70px" }}>Morning</span>
                                        <input type="checkbox" name="dose5" value="AfterNoon" defaultValue={this.state.dose5} checked={this.state.dose5 === 'AfterNoon'}/><span style={{ marginRight: "70px" }}>Afternoon </span>
                                        <input type="checkbox" name="dose5" value="Evening" defaultValue={this.state.dose5} checked={this.state.dose5 === 'Evening'}/>Evening
                                    </div>
                                </div>
                                <div class=" form-group col-md-6">
                                    <label>Duration</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-hourglass"></span></span>
                                        <input class="form-control" placeholder="Duration" type="text" name="duration5" defaultValue={this.state.duration5} />

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12" style={{ border: "thin" }}>
                                <div class=" form-group col-md-6">
                                    <label>Need for Surgery </label>
                                    <br />
                                    <div class="input-group radio-group-box" >
                                        <input type="radio" value="Yes" id="yes" checked={this.state.surgery === 'Yes'}/><span style={{ marginRight: "35px" }}>Yes </span>
                                        <input type="radio" value="No" id="no" checked={this.state.surgery === 'No'}/><span style={{ marginRight: "35px" }}>No </span>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default ViewPurpose;