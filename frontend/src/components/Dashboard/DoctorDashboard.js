import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import '../../doctordashboard.css';

class DoctorDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }



    render() {

        return (
            <div class="containerFluid" >

                <div className="col-md-12" style={{ height: "80px", marginTop: "20px" }}>
                    <div className="col-md-4"></div>
                    <div className="col-md-2 form-group" >
                        <input type="text" className="form-control" name="patientName" placeholder="Patient Name" onChange={this.patientNameHandler} defaultValue={this.state.patientName} />
                    </div>
                    <div className="col-md-2">
                        <button type="button" autoComplete="off" onClick={this.handleSearch} className="btn btn-primary searchbox-submit js-searchSubmit" style={{ verticalAlign: 'middle' }}>Search</button>
                    </div>
                </div>
                <div className="col-md-12" >
                    <div className="col-md-3"></div>
                    <div className="col-md-7">
                        <div class="table100 ver1 m-b-110">
                            <table data-vertable="ver1">
                                <thead>
                                    <tr class="row100 head">
                                        <th class="column100 column1" data-column="column1">Id</th>
                                        <th class="column100 column2" data-column="column2">First Name</th>
                                        <th class="column100 column3" data-column="column3">Last Name</th>
                                        <th class="column100 column4" data-column="column4">Phone</th>
                                        <th class="column100 column5" data-column="column5">Email</th>
                                        <th class="column100 column5" data-column="column6"></th>
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="row100">
                                        <td class="column100 column1" data-column="column1">1</td>
                                        <td class="column100 column2" data-column="column2">Harsh</td>
                                        <td class="column100 column3" data-column="column3">Patel</td>
                                        <td class="column100 column4" data-column="column4">4082047897</td>
                                        <td class="column100 column5" data-column="column5">patelharsh9999@gmail.com</td>
                                        <td>
                                            <a href="" class="" style={{marginRight: "20px", marginLeft: '5px'}} target="_blank" data-toggle="tooltip" title="View!"><i class="glyphicon glyphicon-eye-open"></i></a>
                                            <a href="" class="" style={{marginRight: "20px"}} target="_blank" data-toggle="tooltip" title="Old Forms!"><i class="glyphicon glyphicon-plus"></i></a>
                                            <a href="" class=""  data-toggle="tooltip" title="Download!"><i class="glyphicon glyphicon-save"></i></a>
                                        </td>
                                        
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DoctorDashboard;