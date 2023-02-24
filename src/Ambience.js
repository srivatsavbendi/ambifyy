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
import MusicButton from './components/music_button';


function Ambience() {
    const [source, setSource] = useState("");

    useEffect(() => {
        let path = "images/" + document.cookie.split("path: ")[1]; 
        setSource(path);
    })

    return (
        <div className="bgDiv" style={{ overflow: 'hidden' }}>
            <Header/>
            <video className="image-bg shadow-lg" src={source} autoplay="true" loop="true" muted="true" disabled="false" style={{ overflow: 'hidden' }}></video>
            <SidePanel />
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


