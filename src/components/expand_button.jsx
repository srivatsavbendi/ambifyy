import React from 'react';

class ExpandButton extends React.Component {
    state = { 
        isToggled : false,
        className : "btn btn-secondary btn-sm m-2 shadow-lg ",
    }
    render() { 
        return (
            <div className="">
                <button className={this.state.className} onClick={this.toggle} >{this.props.text}</button>
            </div>
        );
    }

    toggle = () => {
        if(this.state.isToggled) {
            this.setState({isToggled: false, className : "btn btn-secondary btn-sm m-2 shadow-lg "})
            document.querySelector('.bgDiv').style.width = '100vw';
            document.querySelector('.bgDiv').style.height = '100vh';

            document.querySelector('.image-bg').style.width = '60vw';
            document.querySelector('.image-bg').style.height = 'auto';
            document.querySelector('.image-bg').style.marginTop = '17vh';
            document.querySelector('.image-bg').style.marginRight = '20vw';

            document.querySelector('.paneldiv').style.display = 'block';
            document.querySelector('.paneldiv').style.marginTop = '19vh';
            document.querySelector('.paneldiv').style.marginLeft = '73vw';
            document.querySelector('.paneldiv').style.marginRight = '10vw';

            document.querySelector('.displaybtn').style.display = 'none';

            document.exitFullscreen();
        }else{
            this.setState({isToggled: true, className: "btn btn-primary btn-sm m-2 shadow-lg "});
            document.querySelector('.bgDiv').style.width = '100vw';
            document.querySelector('.bgDiv').style.height = '100vh';

            document.querySelector('.image-bg').style.width = '100vw';
            document.querySelector('.image-bg').style.height = '100vh';
            document.querySelector('.image-bg').style.margin = '0vh';

            document.querySelector('.paneldiv').style.marginTop = '13vh';
            document.querySelector('.paneldiv').style.marginLeft = '77.5vw';
            document.querySelector('.paneldiv').style.marginRight = '5vw';

            document.querySelector('.displaybtn').style.display = 'block';

            document.documentElement.requestFullscreen();
        }



        if(this.props.callback != null && typeof this.props.callback == 'function') this.props.callback();  
    }
}

export default ExpandButton;