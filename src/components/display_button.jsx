import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class DisplayButton extends React.Component {
    state = { 
        isToggled : false,
        className : "btn btn-secondary btn-sm m-2 shadow-lg ",
    }
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div >
                <button className={this.state.className} onClick={this.toggle} >{this.props.text}</button>
            </div>
        );
    }

    toggle = () => {
        if(this.state.isToggled) {
            this.setState({isToggled: false, className : "btn btn-secondary btn-sm m-2 shadow-lg "})
            document.querySelector('.paneldiv').style.display = 'none';

        }else{
            this.setState({isToggled: true, className: "btn btn-primary btn-sm m-2 shadow-lg "});
            {/* console.log("toggled"); */}
            document.querySelector('.paneldiv').style.display = 'block';
        }
        if(this.props.callback != null && typeof this.props.callback == 'function') this.props.callback();  
        }
}

DisplayButton.defaultProps = {
    className:"",
    text:"button"
};

export default DisplayButton;