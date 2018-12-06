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
            bloodGroup:"",
            onclick:"",
            resultmsg:""
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

        this.submitRegistration = this.submitRegistration.bind(this);
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

        var finalData = null
        let my = this
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
                finalData = conversationalForm.getFormData(true)
                my.setState({
                    address: finalData.address,
                    fName: finalData.fname,
                    lName: finalData.lname,
                    city: finalData.city,
                    gender: finalData.gender,
                    phone: finalData.phone,
                    state: finalData.state,
                    zip: finalData.zip,
                    bloodGroup : finalData.bloodGroup
                })

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
            address: this.state.address,
            city: this.state.city,
            state:this.state.state,
            zipcode:this.state.zip,
            phone:this.state.phone,
            diversity:this.state.diversity,
            gender:this.state.gender,
            dob:this.state.dob,
            maritalStatus:this.state.maritalStatus,
            bloodGroup:this.state.bloodGroup,
        }
        console.log(data)
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:3001/registration', data,
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
                <div className="col-md-1"></div>
                <div className="col-md-7 form-box" style={{backgroundColor: "#fff"}}>

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
                                <input class="form-control" placeholder="First Name" type="text" name="fname" cf-questions="Hello, welcome. Hope you get well soon. && Let's get started. Could you please, tell your First Name" onChange={this.fnameHandler} defaultValue={this.state.fName}/>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class=" form-group col-md-12">
                            <label>Last Name</label>
                            <div class="input-group">
                                <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-user"></span></span>
                                <input class="form-control " placeholder="Last Name" type="text" name="lname" cf-questions="Ohkay {fname},can you  tell me your last name." onChange={this.lnameHandler} defaultValue={this.state.lName}/>

                            </div>
                            </div>
                        </div>

                            <div class="col-md-12">
                            <div class="form-group col-md-12">
                            <label>Address</label>
                            <div class="input-group">
                                <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-home"></span></span>
                                <input class="form-control " placeholder="Address" type="text" name="address" cf-questions="{fname} now, please tell me your address." onChange={this.addressHandler} defaultValue={this.state.address}/>

                            </div>
                            </div>
                            </div>

                            <div class="col-md-12">
                            <div class=" form-group col-md-6">
                            <label>City</label>
                            <div class="input-group">
                                <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-home"></span></span>
                                <input class="form-control " placeholder="City" type="text" name="city" cf-questions=" Please tell me your city, {fname} " onChange={this.cityHandler} defaultValue={this.state.city}/>

                            </div>
                            </div>
                            <div class=" form-group col-md-6">
                            <label>State</label>
                            <div class="input-group">
                                <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-home"></span></span>
                                <input class="form-control " placeholder="State" type="text" name="state" cf-questions="{fname} Please, tell me your state " onChange={this.stateHandler} defaultValue={this.state.state}/>

                            </div>
                            </div>
                            </div>

                            <div class="col-md-12">
                            <div class=" form-group col-md-6">
                            <label>Zip Code</label>
                            <div class="input-group">
                                <span class="input-group-addon icon-input"><span class="glyphicon glyphicon-home"></span></span>

                                <input class="form-control " placeholder="Zip Code" type="text" name="zip" cf-questions=" {fname} can you  tell me your zipcode" onChange={this.zipHandler} defaultValue={this.state.zip}/>

                            </div>
                            </div>
                            <div class=" form-group col-md-6">
                            <label>Phone</label>
                            <div class="input-group">
                                <span class="input-group-addon icon-input"><span class="fa fa-address-book"></span></span>
                                <input class="form-control " placeholder="Phone" type="text" name="phone" cf-questions="{fname} , tell me your contact number " onChange={this.phoneHandler} defaultValue={this.state.phone}/>

                            </div>


                            </div>

                            <div class=" form-group col-md-6">
                            <label>Gender</label>
                            <div class="input-group">
                                <span class="input-group-addon icon-input "><span class="glyphicon glyphicon-user"></span></span>
                                <input class="form-control" placeholder="Gender" type="text" name="gender" cf-questions="{fname} Please, tell me your gender " onChange={this.genderHandler} defaultValue={this.state.gender}/>

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




                             <fieldset  class="radio-group-box"id="bloodgroup" name="bloodgroup" cf-questions="Last one to go {fname} , choose your blood group from following. ">

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


                <div className="col-md-3 " style={{paddingRight: "0px"}}>
                    <div id="cf-context" role="cf-context" cf-context></div>
                </div>

            </div>
        )
    }
}

export default Registration;
