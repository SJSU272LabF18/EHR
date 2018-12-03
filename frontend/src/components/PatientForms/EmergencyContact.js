import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';

class EmergencyContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            contact: "",
            email: "",
            relation: "",
            address: ""
        }
        this.fnameHandler = this.fnameHandler.bind(this);
        this.lnameHandler = this.lnameHandler.bind(this);
        this.contactHandler = this.contactHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.relationHandler = this.relationHandler.bind(this);
        this.addressHandler = this.addressHandler.bind(this);
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
    emailHandler = (e) => {
        this.setState({
            email: e.target.value,
           
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
    render() {
        return (
            <div className="container" >
                <div className="col-md-12 form-box">
                    <div className="col-md-12">
                        <h2 className="form-heading">Registration</h2>
                        < hr />
                    </div>
                    <div className="col-md-12">
                        <form role="form">
                            <div className="col-md-12">
                                <div class=" form-group col-md-6">
                                    <label>First Name</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="glyphicon glyphicon-user"></span></span>
                                        <input class="form-control right-border-none" placeholder="First Name" type="text" name="fname" onChange={this.fnameHandler} defaultValue={this.state.fname} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                <div class=" form-group col-md-6">
                                    <label>Last Name</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="glyphicon glyphicon-user"></span></span>
                                        <input class="form-control right-border-none" placeholder="Last Name" type="text" name="lname" onChange={this.lname} defaultValue={this.state.lname} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div class=" form-group col-md-4">
                                    <label>Contact Number</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="fa fa-address-book"></span></span>
                                        <input class="form-control right-border-none" placeholder="Contact Number" type="text" name="contact" onChange={this.contactHandler} defaultValue={this.state.contact} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                <div class=" form-group col-md-4">
                                    <label>Email</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="fa fa-envelope"></span></span>
                                        <input class="form-control right-border-none" placeholder="Email" type="text" name="email" onChange={this.emailHandler} defaultValue={this.state.email} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                                <div class=" form-group col-md-4">
                                    <label>Relation</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="glyphicon glyphicon-user"></span></span>
                                        <input class="form-control right-border-none" placeholder="Relation" type="text" name="relation" onChange={this.relationHandler} defaultValue={this.state.relation} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                            </div>

                            
                                <div class="col-md-12">
                                    <label>Address</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="fa fa-address-card"></span></span>
                                        <input class="form-control right-border-none" placeholder="Address" type="text" name="address" onChange={this.addressHandler} defaultValue={this.state.address} />
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
    

export default EmergencyContact;