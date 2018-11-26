import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';

class PaymentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardHolderName: "",
            cardNumber: "",
            expDate: "",
            cvv: ""
        }
        this.cardHolderHandler = this.cardHolderHandler.bind(this);
        this.cardNumberHandler = this.cardNumberHandler.bind(this);
        this.expDateHandler = this.expDateHandler.bind(this);
        this.cardHolderHandler = this.cvvHandler.bind(this);
    }

    cardHolderHandler = (e) => {
        this.setState({
            cardHolderName: e.target.value,
           
        });
    }
    cardNumberHandler = (e) => {
        this.setState({
            cardNumber: e.target.value,
           
        });
    }
    expDateHandler = (e) => {
            this.setState({
                expDate: e.target.value,
               
            });
        }
    cvvHandler = (e) => {
            this.setState({
                cvv: e.target.value,
                   
            });
        }
    render() {
        return (
            <div className="container" >
                <div className="col-md-12 form-box">
                    <div className="col-md-12">
                        <h2 className="form-heading">Payment Details</h2>
                        < hr />
                    </div>
                    <div className="col-md-12">
                        <form role="form">
                            <div className="col-md-12">
                                <div class=" form-group col-md-5">
                                    <label>Card Holder's Name</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="glyphicon glyphicon-user"></span></span>
                                        <input class="form-control right-border-none" placeholder="Card Holder's Name" type="text" name="cardHolderName" onChange={this.cardHolderHandler} defaultValue={this.state.cardHolderName} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div class=" form-group col-md-5">
                                    <label>Card Number</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="glyphicon credit-card"></span></span>
                                        <input class="form-control right-border-none" placeholder="Card Number" type="text" name="cardNumber" onChange={this.cardNumberHandler} defaultValue={this.state.cardNumber} />
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-12">
                                <div class=" form-group col-md-2">
                                    <label>Expiration Date</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="glyphicon calendar "></span></span>
                                       
                                        <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                    </div>
                                </div>

                                <div class=" form-group col-md-2">
                                    <label>CVV</label>
                                    <div class="input-group">
                                        <span class="input-group-addon "><span class="glyphicon credit-card"></span></span>
                                        <input class="form-control right-border-none" placeholder="CVV" type="text" name="cvv" onChange={this.cvvHandler} defaultValue={this.state.cvv} />
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
    

export default PaymentDetails;