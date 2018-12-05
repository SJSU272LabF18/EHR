import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import '../../doctordashboard.css';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';

class DoctorDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patients: [],
            patientName: ''
        }
        this.getAllPrescriptions = this.getAllPrescriptions.bind(this)
    }

    componentDidMount() {
        var data = {
            patientName: this.state.propertyName
        }
        //set the with credentials to true
        this.props.getPatients(data, 1);
    }

    patientNameHandler = (e) => {

        this.setState({
            patientName: e.target.value
        })

    }

    handlePageClick = (data) => {
        let values = {}
        values = {
            patientName: this.state.patientName
        }
        this.props.getPatients(values, data.selected + 1)
    };

    handleSearch = (e) => {
        let data = {}
        data = {
            patientName: this.state.patientName
        }


        this.props.getPatients(data, 1);

    }

    getAllPrescriptions(patient){
        let detailPage = null
        detailPage = this.props.history.push({
            pathname: "/doctor/allprescriptions",
            state: {
                patient: patient
            }
        })
    }

    render() {


        var redirectVar = null;
        if (localStorage.getItem('isPatient') == 'false' && localStorage.getItem('email')) {
            redirectVar = <Redirect to="/doctor-login" />
        }
        let patients = null
        if (this.props.patients != []) {
            patients = this.props.patients.map((patient, index) => {
                return (
                    <tr class="row100">
                        <td class="column100 column1" data-column="column1">{index + 1}</td>
                        <td class="column100 column2" data-column="column2">{patient.fName}</td>
                        <td class="column100 column3" data-column="column3">{patient.lName}</td>
                        <td class="column100 column4" data-column="column4">{patient.phone}</td>
                        <td class="column100 column5" data-column="column5">{patient.email}</td>
                        <td>
                            <a  class="" style={{ marginRight: "20px", marginLeft: '5px' }} data-toggle="tooltip" title="View!"><i class="glyphicon glyphicon-eye-open"></i></a>
                            <a onClick={() => this.getAllPrescriptions(patient)} class="" style={{ marginRight: "20px" }} data-toggle="tooltip" title="Old Forms!"><i class="glyphicon glyphicon-plus"></i></a>
                            <a href="" class="" data-toggle="tooltip" title="Download!"><i class="glyphicon glyphicon-save"></i></a>
                        </td>


                    </tr>
                )
            })
        }

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
                                    {patients}
                                </tbody>
                            </table>
                        </div>
                        <div style={{ margin: "auto", textAlign: "center" }}>
                            <ReactPaginate previousLabel={"previous"}
                                nextLabel={"next"}
                                breakLabel={<a href="">...</a>}
                                breakClassName={"break-me"}
                                pageCount={this.props.patientsPageCount}
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
        patients: state.patientreducer.patients,
        patientsPageCount: state.patientreducer.patientsPageCount,
    }
}

const mapDispatchStateToProps = dispatch => {
    return {
        getPatients: (data, page) => {

            axios.defaults.withCredentials = true;
            //make a post request with the user data
            axios.get('http://localhost:3001/getPatients', {
                headers: { Authorization: localStorage.getItem('token') },
                params: {
                    pageNo: page,
                    patientName: data.patientName
                }
            })
                .then(response => {
                    dispatch({ type: 'PATIENTS', payload: response.data, statusCode: response.status })
                    console.log("Status Code : ", response);
                })
                .catch(error => {
                    dispatch({ type: 'PATIENTS', payload: error.response.data, statusCode: error.response.status })
                });
        }
    }
}


//export Profile Component
export default (connect(mapStateToProps, mapDispatchStateToProps)(DoctorDashboard)); 