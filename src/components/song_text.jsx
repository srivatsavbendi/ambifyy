import React from 'react';
import ReactPlayer from 'react-player';
//import Blur from 'react-blur';
import './legit.css';
import { useState } from 'react';

class SongText extends React.Component {
    render() {
        return (
            <div className="songtext">
                <input className="bg-white border-0 display-6" disabled="true" type="text" value={this.props.name}/>
                <input className="bg-white border-0 lead m-1" disabled="true" value={this.props.author}/>
            </div>
        );
    }
}


export default SongText;