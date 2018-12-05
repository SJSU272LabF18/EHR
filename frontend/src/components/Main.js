import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from './Login/Login';
import Signup from './SignUp/signup';
import Navigation from './Navigation/Navigation';
import Registration from './PatientForms/Registration';
import PaymentDetails from './PatientForms/PaymentDetails';
import EmergencyContact from './PatientForms/EmergencyContact';
import Insurance from './PatientForms/Insurance';
import PhysicalHealthRecord from './PatientForms/PhysicalHealthRecord';
import sidebar from './Sidebar/sidebar';
import HomePage from './HomePage/HomePage';
import DoctorDashboard from './Dashboard/DoctorDashboard';
import DownloadForm from './Dashboard/DownloadForm'

import DoctorLogin from './Login/doctorLogin';

import Purpose from './PatientForms/Purpose';



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
                <Route path="/doctor" component={Navigation}/>
                <Route path="/patient-registration" component={Registration}/>
                <Route path="/payment-details" component={PaymentDetails}/>
                <Route path="/emergency-contact" component={EmergencyContact}/>
                <Route path="/physical-health" component={PhysicalHealthRecord}/>
                <Route path="/purpose" component={Purpose}/>
                <Route path="/insurance" component={Insurance}/>
                <Route path="/sidebar" component={sidebar}/>
                <Route path="/doctor/dashboard" component={DoctorDashboard}/>
                <Route path="/download" component={DownloadForm}/>
            </div>
        )
    }
}
//Export The Main Component
export default Main;