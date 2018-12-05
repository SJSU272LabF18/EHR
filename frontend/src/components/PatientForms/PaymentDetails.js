import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PaymentDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardHolderName: "",
            cardNumber: "",
            expDate: "",
            cvv: "",
            onResponse: ""
        }
        this.cardHolderHandler = this.cardHolderHandler.bind(this);
        this.cardNumberHandler = this.cardNumberHandler.bind(this);
        this.expDateHandler = this.expDateHandler.bind(this);
        this.cardHolderHandler = this.cvvHandler.bind(this);
    }

    componentDidMount() {
        var dispatcher = new window.cf.EventDispatcher(),
            synth = null,
            recognition = null,
            msg = null,
            SpeechSynthesisUtterance = null,
            SpeechRecognition = null;

        try {
            SpeechRecognition = SpeechRecognition || window.webkitSpeechRecognition;
        } catch (e) {
            console.log(
                "Example support range: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#Browser_compatibility"
            );
        }

        try {
            SpeechSynthesisUtterance =
                window.webkitSpeechSynthesisUtterance ||
                window.mozSpeechSynthesisUtterance ||
                window.msSpeechSynthesisUtterance ||
                window.oSpeechSynthesisUtterance ||
                window.SpeechSynthesisUtterance;
        } catch (e) {
            console.log(
                "Example support range: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance#Browser_compatibility"
            );
        }

        // here we use https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
        // you can use what ever API you want, ex.: Google Cloud Speech API -> https://cloud.google.com/speech/

        // here we create our input
        if (SpeechSynthesisUtterance && SpeechRecognition) {
            var microphoneInput = {
                init: function () {
                    // init is called one time, when the custom input is instantiated.

                    // load voices \o/
                    synth = window.speechSynthesis;
                    msg = new SpeechSynthesisUtterance();
                    window.speechSynthesis.onvoiceschanged = function (e) {
                        var voices = synth.getVoices();
                        msg.voice = voices[0]; // <-- Alex
                        msg.lang = msg.voice.lang; // change language here
                    };
                    synth.getVoices();

                    // here we want to control the Voice input availability, so we don't end up with speech overlapping voice-input
                    msg.onstart = function (event) {
                        // on message end, so deactivate input
                        console.log("voice: deactivate 1");
                        conversationalForm.userInput.deactivate();
                    };

                    msg.onend = function (event) {
                        // on message end, so reactivate input
                        conversationalForm.userInput.reactivate();
                    };

                    // setup events to speak robot response
                    dispatcher.addEventListener(
                        window.cf.ChatListEvents.CHATLIST_UPDATED,
                        function (event) {
                            if (event.detail.currentResponse.isRobotResponse) {
                                // https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
                                // msg.text = event.detail.currentResponse.response
                                msg.text = event.detail.currentResponse.strippedSesponse; //<-- no html tags
                                window.speechSynthesis.speak(msg);
                            }
                        },
                        false
                    );

                    // do other init stuff, like connect with external APIs ...
                },
                // set awaiting callback, as we will await the speak in this example
                awaitingCallback: true,
                cancelInput: function () {
                    console.log("voice: CANCEL");
                    window.finalTranscript = null;
                    if (recognition) {
                        recognition.onend = null;
                        recognition.onerror = null;
                        recognition.stop();
                    }
                },
                input: function (resolve, reject, mediaStream) {
                    console.log("voice: INPUT");
                    // input is called when user is interacting with the CF input button (UserVoiceInput)

                    // connect to Speech API (ex. Google Cloud Speech), Watson (https://github.com/watson-developer-cloud/speech-javascript-sdk) or use Web Speech API (like below), resolve with the text returned..
                    // using Promise pattern -> https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
                    // if API fails use reject(result.toString())
                    // if API succedes use resolve(result.toString())

                    if (recognition) recognition.stop();

                    recognition = new SpeechRecognition()
                    window.finalTranscript = "";

                    recognition.continuous = false; // react only on single input
                    recognition.interimResults = false; // we don't care about interim, only final.

                    // recognition.onstart = function() {}
                    recognition.onresult = function (event) {
                        // var interimTranscript = "";
                        for (var i = event.resultIndex; i < event.results.length; ++i) {
                            if (event.results[i].isFinal) {
                                window.finalTranscript += event.results[i][0].transcript;
                                console.log(event.results[i][0].transcript)
                                console.log(mediaStream)
                            }
                        }
                    };

                    recognition.onerror = function (event) {
                        reject(event.error);
                    };

                    recognition.onend = function (event) {
                        if (window.finalTranscript && window.finalTranscript !== "") {
                            resolve(window.finalTranscript);
                        }
                    };

                    recognition.start();
                }
            };
        }

        var conversationalForm = window.cf.ConversationalForm.startTheConversation({
            formEl: document.getElementById("form"),
            context: document.getElementById("cf-context"),
            eventDispatcher: dispatcher,

            // add the custom input (microphone)
            microphoneInput: microphoneInput,

            
            submitCallback: function () {
                // remove Conversational Form
                console.log(
                    "voice: Form submitted...",
                    conversationalForm.getFormData(true)
                );

                alert("You made it! Check console for data");
            }
        });

        if (!SpeechRecognition) {
            conversationalForm.addRobotChatResponse(
                "SpeechRecognition not supported, so <strong>no</strong> Microphone here."
            );
        }

        if (!SpeechSynthesisUtterance) {
            conversationalForm.addRobotChatResponse(
                "SpeechSynthesisUtterance not supported, so <strong>no</strong> Microphone here."
            );
        }

    }

    cardHolderHandler = (e) => {
        console.log(e.target.value)
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

    cardHolderNameHandler(value){
        console.log(value)
    }

    submitPayment = (e) => {
        var headers = new Headers();
        let patient_email = localStorage.getItem("decoded_email");
        e.preventDefault();
        const data = {
            cardHolderName: this.state.cardHolderName,
            cardNumber: this.state.cardNumber,
            expDate: this.state.expDate,
            cvv: this.state.cvv,
        }
        console.log(data)
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:3001/payment', data,
            {
                params: {
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
        // let patient_email = localStorage.getItem("decoded_email");
        // if (patient_email == null) {
        //     loginroute = <Redirect to="/login" />
        // }
        // if (this.state.onResponse) {
        //     nextPage = <Redirect to="/" />
        // }

        // return (

        return (
            <div className="col-md-12">
                <div className="col-md-7">
                    {/* <div className="container" >
                        {loginroute}
                        {nextPage}
                        <div className="col-md-12 form-box">
                            <div className="col-md-12">
                                <h2 className="form-heading">Payment Details</h2>
                                < hr />
                            </div>
                            <div className="col-md-12">
                                <form role="form" onSubmit={this.submitPayment} id='form'>
                                    <div className="col-md-12">
                                        <div class=" form-group col-md-5">
                                            <label>Card Holder's Name</label>
                                            <div class="input-group">
                                                <span class="input-group-addon "><span class="glyphicon glyphicon-user"></span></span>
                                                <input class="form-control right-border-none" placeholder="Card Holder's Name" type="text" name="cardHolderName" cf-questions="Hello, please tell me card holder's name?" onChange={this.cardHolderHandler} defaultValue={this.state.cardHolderName} />
                                                <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div class=" form-group col-md-5">
                                            <label>Card Number</label>
                                            <div class="input-group">
                                                <span class="input-group-addon "><span class="glyphicon credit-card"></span></span>
                                                <input class="form-control right-border-none" placeholder="Card Number" type="text" cf-questions="Please tell me card number!" name="cardNumber" onChange={this.cardNumberHandler} defaultValue={this.state.cardNumber} />
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
                                                <input class="form-control right-border-none" placeholder="CVV" type="text" cf-questions="Please tell me card's cvv?" name="cvv" onChange={this.cvvHandler} defaultValue={this.state.cvv} />
                                                <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> */}
                    <form id="form" cf-form>
                    <select name="drink" cf-questions="What would you like to drink?">
                            <option value="water">Water</option>
                            <option value="juice">Juice</option>
                            <option value="coffee" selected="">Coffee</option>
                            <option value="cider">Cider</option>
                        </select>
                    </form>

                </div>

                <div className="col-md-5">
                    {/* <form id="form">
                        <input id="cardHolderName" name="cardHolderName" type="text" cf-questions="Hello, please tell me card holder's name?" />
                        
                        <fieldset cf-questions="Choose your favourite color, <span style='background: blue;'>blue</span>, <span style='background: red;'>red</span> or <span style='background: yellow;'>yellow</span>">
                            <input type="radio" cf-label="blue" value="blue" id="1" />
                            <input type="radio" cf-label="red" value="red" id="2" />
                            <input type="radio" cf-label="yellow" value="yellow" id="3" />
                        </fieldset>
                    </form> */}
                   
                    <div id="cf-context" role="cf-context" cf-context></div>
                </div>
            </div>
        )
    }
}


export default PaymentDetails;