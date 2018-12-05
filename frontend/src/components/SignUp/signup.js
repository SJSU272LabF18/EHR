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

class Signup extends Component {
     constructor(props) {
     super(props);
     this.state = {
       
    }
    }

    renderFieldText(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control login-signup" type="text" {...field.input} style={{backgroundColor:"#75BDA1",opacity:"0.8", height:"50px", borderColor:"#40896D"}}/>
                <div className="text-help" style={{color:"#F5160B"}}>
                    {touched ? error : ""}
                </div>
            </div>
        );
    }

    renderFieldEmail(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control login-signup" type="email" {...field.input} style={{backgroundColor:"#75BDA1",opacity:"0.8", height:"50px", borderColor:"#40896D"}}/>
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
                <input className="form-control login-signup" type="password" {...field.input}   style={{backgroundColor:"#75BDA1",opacity:"0.8", height:"50px", borderColor:"#40896D", }}/>
                <div className="text-help">
                    {touched ? error : ""}
                </div>
            </div>
        );
    }
 
    onSubmit(values){
        this.props.login(values);
    }

    componentWillMount() {
      
    }

    render() {
        let redirectVar = null;
        if(this.props.authFlag){
            redirectVar = <Redirect to = "/patient-registration" />
        }
        const { handleSubmit } = this.props;
        console.log(this.props.errormsg)
        return (
            <div>
            <div className="col-md-12 backgroundBox background-img" > </div>
            <navbar  style={{position:"absolute", opacity:"0.6", width:"100%"}}>
                <span id="brand">
                    <a href="javascript:;"><img src={logo} style={{marginTop:"10px", opacity:"1"}}/></a>
                </span>
                <ul id="menu">
                    <li><a href="javascript:;">HOME</a></li>
                    <li><a href="javascript:;">SERVICES</a></li>
                    <li><a href="javascript:;">NEW PATIENT</a></li>
                    <li><a href="javascript:;">EXISTING PATIENT</a></li>
                    <li><a href="javascript:;">ADMIN</a></li>
                </ul>
                </navbar>
            <div className="col-md-12">
                {redirectVar}
                <div className="signupBox col-md-12" >
                    <div className="col-md-12" style={{textAlign:"center"}}>
                        <h1 style={{color:"#4ABF91", fontWeight:"bolder"}}> Signup </h1>
                        <h4>Returning Patient? <Link to="/signup">Login</Link></h4>
                        <p style={{color:"#ff4848"}}>{this.props.errormsg}</p>
                    </div>
                    <div className="form-group col-md-12">
                            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                <Field  
                                    label="First Name"
                                    name="fName"
                                    component={this.renderFieldText}
                                />
                                 <Field  
                                    label="Last Name"
                                    name="lName"
                                    component={this.renderFieldText}
                                />
                                <Field 
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
                                <button type="submit" className="btn btn-success btn-lg" >Signup</button>
                                </div>
                            </form>
                        </div>
                   </div>
                </div>    
            </div>

        );
    }
}

    function validate(values) {

    const errors = {};

    // Validate the inputs from 'values'
    if (!values.email) {
        errors.email = "Enter an Email";
    }
    if (!values.fName) {
        errors.email = "Enter your First Name";
    }
    if (!values.lName) {
        errors.email = "Enter your Last Name";
    }
    if (!values.password) {
        errors.password = "Enter Password";
    }
    return errors;
    }

    const mapStateToProps = state => {
        return{
            authFlag: state.appreducer.authFlag,
            errormsg: state.appreducer.errormsg
        }
    }

    const mapDispatchStateToProps = dispatch => {
        return {
            login:(values) =>{
                const data = {
                    email: values.email,
                    password: values.password,
                    fName: values.fName,
                    lName: values.lName,
                    isPatient : true
                }
                axios.defaults.withCredentials = true;
                axios.post('http://localhost:3001/signup', data)
                    .then(response => {
                        localStorage.setItem('token', response.data.token)
                        const decoded = jwt_decode(response.data.token)
                        localStorage.setItem('decoded_email',decoded.email )
                        localStorage.setItem('decoded_lname',decoded.lname )
                        localStorage.setItem('decoded_fname',decoded.fname )
                        dispatch({type: 'SIGNUP', payload: response.data, statusCode: response.status})
                    })
                    .catch(error => {
                        console.log(error)
                        dispatch({type: 'SIGNUP', payload: error.response, statusCode: error.response.status})
                    })
            } 
        }
    }

    export default reduxForm({
    validate,
    form: "signup"
    })(connect(mapStateToProps, mapDispatchStateToProps)(Signup));

  