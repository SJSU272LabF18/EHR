import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';
import './../connection.css'
class Connection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
       
    }

    render(){

        var ButtonDisplay=null
        ButtonDisplay= (
                <button  style={{margin:"10px 5px 0px 35px"}}type="button" class="btn btn-outline-primary">Connect</button>
        )
        return(
            
            <div className="col-md-12" style={{margin:"auto"}} >
            <div className="col-md-12 con-search">
                <input class=" form-control " placeholder="Search" type="text" />
                <button type="submit"><i class="fa fa-search"></i></button>
            </div>
                <div className="col-md-2 your-connection-box">
                    <h1 style={{marginTop:"50%", textAlign:"center", color:"#042B89"}}>58</h1>
                    <p style={{textAlign:"center", fontSize:"20px"}}>Your Connections</p>
                    <p style={{textAlign:"center", fontSize:"15px", color:"#0F1AF2", marginTop:"5px", fontWeight:"bold"}}>View All</p>
                </div>
                <div className="col-md-6 connection-box">
                    <div className="col-md-12">
                        <h2 style={{fontWeight:"bold", color:"#0C96D2"}}>Connections</h2>
                        <span style={{width:"90%", textAlign:"center"}}><hr/></span>
                        <div className="col-md-4 people-box">   
                            <div className="col-md-3 image-box">
                                <img className="image-person" src="https://cdn-images-1.medium.com/max/1600/1*Y6l_FDhxOI1AhjL56dHh8g.jpeg"/>
                            </div>
                            <div className="col-md-4">
                                <h4 style={{ marginTop:"20px",textAlign: "center",  color:"#042B89"}}>Name</h4>
                                <p style={{textAlign:"center", fontSize:"15px"}}>Occupation</p>
                                    {ButtonDisplay}

                            </div>
                            
                        </div>
                       


                    </div>
                </div>
                <div className="col-md-2 invitation-box">
                    <h1 style={{marginTop:"30px", textAlign:"center", color:"#042B89"}}>58</h1>
                    <p style={{textAlign:"center", fontSize:"20px"}}>Your Invitation</p>
                    <p style={{textAlign:"center", fontSize:"15px", color:"#0F1AF2", marginTop:"5px", fontWeight:"bold"}}>Manage All</p>
                </div>
           </div>
        )
    }
}
export default Connection;