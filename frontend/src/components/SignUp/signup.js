import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import jwt_decode from 'jwt-decode';
import '../../App.css';


class Login extends Component {
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
            redirectVar = <Redirect to = "/" />
        }
        const { handleSubmit } = this.props;
        
        return (
            <div>
            <div className="col-md-12 backgroundBox background-img" > </div>
            <div className="col-md-12">
                {redirectVar}
                <div className="signupBox col-md-12" >
                    <div className="col-md-12" style={{textAlign:"center"}}>
                        <h1 style={{color:"#4ABF91", fontWeight:"bolder"}}> Signup </h1>
                        <h4>Returning Patient? <Link to="/signup">Login</Link></h4>
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
                    lName: values.lName
                }
                axios.defaults.withCredentials = true;
                axios.post('http://localhost:3001/signup', data)
                    .then(response => {
                        // localStorage.setItem('token', response.data.token)
                        // const decoded = jwt_decode(response.data.token)
                        // localStorage.setItem('decoded_email',decoded.email )
                        // localStorage.setItem('decoded_userType',decoded.userType )
                        // localStorage.setItem('decoded_name',decoded.name )
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
    })(connect(mapStateToProps, mapDispatchStateToProps)(Login));

  