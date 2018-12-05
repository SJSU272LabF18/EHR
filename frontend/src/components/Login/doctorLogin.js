import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import jwt_decode from 'jwt-decode';
import '../../App.css';
import '../../Homepage.css'
import logo from './../HomePage/logo.png'


class DoctorLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderFieldEmail(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control login-signup" type="email" {...field.input} style={{ backgroundColor: "#75BDA1", opacity: "0.8", height: "50px", borderColor: "#40896D" }} />
                <div className="text-help" style={{color:"#F5160B"}}>
                    {touched ? error : ""}
                </div>
            </div>
        );
    }
    renderFieldPassword(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control login-signup" type="password" {...field.input} style={{ backgroundColor: "#75BDA1", opacity: "0.8", height: "50px", borderColor: "#40896D" }} />
                <div className="text-help" style={{color:"#F5160B"}}>
                    {touched ? error : ""}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.login(values);
    }

    componentWillMount() {

    }

    render() {
        let redirectVar = null;
        if (this.props.authFlag) {
            redirectVar = <Redirect to="/doctor/dashboard" />
        }
        const { handleSubmit } = this.props;

        return (
            <div >
                <div className="col-md-12" style = {{margin : "auto"}}>
                    {redirectVar}
                    <div className="doctorloginBox col-md-12 " >
                        <div className="col-md-12" style={{ textAlign: "center" }}>
                            <h1 style={{ color: "#4ABF91", fontWeight:"bolder" }}> Doctor's Login </h1>
                            <p style={{color:"#ff4848"}}>{this.props.errormsg}</p>
                        </div>
                        <div className="form-group col-md-12">
                            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                                <Field style={{ backgroundColor: "#3FF8F0", opacity: "15" }}
                                    label="Email"
                                    name="email"
                                    component={this.renderFieldEmail}
                                />

                                <Field
                                    label="Password"
                                    name="password"
                                    component={this.renderFieldPassword}
                                />
                            <div className="col-md-4"></div>
                            <div className="col-md-3">
                                <button type="submit" className="btn btn-success btn-lg">Login</button>
                            </div>
                            </form>
                    </div>
                </div>
            </div>
            </div > 
        );
    }
}

function validate(values) {

    const errors = {};

    // Validate the inputs from 'values'
    if (!values.email) {
        errors.email = "Enter an Email";
    }
    if (!values.password) {
        errors.password = "Enter Password";
    }
    return errors;
}

const mapStateToProps = state => {
    return {
        authFlag: state.appreducer.authFlag,
        errormsg: state.appreducer.errormsg
    }
}

const mapDispatchStateToProps = dispatch => {
    return {
        login: (values) => {
            const data = {
                email: values.email,
                password: values.password
            }
            axios.defaults.withCredentials = true;
            axios.post('http://localhost:3001/doctorlogin', data)
                .then(response => {
                    localStorage.setItem('token', response.data.token)
                    const decoded = jwt_decode(response.data.token)
                    localStorage.setItem('email',decoded.email )
                    localStorage.setItem('name',decoded.name )
                    localStorage.setItem('isPatient',decoded.userType )
                    dispatch({ type: 'LOGIN', payload: response.data, statusCode: response.status })
                })
                .catch(error => {
                    console.log(error)
                    dispatch({ type: 'LOGIN', payload: error.response, statusCode: error.response.status })
                })
        }
    }
}

export default reduxForm({
    validate,
    form: "login"
})(connect(mapStateToProps, mapDispatchStateToProps)(DoctorLogin));

