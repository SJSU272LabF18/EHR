import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';

class Purpose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purpose: "",
            allergy:"",
            date:"",
            medicine: "",
            dose: "",
            duration: "",
            surgery: "",
            year: ""
        }
        this.purposeHandler = this.purposeHandler.bind(this);
        this.allergyHandler = this.allergyHandler.bind(this);
        this.dateHandler = this.dateHandler.bind(this);
        this.medicineHandler = this.medicineHandler.bind(this);
        this.doseHandler = this.doseHandler.bind(this);
        this.durationHandler = this.durationHandler.bind(this);
        this.surgeryHandler = this.surgeryHandler.bind(this);
        this.yearHandler = this.yearHandler.bind(this);
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
            medicine: e.target.value,
           
        });
    }
    doseHandler = (e) => {
        this.setState({
            dose: e.target.value,
           
        });
    }
    durationHandler = (e) => {
            this.setState({
                duration: e.target.value,
               
            });
        }
    surgeryHandler = (e) => {
            this.setState({
                surgery: e.target.value,
                   
            });
        }
    yearHandler = (e) => {
            this.setState({
                year: e.target.value,
                   
            });
        }

    render() {
        return (
            <div className="container" >
                <div className="col-md-12 form-box">
                    <div className="col-md-12">
                        <h2 className="form-heading">Patient Visit Record</h2>
                        < hr />
                    </div>
                    <div className="col-md-12" style={{border:"thin"}}>
                        <form role="form">
                            <div className="col-md-12">
                                <div class=" form-group col-md-4">
                                    <label>Purpose of Visit</label>
                                    <div class="input-group">
                                        <input type="radio" name="purpose" value="regular" onChange={this.purposeHandler} defaultValue={this.state.purpose} /> Regular checkup <br />  
                                        <input type="radio" name="purpose" value="existing" onChange={this.purposeHandler} defaultValue={this.state.purpose} /> Visit regarding existing  <br />
                                        <input type="radio" name="purpose" value="new" onChange={this.purposeHandler} defaultValue={this.state.purpose} /> Visit regarding new case
                                    </div>
                                </div>
                                <div class=" form-group col-md-4">
                                    <label>Date of visit</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="glyphicon glyphicon-calendar"></span></span>
                                        <input class="form-control right-border-none" placeholder="Date of Visit" type="date" name="date" onChange={this.dateHandler} defaultValue={this.state.date} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                <div class=" form-group col-md-4">
                                    <label>Allergy</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="glyphicon glyphicon-th-list"></span></span>
                                        <input class="form-control right-border-none" placeholder="Allergy" type="text" name="allergy" onChange={this.allergyHandler} defaultValue={this.state.allergy} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>
                                <br /><br /><br /><br /><br /><br /><br />
                        <div className="col-md-12" style={{border:"thin"}}>
                                <label>Current Medication</label>
                                <br />
                                <div class=" form-group col-md-4">
                                    <label>Medicine Name</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="glyphicon glyphicon-list-alt"></span></span>
                                        <input class="form-control right-border-none" placeholder="Medicine Name" type="text" name="medicine" onChange={this.medicineHandler} defaultValue={this.state.medicine} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                <div class=" form-group col-md-4">
                                    <label>Dose</label>
                                    <div class="input-group">
                                        <input type="radio" name="dose" value="male" onChange={this.doseHandler} defaultValue={this.state.dose}/> 1 &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                                        <input type="radio" name="dose" value="female" onChange={this.doseHandler} defaultValue={this.state.dose}/> 2 &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                                        <input type="radio" name="dose" value="other" onChange={this.doseHandler} defaultValue={this.state.dose}/> 3
                                    </div>
                                </div>
                                <div class=" form-group col-md-4">
                                    <label>Duration</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="glyphicon glyphicon-hourglass"></span></span>
                                        <input class="form-control right-border-none" placeholder="Duration" type="text" name="duration" onChange={this.durationHandler} defaultValue={this.state.duration} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div> <br /><br /><br /><br /><br /><br /><br />
                                <div className="col-md-12" style={{border:"thin"}}>
                                <label>Past Medical History</label>
                                <br />
                                <div class=" form-group col-md-6">
                                    <label>Surgery</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="glyphicon glyphicon-user"></span></span>
                                        <input class="form-control right-border-none" placeholder="Surgery" type="text" name="surgery" onChange={this.surgeryHandler} defaultValue={this.state.surgery} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>

                            
                                <div class="col-md-6">
                                    <label>Year</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="glyphicon glyphicon-calendar"></span></span>
                                        <input class="form-control right-border-none" placeholder="Year" type="date" name="year" onChange={this.yearHandler} defaultValue={this.state.year} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
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
    

export default Purpose;