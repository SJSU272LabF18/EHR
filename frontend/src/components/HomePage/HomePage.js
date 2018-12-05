import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import '../../App.css';
import '../../Homepage.css';
import logo from './logo.png'
import dr from './dr.png'
import addPage from './add-page.png'
import microphone from './microphone.png'
import graph from './graph.png'
class HomePage extends Component {
     constructor(props) {
     super(props);
     this.state = {
       
    }
    }
    render(){
        return(

            <div class="containerFluid" >
              <div className="home-img">
                   
                <navbar  style={{position:"absolute", opacity:"0.6", width:"100%"}}>
                <span id="brand">
                    <a href="javascript:;"><img src={logo} style={{marginTop:"10px", opacity:"1"}}/></a>
                </span>
                <ul id="menu">
                    <li><a href="javascript:;">HOME</a></li>
                    <li><a href="javascript:;">SERVICES</a></li>
                    <li><a href="javascript:;">NEW PATIENT</a></li>
                    <li><a href="javascript:;">EXISTING PATIENT</a></li>
                    <li><a href="/doctor-login">ADMIN</a></li>
                </ul>
                </navbar>
                <div className="box-1">
                <span>Caring for</span>
                </div>
                <div className="box-2">
                <span>You and Your Family</span>
                </div>
                <img src="http://t.commonsupport.com/healing/images/main-slider/image-3.jpg" style={{postion:"relative", width:"100%", height:"610px"}}/>
                </div>
                <div className="col-md-12 service-box">
                <div className="col-md-3">
                    <img src={dr}/>
                    <p className="service-box-text">Track Treatment</p>
                </div>
                <div className="col-md-3">
                    <img src={addPage}/>
                    <p className="service-box-text">Hassel-Free Documentation</p>
                </div>
                <div className="col-md-3">
                    <img src={graph}/>
                    <p className="service-box-text">Patient Statatics</p>
                </div>
                <div className="col-md-3">
                    <img src={microphone}/>
                    <p className="service-box-text">Speech-Text</p>
                </div>
                </div>
            </div>
        )
    }
}
export default HomePage;