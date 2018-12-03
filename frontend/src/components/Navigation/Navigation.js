import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import '../../Navigation.css';
import logo from './logo.png'
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
            <div class="containerFluid" >       
                <nav style={{height:"50px"}}>
                <span id="brandnav" style={{paddingTop:"0px"}}>
                   <img src={logo} style={{height:"45px", marginTop:"0px"}}/>
                </span>
                <ul id="menunav">
                    <li><a href="javascript:;">HOME</a></li>
                    <li><a href="javascript:;">SERVICES</a></li>
                    <li><a href="javascript:;"></a></li>
                    <li onClick={this.handleLogout}><a >Logout</a></li>
                </ul>
                </nav> 
            </div>
           
            
        )
    }
}

export default Navbar;