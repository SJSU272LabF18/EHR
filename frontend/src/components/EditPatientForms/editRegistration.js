import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';

class EditRegistration extends Component {
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
            gender:"",
            bloodGroup:"",
            onclick:"",
            resultmsg:"",
            registrationDetails  : ""
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

    }

    componentDidMount(){

        axios.defaults.withCredentials = true;
        axios.get('http://localhost:3001/registrationdetails',
            {
                params: {
                    email: localStorage.getItem('email')
                }
            })
            .then(response => {
                console.log("Status Code : ", response.status);
                if (response.status === 200) {
                    this.setState({
                        registerResponse: true,
                        fName : response.data.fName,
                        lName: response.data.lName,
                        address: response.data.address,
                        city: response.data.city,
                        state: response.data.state,
                        zip:response.data.zipcode,
                        phone:response.data.phone,
                        gender:response.data.gender,
                        bloodGroup : response.data.bloodGroup
                    })
  
                } else {
                    this.setState({
                      registerResponse: false
                    })
                }
            })
            .catch(error => {
                this.setState({
                    registerResponse: false,
                    errormsg: error.response.data
                })
            });
  
  
      }
  

    fnameHandler = (e) => {
        console.log("fname:", e.target.value)
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

    submitRegistration = (e) => {
        var headers = new Headers();
        // let patient_email = localStorage.getItem("decoded_email");
        e.preventDefault();
        const data = {
            fName : this.state.fName,
            lName : this.state.lName, 
            address: this.state.address,
            city: this.state.city,
            state:this.state.state,
            zipcode:this.state.zip,
            phone:this.state.phone,
            diversity:this.state.diversity,
            gender:this.state.gender,
            dob:this.state.dob,
            bloodGroup:this.state.bloodGroup,
        }
        console.log(data)
        axios.defaults.withCredentials = true;
        axios.put('http://localhost:3001/editregistration', data,
        {
            params:{
                email: localStorage.getItem('email')
            }
        })
            .then(response => {
                console.log("Status Code : ", response.status);
                if (response.status === 200) {
                    this.setState({
                        onclick: true,
                        resultmsg: "Patient Registered Successfully"
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

    render(){
        let loginroute = null;
        let nextPage = null;
        // let patient_email = localStorage.getItem("decoded_email");
        // if (patient_email == null) {
        //     loginroute = <Redirect to="/login" />
        // }
        if(this.state.onclick){
            nextPage = <Redirect to="/patient/dashboard" />
        }

        return(
            <div className="col-md-12" >
                {loginroute}
                {nextPage}
                <div className = "col-md-2"></div>
                <div className="col-md-8 form-box">

                    <div className="col-md-12 form-heading-box">
                        <h2 className="form-heading">Patient Registration</h2>

                    </div>
                    <div className="col-md-12 content-box" >
                    <form role="form" onSubmit={this.submitRegistration} id="form">

                    <div class="col-md-12">
                            <div class=" form-group col-md-12">
                            <label>First Name</label>
                            <div class="input-group">
                                <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-user"></span></span>
                                <input class="form-control right-border-none" placeholder="First Name" type="text" name="fname" cf-questions="Hello, please tell me your first name." onChange={this.fnameHandler} defaultValue={this.state.fName}/>
                                <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class=" form-group col-md-12">
                            <label>Last Name</label>
                            <div class="input-group">
                                <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-user"></span></span>
                                <input class="form-control right-border-none" placeholder="Last Name" type="text" name="lname" cf-questions="Ohkay {fname}, please tell me your last name." onChange={this.lnameHandler} defaultValue={this.state.lName}/>
                                <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                        </div>

                            <div class="col-md-12">
                            <div class="form-group col-md-12">
                            <label>Address</label>
                            <div class="input-group">
                                <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-home"></span></span>
                                <input class="form-control right-border-none" placeholder="Address" type="text" name="address" cf-questions="{fname} now, please tell me your address." onChange={this.addressHandler} defaultValue={this.state.address}/>
                                <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                            </div>

                            <div class="col-md-12">
                            <div class=" form-group col-md-6">
                            <label>City</label>
                            <div class="input-group">
                                <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-home"></span></span>
                                <input class="form-control right-border-none" placeholder="City" type="text" name="city" cf-questions="{fname} Please, tell me your city " onChange={this.cityHandler} defaultValue={this.state.city}/>
                                <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                            <div class=" form-group col-md-6">
                            <label>State</label>
                            <div class="input-group">
                                <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-home"></span></span>
                                <input class="form-control right-border-none" placeholder="State" type="text" name="state" cf-questions="{fname} Please, tell me your state " onChange={this.stateHandler} defaultValue={this.state.state}/>
                                <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                            </div>

                            <div class="col-md-12">
                            <div class=" form-group col-md-6">
                            <label>Zip Code</label>
                            <div class="input-group">
                                <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-home"></span></span>
                                <input class="form-control right-border-none" placeholder="Zip Code" type="text" name="zip" cf-questions="{fname} Please, tell me your zipcode" onChange={this.zipHandler} defaultValue={this.state.zip}/>
                                <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                            <div class=" form-group col-md-6">
                            <label>Phone</label>
                            <div class="input-group">
                                <span class="input-group-addon icon-input"><span class="fa fa-address-book"></span></span>
                                <input class="form-control right-border-none" placeholder="Phone" type="text" name="phone" cf-questions="{fname} Please, tell me your contact number " onChange={this.phoneHandler} defaultValue={this.state.phone}/>
                                <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                            </div>


                            </div>

                            <div class=" form-group col-md-4">
                            <label>Gender</label>
                            <div class="input-group">
                                <span class="input-group-addon icon-input "><span class="glyphicon glyphicon-user"></span></span>
                                <input class="form-control right-border-none" placeholder="Gender" type="text" name="gender" cf-questions="{fname} Please, tell me your gender " onChange={this.genderHandler} defaultValue={this.state.registrationDetails.gender}/>
                                <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                                {/* <fieldset  id="gender" name="gender" cf-questions="Please, choose your gender from following. <span>Male</span>, <span>Female </span>or<span>Other</span>"> */}
                                    {/* <input type="radio" cf-label="Male" value="Male" id="male" onChange={this.genderHandler} checked={this.state.gender === "Male"} />Male<br/>
                                    <input type="radio" cf-label="Female" value="Female" id="female" onChange={this.genderHandler}  checked={this.state.gender === "Female"}/>Female<br/>
                                    <input type="radio" cf-label="Other" value="Other" id="other" onChange={this.genderHandler}   checked={this.state.gender === "Other"} />Other */}
                                {/* </fieldset> */}
                            </div>
                        </div>


                            <div class="col-md-12">

                            <div class=" form-group col-md-12">
                            <label>Blood Group:</label>

                             <fieldset  class="radio-group-box"id="bloodgroup" name="bloodgroup" cf-questions="Please, choose your blood group from following. <span>A+</span>, <span>A- </span>,<span>B+</span>, <span>B-</span>,<span>O+</span>,<span>O-</span>,<span>AB+</span> or <span>AB-</span> ">
                                    <input  type="radio" cf-label="A+" value="A+" id="A+" onChange={this.bloodGroupHandler} checked={this.state.bloodGroup === "A+"} /><span style={{marginRight:"35px"}}>A+ </span>
                                    <input  type="radio" cf-label="A-" value="A-" id="A-" onChange={this.bloodGroupHandler}  checked={this.state.bloodGroup === "A-"}/> <span style={{marginRight:"35px"}}>A- </span>
                                    <input  type="radio" cf-label="B+" value="B+" id="B+" onChange={this.bloodGroupHandler}   checked={this.state.bloodGroup === "B+"} /> <span style={{marginRight:"35px"}}>B+ </span>
                                    <input  type="radio" cf-label="B-" value="B-" id="B-" onChange={this.bloodGroupHandler} checked={this.state.bloodGroup === "B-"} /><span style={{marginRight:"35px"}}>B- </span>
                                    <input  type="radio" cf-label="O+" value="O+" id="O+" onChange={this.bloodGroupHandler}  checked={this.state.bloodGroup === "O+"}/> <span style={{marginRight:"35px"}}>O+ </span>
                                    <input  type="radio" cf-label="O-" value="O-" id="O-" onChange={this.bloodGroupHandler}   checked={this.state.bloodGroup === "O-"} /> <span style={{marginRight:"35px"}}>O- </span>
                                    <input  type="radio" cf-label="AB+" value="AB+" id="AB+" onChange={this.bloodGroupHandler} checked={this.state.bloodGroup === "AB+"} /> <span style={{marginRight:"35px"}}>AB+ </span>
                                    <input  type="radio" cf-label="AB-" value="AB-" id="AB-" onChange={this.bloodGroupHandler}  checked={this.state.bloodGroup === "AB-"}/> <span style={{marginRight:"35px"}}>AB- </span>

                                </fieldset>
                            </div>
                            </div>
                            <div className="col-md-12">
                            <div className="col-md-5"></div>
                            <div className="col-md-3">
                                <button style={{marginTop:"20px"}}type="submit" className="btn btn-success btn-lg">Submit</button>
                            </div>
                            </div>

                    </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default EditRegistration;



