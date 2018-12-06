import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';
import Button from '@material-ui/core/Button';
import "../../dashboardButton.css";
import Fade from '@material-ui/core/Fade';

class dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      registrationDetails: "",
      emergencyDetails : "",
      registerResponse: false,
      emergencyResponse : false
    }
  }


  componentDidMount() {

    axios.defaults.withCredentials = true;
    axios.get('http://localhost:3001/registrationdetails',
      {
        params: {
          email: localStorage.getItem('email')
        }
      })
      .then(response => {
        console.log("Status Code : ", response.status);
        if (response.status === 200 && response.data.length != 0) {
          this.setState({
            registerResponse: true,
            registrationDetails: response.data
          })

        } else {
          this.setState({
            registerResponse: false
          })
        }
      })
      .catch(error => {
        this.setState({
        
        })
      });

    axios.get('http://localhost:3001/emergencydetails',
      {
        params: {
          email: localStorage.getItem('email')
        }
      })
      .then(response => {
        console.log("Status Code : ", response.status);
        if (response.status === 200 && response.data.length != 0) {
          this.setState({
            emergencyResponse: true,
            emergencyDetails: response.data
          })

        } else {
          this.setState({
            emergencyResponse: false
          })
        }
      })
      .catch(error => {
        this.setState({
          
        })
      });


  }

  render() {

    let changeReg = null;
    let changeReglink = null;
    let changeEmeg = null;
    let changeEmglink = null

    if (this.state.registerResponse == false) {
      changeReg = "button"
      changeReglink = "/patient/registration"
    } else {
      changeReg = "button-filled"
      changeReglink = "/patient/edit/registration"
    }

    if (this.state.emergencyResponse == false) {
      changeEmeg = "button"
      changeEmglink = "/patient/emergency-contact"
    } else {
      changeEmeg = "button-filled"
      changeEmglink = "/patient/edit/emergency-contact"
    }

    return (
      <div className="col-md-12 form-box" class="a">
        <a href={changeReglink}><Button class={changeReg}
          aria-haspopup="true">
          Registration
        </Button></a>
        <br /><br />
        <a href={changeEmglink}>
          <Button class={changeEmeg}
            aria-haspopup="true"
          >
            Emergency Contact
      </Button></a>
        <br /><br />
        <a href="">
          <Button class="button"
            aria-haspopup="true"
          >
            Physical Health Record
      </Button></a>
        <br /><br />
        <a href="">
          <Button class="button"
            aria-haspopup="true"
          >
            Insurance
      </Button></a>
      </div>

    )
  }
}


export default dashboard;