import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName:""
        }
        this.fnameHandler = this.fnameHandler.bind(this);
    }
    fnameHandler = (e) => {
        this.props.updateValues({
            ...{fName:e.target.value}
          });
    }
    render(){
        return(
            <div className="container" >
                <div className="col-md-12 form-box">
                    <div className="col-md-12">
                        <h2 className="form-heading">Patient Registration</h2>
                        < hr/>
                    </div>
                    <div className="col-md-12">
                    <form role="form"> 
                       
                            <div class=" form-group col-md-5">
                            <label>First Name</label>
                            <div class="input-group">
                                <span class="input-group-addon "><span class="glyphicon glyphicon-user"></span></span>
                                <input class="form-control right-border-none" placeholder="First Name" type="text" name="username" onChange={this.fnameHandler} defaultValue={this.state.fName}/>
                                <span class="input-group-addon transparent"><i class="fa fa-microphone icon-size"></i></span>
                            </div>
                            </div>
                      
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration;