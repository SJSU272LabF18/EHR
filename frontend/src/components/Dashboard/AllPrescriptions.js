import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import '../../doctordashboard.css';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';

class AllPrescriptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prescriptions: [],
            patient: {},
            patientEmail: ""
        }
        this.openNewPrescription = this.openNewPrescription.bind(this)
        this.viewPrescription = this.viewPrescription.bind(this)
    }

    componentDidMount() {
        try{
            this.setState({
                patient: this.props.location.state.patient,
                patientEmail: this.props.location.state.patient.email
            })
            var data = {
                patientEmail: this.props.location.state.patient.email
            }
            //set the with credentials to true
            this.props.getPrescriptions(data, 1);
        }catch(e){
            
        }
        
    }

    openNewPrescription(email){
        let detailPage = null
        detailPage = this.props.history.push({
            pathname: "/doctor/patient-record",
            state: {
                patientEmail: email
            }
        })
    }

    viewPrescription(prescription){
        let detailPage = null
        detailPage = this.props.history.push({
            pathname: "/doctor/viewprescription",
            state: {
                prescription: prescription
            }
        })
    }

    handlePageClick = (data) => {
        let values = {}
        values = {
            patientEmail: this.state.patientEmail
        }
        this.props.getPrescriptions(values, data.selected + 1)
    };

    handleSearch = (e) => {
        let data = {}
        data = {
            patientEmail: this.state.patientEmail
        }


        this.props.getPrescriptions(data, 1);

    }


    render() {


        var redirectVar = null;
        if (localStorage.getItem('isPatient') == 'false' && localStorage.getItem('email')) {
            redirectVar = <Redirect to="/doctor/login" />
        }
        let prescriptions = null
        if (this.props.patientPrescriptions != []) {
            prescriptions = this.props.patientPrescriptions.map((prescription, index) => {
                var date1 = prescription.created_at.slice(0,10)
                return (
                    <tr class="row100">
                        <td class="column100 column1" data-column="column1">{index + 1}</td>
                        <td class="column100 column2" data-column="column2">{this.state.patientEmail}</td>
                        <td class="column100 column3" data-column="column3">{date1}</td>
                        <td>
                            <a onClick={() => this.viewPrescription(prescription)} class="" style={{ marginRight: "20px", marginLeft: '10px' }} data-toggle="tooltip" title="View!"><i class="glyphicon glyphicon-eye-open"></i></a>
                            <a href="" class="" data-toggle="tooltip" title="Download!"><i class="glyphicon glyphicon-save"></i></a>
                        </td>


                    </tr>
                )
            })
        }

        return (
            <div class="containerFluid" >
                <div className="col-md-12" style={{marginTop: "50px"}}>
                    <div className="col-md-3"></div>
                    <div className="col-md-7">
                        <div class="table100 ver1 m-b-110">
                            <table data-vertable="ver1">
                                <thead>
                                    <tr class="row100 ">
                                    <th class="column100 column1" data-column="column1"><b>{this.state.patient.fName} {this.state.patient.lName}</b></th>
                                    <th class="column100 column1" data-column="column2"></th>
                                    <th class="column100 column3" data-column="column3"></th>
                                    <th class="column100 column4" data-column="column4"><button className="btn" onClick={() => this.openNewPrescription(this.state.patientEmail)} style={{marginTop: '8px', color: '#000'}}>New Prescription</button></th>
                                    </tr>
                                    <tr class="row100 head">
                                        <th class="column100 column1" data-column="column1">Id</th>
                                        <th class="column100 column2" data-column="column2">Email</th>
                                        <th class="column100 column3" data-column="column3">Date</th>
                                        <th class="column100 column4" data-column="column4"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {prescriptions}
                                </tbody>
                            </table>
                        </div>
                        <div style={{ margin: "auto", textAlign: "center" }}>
                            <ReactPaginate previousLabel={"previous"}
                                nextLabel={"next"}
                                breakLabel={<a href="">...</a>}
                                breakClassName={"break-me"}
                                pageCount={this.props.patientsPrescriptionPageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        patientPrescriptions: state.patientreducer.patientPrescriptions,
        patientsPrescriptionPageCount: state.patientreducer.patientsPrescriptionPageCount,
    }
}

const mapDispatchStateToProps = dispatch => {
    return {
        getPrescriptions: (data, page) => {

            axios.defaults.withCredentials = true;
            //make a post request with the user data
            axios.get('http://localhost:3001/getPrescriptions', {
                headers: { Authorization: localStorage.getItem('token') },
                params: {
                    pageNo: page,
                    patientEmail: data.patientEmail
                }
            })
                .then(response => {
                    dispatch({ type: 'PRESCRIPTIONS', payload: response.data, statusCode: response.status })
                    console.log("Status Code : ", response);
                })
                .catch(error => {
                    dispatch({ type: 'PRESCRIPTIONS', payload: error.response.data, statusCode: error.response.status })
                });
        }
    }
}


//export Profile Component
export default (connect(mapStateToProps, mapDispatchStateToProps)(AllPrescriptions)); 