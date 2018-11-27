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
            cvv: "",
            onResponse:""
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
    
        submitPayment = (e) => {
            var headers = new Headers();
            let patient_email = localStorage.getItem("decoded_email");
            e.preventDefault();
            const data = { 
                cardHolderName: this.state.cardHolderName,
                cardNumber: this.state.cardNumber,
                expDate:this.state.expDate,
               cvv:this.state.cvv,        
            }
            console.log(data)
            axios.defaults.withCredentials = true;
            axios.post('http://localhost:3001/payment', data,
            {
                params:{
                    email: patient_email
                }
            })
                .then(response => {
                    console.log("Status Code : ", response.status);
                    if (response.status === 200) {
                        this.setState({
                            onResponse: true,
                            resultmsg: "Payment Details Saved"
                        })
                           
                    } else {
                        this.setState({
                            onResponse: false
                        })
                    }
                })
                .catch(error => {
                    this.setState({
                        onResponse: false,
                        errormsg: error.response.data
                    })
                });
        }
    render() {
        let loginroute = null;
        let nextPage = null;
        let patient_email = localStorage.getItem("decoded_email");
        if (patient_email == null) {
            loginroute = <Redirect to="/login" />
        }
        if(this.state.onResponse){
            nextPage = <Redirect to="/" />
        }

        return (
            <div className="container" >
                 {loginroute}
                {nextPage}
                <div className="col-md-12 form-box">
                    <div className="col-md-12">
                        <h2 className="form-heading">Payment Details</h2>
                        < hr />
                    </div>
                    <div className="col-md-12">
                        <form role="form" onSubmit={this.submitPayment}>
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