import React from 'react';
import ReactPlayer from 'react-player';
//import Blur from 'react-blur';
import './legit.css';
import { useState } from 'react';

class MusicButton extends React.Component {
    state = {
        className: "btn btn-lg m-1 shadow-lg my-2", 
        url: " ",
        isPlaying: false,
        volume: 1,
        isToggled: false
    }

    render() {

        return (
            <div>
                <button className={this.state.className} onClick={this.togglePlayback}>{this.props.text}</button>
                <ReactPlayer
                    url={this.state.url}
                    playing={this.state.isPlaying}
                    width='0'
                    height='0'
                    controls={false}
                    volume={this.state.volume}
                    onEnded={this.ended}
                />
            </div>
        );
    }

    togglePlayback = () => {
        if(this.state.isToggled) {
            this.setState({isToggled: false, className : "btn btn-lg m-1 shadow-lg "})
            this.setState({isPlaying: false});
        }else{
            this.setState({isToggled: true, className: "btn btn-primary btn-lg m-1 shadow-lg "});

            if(this.props.type == "classic"){
                let urls = ["https://www.youtube.com/watch?v=FwcPjjN-KWs&ab_channel=Butterkeks52", "https://www.youtube.com/watch?v=b44-5M4e9nI&ab_channel=ClassicalMusicOnly", "https://www.youtube.com/watch?v=eMnxjdGTK4w&ab_channel=ErikSatie-Topic"]
                let names = ["All Over", "Le Cygne", "Gymnopedie No 1"]
                let authors = ["Hey Man", "Saint-Saens", "Erik Satie"]
    
                let random = Math.floor(Math.random()*urls.length);
                console.log(random); 
                this.setState({url : urls[random]});
                this.setState({isPlaying: true});
                
                let x = names[random];
                console.log(x); 
            }
        }
    }

    ended = () => {
        if(this.props.type == "classic"){
            let urls = ["https://www.youtube.com/watch?v=FwcPjjN-KWs&ab_channel=Butterkeks52", "https://www.youtube.com/watch?v=b44-5M4e9nI&ab_channel=ClassicalMusicOnly", "https://www.youtube.com/watch?v=eMnxjdGTK4w&ab_channel=ErikSatie-Topic"]
            let names = ["All Over", "Le Cygne", "Gymnopedie No 1"]
            let authors = ["Hey Man", "Saint-Saens", "Erik Satie"]

            let random = Math.floor(Math.random()*urls.length);
            if (urls[random]==this.state.url){
                random = random + 1;
            }
            console.log(random); 
            
            this.setState({url : urls[random]});
            this.setState({isPlaying: true});
            
            let x = names[random];
            console.log(x); 
            this.props.name = x; 
        }
    }
}

MusicButton.defaultProps = {
    audioUrl:"",
    text: ""
}


export default MusicButton;