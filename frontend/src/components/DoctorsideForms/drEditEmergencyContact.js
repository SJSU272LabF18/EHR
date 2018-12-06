import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';

class DrEditEmergencyContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            contact: "",
            relation: "",
            address: "",
            onclick: "",
            contactDetails : ""
        }
        this.fnameHandler = this.fnameHandler.bind(this);
        this.lnameHandler = this.lnameHandler.bind(this);
        this.contactHandler = this.contactHandler.bind(this);
        this.relationHandler = this.relationHandler.bind(this);
        this.addressHandler = this.addressHandler.bind(this);
        this.submitEmergency = this.submitEmergency.bind(this);
    }

    componentDidMount(){

        axios.defaults.withCredentials = true;
        axios.get('http://localhost:3001/emergencydetails',
            {
                params: {
                    email: this.props.location.state.email
                }
            })
            .then(response => {
                console.log("Status Code : ", response.status);
                if (response.status === 200) {
                    this.setState({
                        registerResponse: true,
                        fname: response.data.fName,
                        lname: response.data.lName,
                        contact: response.data.contact,
                        relation: response.data.relation,
                        address: response.data.address,
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
        this.setState({
            fname: e.target.value,

        });
    }
    lnameHandler = (e) => {
        this.setState({
            lname: e.target.value,

        });
    }
    contactHandler = (e) => {
        this.setState({
            contact: e.target.value,

        });
    }
    relationHandler = (e) => {
        this.setState({
            relation: e.target.value,

        });
    }
    addressHandler = (e) => {
        this.setState({
            address: e.target.value,

        });
    }

    submitEmergency = (e) => {

        e.preventDefault();
        const data = {
            fName: this.state.fname,
            lName: this.state.lname,
            contact: this.state.contact,
            email: this.state.email,
            relation: this.state.relation,
            address: this.state.address,

        }
        console.log(data)
        axios.defaults.withCredentials = true;
        axios.put('http://localhost:3001/editemergency', data,
            {
                params: {
                    userEmail:this.props.location.state.email
                }
            })
            .then(response => {
                console.log("Status Code : ", response.status);
                if (response.status === 200) {
                    this.setState({
                        onclick: true,
                        resultmsg: "Emergency contact saved Successfully"
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

        let loginroute = null;
        let nextPage = null;
        // let patient_email = localStorage.getItem("decoded_email");
        // if (patient_email == null) {
        //     loginroute = <Redirect to="/login" />
        // }
        if(this.state.onclick){
            nextPage = <Redirect to="/doctor/dashboard" />
        }

        console.log(this.state.fname);
        return (
            <div className="col-md-12">
              {loginroute}
                {nextPage}
                 <div className = "col-md-2"></div>
                <div className="col-md-8 form-box">

                    <div className="col-md-12 form-heading-box">
                        <h2 className="form-heading">Emergency Contact</h2>
                    </div>
                    <div className="col-md-12 content-box" >
                        <form role="form" onSubmit={this.submitEmergency} id='form'>
                            <div className="col-md-12">
                                <div class=" form-group col-md-12">
                                    <label>First Name</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-user"></span></span>
                                        <input class="form-control right-border-none" placeholder="First Name" type="text" name="fname" cf-questions="Hello, please tell me the first name of your emergency contact?" onChange={this.fnameHandler} defaultValue={this.state.fname} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div class=" form-group col-md-12">
                                    <label>Last Name</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-user"></span></span>
                                        <input class="form-control right-border-none" placeholder="Last Name" type="text" name="lname" cf-questions="Hello, please tell me the last name of {fname}?" onChange={this.lnameHandler} defaultValue={this.state.lname} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div class=" form-group col-md-6">
                                    <label>Contact Number</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="fa fa-address-book"></span></span>
                                        <input class="form-control right-border-none" placeholder="Contact Number" type="text" name="contact" onChange={this.contactHandler} cf-questions="Hello, please tell me contact number of {fname}?" defaultValue={this.state.contact} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                <div class=" form-group col-md-6">
                                    <label>Relation</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-user"></span></span>
                                        <input class="form-control right-border-none" placeholder="Relation" type="text" name="relation" cf-questions="Hello, please tell your relation with {fname}?" onChange={this.relationHandler} defaultValue={this.state.relation} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class=" form-group col-md-12">
                                    <label>Address</label>
                                    <div class="input-group">
                                        <span class="input-group-addon icon-input"><span class="fa fa-address-card"></span></span>
                                        <input class="form-control right-border-none" placeholder="Address" type="text" name="address" cf-questions="Hello, please tell me address of {fname}?" onChange={this.addressHandler} defaultValue={this.state.address} />
                                        <span class="input-group-addon transparent icon-input"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div className="col-md-5"></div>
                                <div className="col-md-3">
                                    <button type="submit" className="btn btn-success btn-lg" style={{ marginTop: "15px" }}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        )
    }
}



export default DrEditEmergencyContact;