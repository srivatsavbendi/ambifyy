import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class LinkedButton extends React.Component {
    state = { 
        isToggled : true,
        className : "btn btn-secondary btn-sm m-2 shadow-lg ",
    }

    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div >
                <a href={this.props.url}>
                    <button className={this.state.className}>{this.props.text}</button>
                </a>
            </div>
        );
    }

}

LinkedButton.defaultProps = {
    className:"",
    text:"button"
};

export default LinkedButton;