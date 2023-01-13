import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Ambience from '../Ambience';
import { useState } from 'react';
import App from '../App';
import {str} from '../App';

class Card extends Component{

    render() { 
        return (
            <div className="card m-3 mb-5 text-black bg-white shadow-lg" onClick={this.fullScreen} style={{cursor: "pointer"}}>
                <video className="card-img-top" src={"images/" + this.props.bgPath} autoplay="true" loop="true" ></video>
                <div className="card-body row">
                    <div className="text-left col-10 pl-10">
                        <h2 className="card-title m-2">{this.props.title}</h2>
                        <span class="badge bg-primary p-2 m-2"><b>Winter</b></span>
                        <span class="badge bg-primary p-2 m-2"><b>Cabin</b></span>
                        <span class="badge bg-primary p-2 m-2"><b>Snow</b></span>
                    </div>
                    
                   
                </div>
            </div>
        );
    }

    fullScreen = () => {
        let x = "path: " + this.props.bgPath;
        console.log(x); 
        document.cookie = x; 
        document.location.pathname = "/ambience"; 
        document.documentElement.requestFullscreen();
    }
}
 
export default Card;