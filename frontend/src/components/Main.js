import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from './Login/Login';
import Signup from './SignUp/signup';
import Navigation from './Navigation/Navigation';
import Registration from './PatientForms/Registration';
import PaymentDetails from './PatientForms/PaymentDetails';
import EmergencyContact from './PatientForms/EmergencyContact';
import Insurance from './PatientForms/Insurance';



// import sidebar from './Sidebar/sidebar';
import HomePage from './HomePage/HomePage';

import DoctorLogin from './Login/doctorLogin';

import Purpose from './PatientForms/Purpose';
import dashboard from './PatientForms/dashboard';


//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/doctor-login" component={DoctorLogin}/>
                <Route path="/homepage" component={HomePage}/>
                <Route path="/nav" component={Navigation}/>
                <Route path="/patient-registration" component={Registration}/>
                <Route path="/payment-details" component={PaymentDetails}/>
                <Route path="/emergency-contact" component={EmergencyContact}/>
                {/* <Route path="/sidebar" component={sidebar}/> */}
                <Route path="/purpose" component={Purpose}/>
                <Route path="/insurance" component={Insurance}/>
                <Route path="/dashboard" component={dashboard}/>

            </div>
        )
    }
}
//Export The Main Component
export default Main;
