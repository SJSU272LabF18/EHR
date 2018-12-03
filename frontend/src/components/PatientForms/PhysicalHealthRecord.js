import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';

class PhysicalHealthRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "",
            weight: "",
            bloodPressure: "",
            sugarLevel: "",
            heartRate: "",
            bodyTemp: ""
        }
        this.heightHandler = this.heightHandler.bind(this);
        this.weightHandler = this.weightHandler.bind(this);
        this.bloodPressureHandler = this.bloodPressureHandler.bind(this);
        this.sugarLevelHandler = this.sugarLevelHandler.bind(this);
        this.heartRateHandler = this.heartRateHandler.bind(this);
        this.bodyTempHandler = this.bodyTempHandler.bind(this);
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
    render() {
        return (
            <div className="container" >
                <div className="col-md-12 form-box">
                    <div className="col-md-12">
                        <h2 className="form-heading">Physical Health Record</h2>
                        < hr />
                    </div>
                    <div className="col-md-12">
                        <form role="form">
                            <div className="col-md-12">
                                <div class=" form-group col-md-5">
                                    <label>Height</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="fa fa-address-book"></span></span>
                                        <input class="form-control right-border-none" placeholder="Height" type="text" name="height" onChange={this.heightHandler} defaultValue={this.state.height} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                <div class=" form-group col-md-5">
                                    <label>Weight</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><i class="fas fa-weight"></i></span>
                                        <input class="form-control right-border-none" placeholder="Weight" type="text" name="weight" onChange={this.weightHandler} defaultValue={this.state.weight} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                                                
                            </div>
                            
                            <div className="col-md-12" >
                                <div class=" form-group col-md-5">
                                    <label>Blood Pressure</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><i class="fa fa-stethoscope"></i></span>
                                        <input class="form-control right-border-none" placeholder="Blood Pressure" type="text" name="bloodPressure" onChange={this.bloodPressureHandler} defaultValue={this.state.bloodPressure} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                <div class=" form-group col-md-5">
                                    <label>Sugar Level</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><i class="fa fa-stethoscope"></i></span>
                                        <input class="form-control right-border-none" placeholder="Sugar Level" type="text" name="sugarLevel" onChange={this.sugarLevelHandler} defaultValue={this.state.sugarLevel} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12" >
                                <div class=" form-group col-md-5">
                                    <label>Heart Rate</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><i class="fa fa-heartbeat"></i></span>
                                        <input class="form-control right-border-none" placeholder="Heart Rate" type="text" name="heartRate" onChange={this.heartRateHandler} defaultValue={this.state.heartRate} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                <div class=" form-group col-md-5">
                                    <label>Body Temperature</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><i class="fa fa-thermometer-three-quarters"></i></span>
                                        <input class="form-control right-border-none" placeholder="Body Temperature" type="text" name="bodyTemp" onChange={this.bodyTempHandler} defaultValue={this.state.bodyTemp} />
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
    

export default PhysicalHealthRecord;