import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { Component, Suspense } from 'react';
import {Link} from 'react-router-dom'
import SidePanel from './components/panel'
//import Player from './components/player';
import { useEffect } from 'react';
import { useState } from 'react';
//import Blur from 'react-blur';
import App from './App';
import {str} from './App';
import Header from './components/header';
import { render } from '@testing-library/react';
import ReactPlayer from 'react-player'


function Ambience() {
    const [source, setSource] = useState("");

    useEffect(() => {
        let path = "images/" + document.cookie.split("path: ")[1]; 
        // let path = "images/1.gif";
        setSource(path);
    })

    return (
        <div className="bgDiv" style={{ overflow: 'hidden' }}>
            <Header/>
            <video className="image-bg shadow-lg" src={source} autoplay="true" loop="true" style={{ overflow: 'hidden' }}></video>
    
            {/* 
                <ReactPlayer className="image-bg shadow-lg" source="C:\Users\sriva\newambify\public\images\spaceastronautstaringoutofwindow.mov" playing="true" loop="true"/>
                <ReactPlayer
                    className="image-bg shadow-lg"
                    url="C:\Users\sriva\newambify\public\images\spaceastronautstaringoutofwindow.mov"
                    playing
                    loop
                    controls={false}
                />
            */}
            <SidePanel/>
            
        </div>
    );    
    
}

var brightness = '100%'

function onPlay() {
    this.brightness = '100%';
}

function onPause() {
    brightness = '50%';
}


export default Ambience;


