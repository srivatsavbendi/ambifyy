import React from 'react';
import ReactPlayer from 'react-player';
//import Blur from 'react-blur';
import './legit.css';
import { useState } from 'react';

class MusicButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "btn btn-lg m-1 shadow-lg my-2", 
            url: "",
            songName: " ",
            songAuthor: " "
        }
    }

    render() {

        return (
            <div>
                <button className={this.state.className} onClick={this.togglePlayback}>{this.props.text}</button>
                <audio ref="audioRef" src="" onEnded={this.ended}/>
            </div>
        );
    }


    togglePlayback = () => {
        if(this.state.isToggled) {
            this.setState({isToggled: false, className : "btn btn-lg m-1 shadow-lg "})
            this.refs.audioRef.pause();
        }else{
            this.setState({isToggled: true, className: "btn btn-primary btn-lg m-1 shadow-lg "});

            if(this.props.type == "classic"){
                let urls = ["images/sealbounce.mp3", "images/lecygne.mp3", "images/gym.mp3"]
                let names = ["All Over", "Le Cygne", "Gymnopedie No 1"]
                let authors = ["Hey Man", "Saint-Saens", "Erik Satie"]
    
                let random = Math.floor(Math.random()*urls.length);

                let x = names[random];
                let y = authors[random];
                this.props.updateSongName(x);
                this.props.updateSongAuthor(y);
                this.setState({url: urls[random]}); 
                this.refs.audioRef.src = urls[random];
                this.refs.audioRef.play();


            }

            if(this.props.type == "jazz"){
                let urls = ["images/silverymoon.mp3", "images/together.mp3", "images/daydream.mp3"]
                let names = ["By The Light of the Silvery Moon", "Together With You", "Ipanema Daydream"]
                let authors = ["E's Jammy Jams", "JR Tundra", "Bird Creek"]
    
                let random = Math.floor(Math.random()*urls.length);

                let x = names[random];
                let y = authors[random];
                this.props.updateSongName(x);
                this.props.updateSongAuthor(y);
                this.setState({url: urls[random]}); 
                this.refs.audioRef.src = urls[random];
                this.refs.audioRef.play();


            }
        }
    }

    ended = () => {
        if(this.props.type == "classic"){
            let urls = ["images/sealbounce.mp3", "images/lecygne.mp3", "images/gym.mp3"]
            let names = ["All Over", "Le Cygne", "Gymnopedie No 1"]
            let authors = ["Hey Man", "Saint-Saens", "Erik Satie"]

            let random1 = Math.floor(Math.random()*urls.length);
            if (urls[random1]==this.state.url){
                random1 = random1 + 1;
            }

            let x = names[random1];
            let y = authors[random1];
            this.props.updateSongName(x);
            this.props.updateSongAuthor(y);
            this.refs.audioRef.src = urls[random1];
            this.refs.audioRef.play();
        }
    }
}

MusicButton.defaultProps = {
    audioUrl:"",
    text: ""
}


export default MusicButton;