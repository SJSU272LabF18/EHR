import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';

class Insurance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            insuranceName: "",
            effectiveDate: "",
            claimAddress: "",
            subscriberId: "",
            groupNumber: "",
            subscriberAddress: "",
            subscriberSSN: "",
            relation: "",
            emplName: "", 
            onResponse:""
        }
        this.insuranceNameHandler = this.insuranceNameHandler.bind(this);
        this.effectiveDateHandler = this.effectiveDateHandler.bind(this);
        this.claimAddressHandler = this.claimAddressHandler.bind(this);
        this.subscriberIdHandler = this.subscriberIdHandler.bind(this);
        this.groupNumberHandler = this.groupNumberHandler.bind(this);
        this.subscriberAddressHandler = this.subscriberAddressHandler.bind(this);
        this.subscriberSSNHandler = this.subscriberSSNHandler.bind(this);
        this.relationHandler = this.relationHandler.bind(this);
        this.emplNameHandler = this.emplNameHandler.bind(this);
    }

    insuranceNameHandler = (e) => {
        this.setState({
            insuranceName: e.target.value,
        });
    }
    effectiveDateHandler = (e) => {
        this.setState({
            effectiveDate: e.target.value,
        });
    }
    claimAddressHandler = (e) => {
        this.setState({
            claimAddress: e.target.value,
        });
    }
    subscriberIdHandler = (e) => {
        this.setState({
            subscriberId: e.target.value,
        });
    }
    groupNumberHandler = (e) => {
        this.setState({
            groupNumber: e.target.value,
        });
    }
    subscriberAddressHandler = (e) => {
        this.setState({
            subscriberAddress: e.target.value,
        });
    }
    subscriberSSNHandler = (e) => {
        this.setState({
            subscriberSSN: e.target.value,
        });
    }
    relationHandler = (e) => {
        this.setState({
            relation: e.target.value,
        });
    }
    emplNameHandler = (e) => {
        this.setState({
            emplName: e.target.value,
        });
    }

render() {
    return (
        <div className="container" >
    
            <div className="col-md-12 form-box">
                <div className="col-md-12">
                    <h2 className="form-heading">Insurance</h2>
                    < hr />
                </div>
                <div className="col-md-12">
                    <form role="form" onSubmit={this.submitPayment}>
                        <div className="col-md-12">
                            <div class=" form-group col-md-5">
                                <label>Insurance Name</label>
                                <div class="input-group">
                                    <span class="input-group-addon "><span class="glyphicon glyphicon-user"></span></span>
                                    <input class="form-control right-border-none" placeholder="Insurance Name" type="text" name="insuranceName" onChange={this.insuranceNameHandler} defaultValue={this.state.insurance} />
                                    <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                </div>
                            </div>
                            <div class=" form-group col-md-5">
                                <label>Effective Date</label>
                                <div class="input-group">
                                    <span class="input-group-addon "><span class="glyphicon glyphicon-calendar"></span></span>
                                    <input class="form-control right-border-none" placeholder="Effective Date" type="date" name="effectiveDate" onChange={this.effectiveDateHandler} defaultValue={this.state.effectiveDate} />
                                    <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-12">
                            <div class=" form-group col-md-10">
                                <label>Claim Address</label>
                                <div class="input-group">
                                    <span class="input-group-addon "><span class="glyphicon glyphicon-home "></span></span>
                                    <input class="form-control right-border-none" placeholder="Claim Address" type="text" name="claimAddress" onChange={this.claimAddressHandler} defaultValue={this.state.claimAddress} />
                                    <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                </div>
                            </div>  
                        </div>
                        <div className="col-md-12">
                        <div class=" form-group col-md-5">
                                <label>Subscriber ID Number</label>
                                <div class="input-group">
                                    <span class="input-group-addon "><span class="glyphicon glyphicon-hash"></span></span>
                                    <input class="form-control right-border-none" placeholder="Subscriber ID Number" type="text" name="subscriberId" onChange={this.subscriberIdHandler} defaultValue={this.state.subscriberId} />
                                    <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                </div>
                        </div>
                        <div class=" form-group col-md-5">
                                <label>Group Number</label>
                                <div class="input-group">
                                    <span class="input-group-addon "><span class="glyphicon glyphicon-user-group"></span></span>
                                    <input class="form-control right-border-none" placeholder="Group Number" type="text" name="groupNumber" onChange={this.groupNumberHandler} defaultValue={this.state.groupNumber} />
                                    <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                </div>
                        </div>
                        </div>
                        <div className="col-md-12">
                            <div class=" form-group col-md-10">
                                <label>Subscriber Address</label>
                                <div class="input-group">
                                    <span class="input-group-addon "><span class="glyphicon glyphicon-home"></span></span>
                                    <input class="form-control right-border-none" placeholder="Subscriber Address" type="text" name="subscriberAddress" onChange={this.subscriberAddressHandler} defaultValue={this.state.subscriberAddress} />
                                    <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                </div>
                            </div>  
                        </div>
                        <div className="col-md-12">
                        <div class=" form-group col-md-5">
                                <label>Subscriber SSN</label>
                                <div class="input-group">
                                    <span class="input-group-addon "><span class="glyphicon glyphicon-hash"></span></span>
                                    <input class="form-control right-border-none" placeholder="Subscriber SSN" type="text" name="subscriberSSN" onChange={this.subscriberSSNHandler} defaultValue={this.state.subscriberSSN} />
                                    <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                </div>
                        </div>
                        <div class=" form-group col-md-5">
                                <label>Relation to Patient</label>
                                <div class="input-group">
                                    <span class="input-group-addon "><i class="fas fa-user-friends icon-size"></i></span>
                                    <input class="form-control right-border-none" placeholder="Relation to patient" type="text" name="relation" onChange={this.relationHandler} defaultValue={this.state.relation} />
                                    <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                </div>
                        </div>
                        </div>
                        <div className="col-md-12">
                            <div class=" form-group col-md-10">
                                <label>Employer Name and Address</label>
                                <div class="input-group">
                                <span class="input-group-addon "><span class="glyphicon glyphicon-home "></span></span>
                                    <input class="form-control right-border-none" placeholder="Employer Name" type="text" name="emplName" onChange={this.emplNameHandler} defaultValue={this.state.emplName} />
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


export default Insurance;