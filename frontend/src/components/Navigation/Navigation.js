import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        localStorage.removeItem('id')
        localStorage.removeItem('isRecruiter')
        let detailPage = null
        detailPage = this.props.history.push({
            pathname: "/login",
            state: {
            }
        })
    }

    render() {

        return (
            <div>
                <nav class="navbar navbar" style={{backgroundColor:"#ffffff"}}>
                    <div class="container-fluid" >
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">WebSiteName</a>
                        </div>
                      
                        <ul class="nav navbar-nav navbar-right ">
                            <li ><a href="#" style={{color:"#5A5D5C"}}><span class=" nav-icon glyphicon glyphicon-home" ></span>&nbsp; Home</a></li>
                            <li ><a href="#" style={{color:"#5A5D5C"}}><span class=" nav-icon glyphicon glyphicon-phone-alt"></span>&nbsp; Contact Us</a></li>
                            <li ><a href="#" style={{color:"#5A5D5C"}}><span class="nav-icon glyphicon glyphicon-log-in"></span>&nbsp; Admin</a></li>
                        </ul>
                        
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar;