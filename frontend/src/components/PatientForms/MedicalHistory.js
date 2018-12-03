import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';

class MedicalHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            medicine: "",
            dose: "",
            medYear: "",
            about: "",
            results: "",
            surYear: ""
        }
        this.medicineHandler = this.medicineHandler.bind(this);
        this.doseHandler = this.doseHandler.bind(this);
        this.medYearHandler = this.medYearHandler.bind(this);
        this.aboutHandler = this.aboutHandler.bind(this);
        this.resultsHandler = this.resultsHandler.bind(this);
        this.surYearHandler = this.surYearHandler.bind(this);
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
    medYearHandler = (e) => {
        this.setState({
            medYear: e.target.value,
           
        });
    }
    aboutHandler = (e) => {
        this.setState({
            about: e.target.value,
           
        });
    }
    resultsHandler = (e) => {
            this.setState({
                results: e.target.value,
               
            });
        }
    surYearHandler = (e) => {
            this.setState({
                surYear: e.target.value,
                   
            });
        }
    render() {
        return (
            <div className="container" >
                <div className="col-md-12 form-box">
                    <div className="col-md-12">
                        <h2 className="form-heading">Medical History</h2>
                        < hr />
                    </div>
                    <div className="col-md-12">
                        <form role="form">
                            <div className="col-md-12">
                            <label>Current/Past Medication</label>
                           
                            <div className="col-md-12" >
                          
                            </div>
                                <div class=" form-group col-md-4">
                                    <label>Medicine</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="fa fa-address-book"></span></span>
                                        <input class="form-control right-border-none" placeholder="Medicine" type="text" name="medicine" onChange={this.medicineHandler} defaultValue={this.state.medicine} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                <div class=" form-group col-md-4">
                                    <label>Dose</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="fa fa-envelope"></span></span>
                                        <input class="form-control right-border-none" placeholder="Dose" type="text" name="dose" onChange={this.doseHandler} defaultValue={this.state.dose} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                <div class=" form-group col-md-4">
                                    <label>Year</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="glyphicon glyphicon-user"></span></span>
                                        <input class="form-control right-border-none" placeholder="Year" type="text" name="medYear" onChange={this.medYearHandler} defaultValue={this.state.medYear} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="col-md-12" >
                            <label>Surgery</label>
                            <div classname="col-md-12"></div>
                                <div class=" form-group col-md-4">
                                    <label>About</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="fa fa-address-book"></span></span>
                                        <input class="form-control right-border-none" placeholder="About" type="text" name="about" onChange={this.aboutHandler} defaultValue={this.state.about} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                <div class=" form-group col-md-4">
                                    <label>Results</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="fa fa-envelope"></span></span>
                                        <input class="form-control right-border-none" placeholder="Results" type="text" name="results" onChange={this.resultsHandler} defaultValue={this.state.results} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                <div class=" form-group col-md-4">
                                    <label>Year</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="glyphicon glyphicon-user"></span></span>
                                        <input class="form-control right-border-none" placeholder="Year" type="text" name="surYear" onChange={this.surYearHandler} defaultValue={this.state.surYear} />
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
    

export default MedicalHistory;