import React from 'react';
import ReactPlayer from 'react-player';
//import Blur from 'react-blur';
import './legit.css';
import { useState } from 'react';

class SongText extends React.Component {
    render() {
        return (
            <div className="songtext">
                <input className="border-0 display-6" type="text" value={this.props.name}/>
                <input className="border-0 text-muted" value={this.props.author}/>
            </div>
        );
    }
}


export default SongText;