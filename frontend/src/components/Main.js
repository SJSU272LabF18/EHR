import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from './Login/Login';
import Signup from './SignUp/signup';
import Navigation from './Navigation/Navigation';
import Registration from './PatientForms/Registration';
import PaymentDetails from './PatientForms/PaymentDetails';
import EmergencyContact from './PatientForms/EmergencyContact';
import Connection from './connection';
import Insurance from './PatientForms/Insurance';
import MedicalHistory from './PatientForms/MedicalHistory';
import PhysicalHealthRecord from './PatientForms/PhysicalHealthRecord';

//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Navigation}/>
                <Route path="/patient-registration" component={Registration}/>
                <Route path="/payment-details" component={PaymentDetails}/>
                <Route path="/emergency-contact" component={EmergencyContact}/>
                <Route path="/connection" component={Connection}/>
                <Route path="/insurance" component={Insurance}/>
                <Route path="/medical-history" component={MedicalHistory}/>
                <Route path="/physical-health-record" component={PhysicalHealthRecord}/>
            </div>
        )
    }
}
//Export The Main Component
export default Main;