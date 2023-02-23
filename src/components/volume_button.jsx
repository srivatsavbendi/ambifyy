import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class VolumeButton extends React.Component {
    state = { 
        isToggled : true,
        className : "btn btn-sm m-2 shadow-lg ",
    }

    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div >
                <a href={this.props.url}>
                    <button className={this.state.className} onClick={this.setV}>hi</button>
                </a>
            </div>
        );
    }

    setV = () => {
        this.props.setVolume("0");
        console.log("hello"); 
    }
}

VolumeButton.defaultProps = {
    className:"",
    text:"button"
};

export default VolumeButton;