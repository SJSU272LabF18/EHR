import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName:"",
            lName:"",
            address:"",
            city:"",
            state:"",
            zip:"",
            phone:"",
            diversity:"",
            gender:"",
            dob:"",
            mStatus:"",
            bGroup:"",
            allergy:""
        }
        this.fnameHandler = this.fnameHandler.bind(this);
        this.lnameHandler = this.lnameHandler.bind(this);
        this.addressHandler = this.addressHandler.bind(this);
        this.cityHandler = this.cityHandler.bind(this);
        this.stateHandler = this.stateHandler.bind(this);
        this.zipHandler = this.zipHandler.bind(this);
        this.phoneHandler = this.phoneHandler.bind(this);
        this.raceHandler = this.raceHandler.bind(this);
        this.genderHandler = this.genderHandler.bind(this);
        this.dobHandler = this.dobHandler.bind(this);
        this.maritalStatusHandler = this.maritalStatusHandler.bind(this);
        this.bloodGroupHandler = this.bloodGroupHandler.bind(this);
        this.allergyHandler = this.allergyHandler.bind(this);
    }
    fnameHandler = (e) => {
        this.setState({
            fName:e.target.value
          });
    }
    lnameHandler = (e) => {
        this.setState({
            lName:e.target.value
          });
    }
    addressHandler = (e) => {
        this.setState({
            address:e.target.value
          });
    }
    cityHandler = (e) => {
        this.setState({
            city:e.target.value
          });
    }
    stateHandler = (e) => {
        this.setState({
            state:e.target.value
          });
    }
    zipHandler = (e) => {
        this.setState({
            zip:e.target.value
          });
    }
    phoneHandler = (e) => {
        this.setState({
            phone:e.target.value
          });
    }
    raceHandler = (e) => {
        this.setState({
            race:e.target.value
          });
    }
    genderHandler = (e) => {
        this.setState({
            gender:e.target.value
          });
    }
    dobHandler = (e) => {
        this.setState({
            dob:e.target.value
          });
    }
    maritalStatusHandler = (e) => {
        this.setState({
            maritalStatus:e.target.value
          });
    }
    bloodGroupHandler = (e) => {
        this.setState({
            bloodGroup:e.target.value
          });
    }
    allergyHandler = (e) => {
        this.setState({
            allergy:e.target.value
          });
    }
    render(){
        return(
            <div className="container" >
                <div className="col-md-12 form-box">
                    <div className="col-md-12">
                        <h2 className="form-heading">Patient Registration</h2>
                        < hr/>
                    </div>
                    <div className="col-md-12">
                    <form role="form">
                           
                            <div class="col-md-12">
                            <div class=" form-group col-md-6">
                            <label>First Name</label>
                            <div class="input-group">
                                <span class="input-group-addon "><span class="glyphicon glyphicon-user"></span></span>
                                <input class="form-control right-border-none" placeholder="First Name" type="text" name="fname" onChange={this.fnameHandler} defaultValue={this.state.fName}/>
                                <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>

                            <div class=" form-group col-md-6">
                            <label>Last Name</label>
                            <div class="input-group">
                                <span class="input-group-addon "><span class="glyphicon glyphicon-user"></span></span>
                                <input class="form-control right-border-none" placeholder="Last Name" type="text" name="lname" onChange={this.lnameHandler} defaultValue={this.state.lName}/>
                                <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                            </div>

                            <div class="col-md-12">
                            <div class="form-group col-md-12">
                            <label>Address</label>
                            <div class="input-group">
                                <span class="input-group-addon "><span class="glyphicon home"></span></span>
                                <input class="form-control right-border-none" placeholder="Address" type="text" name="address" onChange={this.addressHandler} defaultValue={this.state.address}/>
                                <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                            </div>

                            <div class="col-md-12">
                            <div class=" form-group col-md-4">
                            <label>City</label>
                            <div class="input-group">
                                <span class="input-group-addon "><span class="glyphicon home"></span></span>
                                <input class="form-control right-border-none" placeholder="City" type="text" name="city" onChange={this.cityHandler} defaultValue={this.state.city}/>
                                <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                            <div class=" form-group col-md-4">
                            <label>State</label>
                            <div class="input-group">
                                <span class="input-group-addon "><span class="glyphicon home"></span></span>
                                <input class="form-control right-border-none" placeholder="State" type="text" name="state" onChange={this.stateHandler} defaultValue={this.state.state}/>
                                <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                            <div class=" form-group col-md-4">
                            <label>Zip Code</label>
                            <div class="input-group">
                                <span class="input-group-addon "><span class="glyphicon home"></span></span>
                                <input class="form-control right-border-none" placeholder="Zip Code" type="text" name="zip" onChange={this.zipHandler} defaultValue={this.state.zip}/>
                                <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                            </div>

                            <div class="col-md-12">
                            <div class=" form-group col-md-4">
                            <label>Phone</label>
                            <div class="input-group">
                                <span class="input-group-addon "><span class="fa fa-address-book"></span></span>
                                <input class="form-control right-border-none" placeholder="Phone" type="text" name="phone" onChange={this.phoneHandler} defaultValue={this.state.phone}/>
                                <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                            <div class=" form-group col-md-4">
                            <label>Race</label>
                            <div class="input-group">
                                <span class="input-group-addon "><span class="glyphicon glyphicon-user"></span></span>
                                <select aria-label="Please Select" name="race" class="form-control FormSelect_select" onChange={this.raceHandler} defaultValue={this.state.race}>
                                <option value="noSelection">Please Select</option>
                                <option value="Native American">Native American</option>
                                <option value="African American">African American</option>
                                <option value="Asian">Asian</option>
                                <option value="Caucasian">Caucasian</option>
                                <option value="Hispanic">Hispanic</option>
                                <option value="Other">Other</option>
                                </select>
                                <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                            <div class=" form-group col-md-4">
                            <label>Gender</label>
                            <div class="input-group">
                                <span class="input-group-addon "><span class="glyphicon glyphicon-user"></span></span>
                                <select aria-label="Please Select" name="gender" class="form-control FormSelect_select" onChange={this.genderHandler} defaultValue={this.state.gender}>
                                <option value="noSelection">Please Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                                </select>
                                <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                            </div>

                            <div class="col-md-12">
                            <div class=" form-group col-md-4">
                            <label>DOB</label>
                            <div class="input-group">
                                <span class="input-group-addon "><span class="glyphicon calendar"></span></span>
                                <input class="form-control right-border-none" placeholder="Date of Birth" type="date" name="dob" onChange={this.dobHandler} defaultValue={this.state.dob}/>
                                <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                            <div class=" form-group col-md-4">
                            <label>Marital Status</label>
                            <div class="input-group">
                                <span class="input-group-addon "><span class="glyphicon marriage"></span></span>
                                <select aria-label="Please Select" name="maritalStatus" class="form-control FormSelect_select" onChange={this.maritalStatusHandler} defaultValue={this.state.maritalStatus}>
                                <option value="noSelection">Please Select</option>
                                <option value="Married">Married</option>
                                <option value="Unmarried">Unmarried</option>
                                <option value="Divorcee">Divorcee</option>
                                </select>
                                <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                            <div class=" form-group col-md-4">
                            <label>Blood Group</label>
                            <div class="input-group">
                                <span class="input-group-addon "><span class="glyphicon syringe-empty"></span></span>
                                <select aria-label="Please Select" name="bloodGroup" class="form-control FormSelect_select" onChange={this.bloodGroupHandler} defaultValue={this.state.bloodGroup}>
                                <option value="noSelection">Please Select</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                </select>
                                <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                            </div>
                            
                            <div class="col-md-12">
                            <div class="form-group col-md-12">
                            <label>Allergy</label>
                            <div class="input-group">
                                <span class="input-group-addon "><span class="glyphicon no-symbol"></span></span>
                                <input class="form-control right-border-none" placeholder="Allergy" type="text" name="allergy" onChange={this.allergyHandler} defaultValue={this.state.allergy}/>
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

export default Registration;