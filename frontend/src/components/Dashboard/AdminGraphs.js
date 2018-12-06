import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import axios from 'axios';
import ReactChartkick, { BarChart, PieChart, ColumnChart } from 'react-chartkick'
import Chart from 'chart.js';


ReactChartkick.addAdapter(Chart)

class AdminGarphs extends Component {

    constructor(props) {

        super(props);

        this.state = {
            patientstatistics: [],
            statistics2: []

        }

    }



    componentDidMount() {

        axios.defaults.withCredentials = true;
        axios.get('http://localhost:3001/getpatientstatistics', {
            headers: { Authorization: localStorage.getItem('token') },
            params: {
                email: localStorage.getItem('email'),
            }
        })
            .then(response => {
                console.log(response)
                var cityWiseData = []
                response.data.map(city => {
                    cityWiseData.push([city['_id'], city['total']])
                })
                console.log(cityWiseData)
                this.setState({
                    patientstatistics: cityWiseData
                })
            })
            .catch(error => {
                console.log("Error : ", error);
                this.setState({

                })
            });

        axios.defaults.withCredentials = true;
        axios.get('http://localhost:3001/getstatisticsbydiagnosis', {
            headers: { Authorization: localStorage.getItem('token') },
            params: {
                email: localStorage.getItem('email'),
            }
        })
            .then(response => {
                console.log(response)
                var cityWiseData = []
                response.data.map(city => {
                    cityWiseData.push([city['_id'], city['total']])
                })
                console.log(cityWiseData)
                this.setState({
                    statistics2: cityWiseData
                })
            })
            .catch(error => {
                console.log("Error : ", error);
                this.setState({

                })
            });

    }
    render() {
        let redirectVar = null;
        if (!localStorage.getItem('email') || localStorage.getItem('isPatient') == 'true') {
            redirectVar = <Redirect to="/doctor/login" />
        }

        return (
            <div class="containerFluid" >
                {redirectVar}
                <div className="col-md-12">
                    <div className="col-md-2"></div>
                    <div className="col-md-9 card" style={{ padding: "25px", height: '400px' }}>
                        <div className="col-md-6" style={{ backgroundColor: "#fff" }}>
                            <div className="col-md-12">
                                <h4 style={{ marginBottom: '20px', textAlign: 'center' }}>Case demographics of this month</h4>
                            </div>
                            <div className="col-md-12">
                                <PieChart data={this.state.patientstatistics} donut={true} legend="bottom" />
                            </div>
                        </div>
                        <div className="col-md-6" style={{ backgroundColor: "#fff" }}>
                            <div className="col-md-12">
                                <h4 style={{ marginBottom: '20px' , textAlign: 'center'}}>Number of patients per diagnosis result</h4>
                            </div>
                            <div className="col-md-12">
                                <BarChart data={this.state.statistics2} colors={["#415aa8"]} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default AdminGarphs;