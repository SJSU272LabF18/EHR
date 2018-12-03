import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import '../../App.css';



class Patientlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div className="col-md-12 list-box">
                <div className="col-md-12 heading-box">
                    <div className="col-md-3">
                        <h3>Patient Name</h3>
                    </div>
                    <div className="col-md-3">
                        <h3>Contact</h3>
                    </div>
                    <div className="col-md-1">
                        <h3>PHR</h3>
                    </div>
                   
                    <div className="col-md-2">
                        <h3>Medication</h3>
                    </div>
                    <div className="col-md-3">
                        <h3>View Record</h3>
                    </div>
                    
                </div>
                <div className="col-md-12 patient-box">
                    <div className="col-md-3">
                        <h4>Patient Name</h4>
                    </div>
                    <div className="col-md-3">
                        <h4>Contact</h4>
                    </div>
                    <div className="col-md-1">
                        <span class="glyphicon glyphicon-th-large"/>
                    </div>
                    <div className="col-md-2">
                        <span class="glyphicon glyphicon-pencil"/>
                    </div>
                    <div className="col-md-3">
                        <span class="glyphicon glyphicon-eye-open"/>
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default Patientlist;