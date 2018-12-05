import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import '../../Navigation.css';

import logo from './logo.png'

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '../../menuContent.css';

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
        let navbar = null
        
        
            navbar = (
                <div>
                <nav className="nav" style={{ height: "50px"}}>
                    <span id="brandnav" style={{ paddingTop: "0px" }}>

                        <img src={logo} style={{ height: "45px", marginTop: "0px" }} />
                    </span>
                    <ul id="menunav">
                        <li><a href="javascript:;">HOME</a></li>
                        <li><a href="javascript:;">SERVICES</a></li>
                        <li><a href="javascript:;"></a></li>
                        <li onClick={this.handleLogout}><a >Logout</a></li>
                    </ul>
                </nav>
                <SideNav
                    onSelect={(selected) => {
                        console.log(selected)
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Charts
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                </div>
            )
        
        return (
            <div class="containerFluid" >
                {navbar}
            </div>


        )
    }
}

export default Navbar;