import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';
import Button from '@material-ui/core/Button';
import "../../dashboardButton.css";
import Fade from '@material-ui/core/Fade';

class dashboard extends Component {

  
    render() {
        
        return (
      <div className="col-md-12 form-box" class="a">
        <a href=""><Button class="button"
          aria-haspopup="true"
        >
          Registration 
        </Button></a>
        
        <br />
        <a href="">
        <Button class="button"
        aria-haspopup="true"
      >
        Physical Health Record
      </Button></a>
      <br />
      <a href="">
        <Button class="button"
        aria-haspopup="true"
      >
        Purpose of Visit
      </Button></a>
      <br />
      <a href="">
        <Button class="button"
        aria-haspopup="true"
      >
        Emergency Contact
      </Button></a>


      </div>

        )
    }
}
    

export default dashboard;