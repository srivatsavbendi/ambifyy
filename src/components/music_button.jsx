import React from 'react';
import ReactPlayer from 'react-player';
//import Blur from 'react-blur';
import './legit.css';
import { useState } from 'react';

class MusicButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "btn btn-lg m-1 shadow my-2", 
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
                let urls = ["images/lecygne.mp3", "images/gym.mp3", "images/pachelbel.mp3", "images/mozartpianosonata.mp3", "images/moonlightsonata.mp3", "images/avemaria.mp3", "images/goldbergvariations.mp3", "images/chopinprelude.mp3", "images/chopinnocturne.mp3"]
                let names = ["Le Cygne", "Gymnopedie No 1", "Canon", "Piano Sonata No. 16", "Moonlight Sonata", "Ave Maria", "Aria Da Capo", "Prelude Op. 28 No. 4", "Nocturne in C Sharp Minor"]
                let authors = ["Saint-Saens", "Erik Satie", "Pachelbel", "Mozart", "Beethoven", "Franz Schubert", "Bach", "Chopin", "Chopin"]
    
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

            if(this.props.type == "lofi"){
                let urls = ["images/serenity.mp3", "images/lighter.mp3", "images/somewhere.mp3", "images/disappointment.mp3", "images/distance.mp3", "images/twoofus.mp3", "images/sakura.mp3", "images/faraway.mp3", "images/deepspace.mp3", "images/loner.mp3", "images/iminlove.mp3"]
                let names = ["Serenity", "Lighter", "Somewhere", "Disappointment", "Distance", "Two Of Us", "Sakura", "Far Away", "Deep Space", "Loner", "I'm In Love"]
                let authors = ["Prod. Riddiman", "Midsummer", "Prod. Riddiman", "Prod. Riddiman", "Levi Cafe City", "Beats By Con", "Levi Cafe City", "Prod. Riddiman", "Prod. Riddiman", "Prod. Riddiman", "Eric Godlow Beats"]
    
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
            let urls = ["images/lecygne.mp3", "images/gym.mp3", "images/pachelbel.mp3", "images/mozartpianosonata.mp3", "images/moonlightsonata.mp3", "images/avemaria.mp3", "images/goldbergvariations.mp3", "images/chopinprelude.mp3", "images/chopinnocturne.mp3"]
            let names = ["Le Cygne", "Gymnopedie No 1", "Canon", "Piano Sonata No. 16", "Moonlight Sonata", "Ave Maria", "Aria Da Capo", "Prelude Op. 28 No. 4", "Nocturne in C Sharp Minor"]
            let authors = ["Saint-Saens", "Erik Satie", "Pachelbel", "Mozart", "Beethoven", "Franz Schubert", "Bach", "Chopin", "Chopin"]

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

        if(this.props.type == "jazz"){
            let urls = ["images/silverymoon.mp3", "images/together.mp3", "images/daydream.mp3"]
            let names = ["By The Light of the Silvery Moon", "Together With You", "Ipanema Daydream"]
            let authors = ["E's Jammy Jams", "JR Tundra", "Bird Creek"]

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

        if(this.props.type == "lofi"){
            let urls = ["images/serenity.mp3", "images/lighter.mp3", "images/somewhere.mp3", "images/disappointment.mp3", "images/distance.mp3", "images/twoofus.mp3", "images/sakura.mp3", "images/faraway.mp3", "images/deepspace.mp3", "images/loner.mp3", "images/iminlove.mp3"]
            let names = ["Serenity", "Lighter", "Somewhere", "Disappointment", "Distance", "Two Of Us", "Sakura", "Far Away", "Deep Space", "Loner", "I'm In Love"]
            let authors = ["Prod. Riddiman", "Midsummer", "Prod. Riddiman", "Prod. Riddiman", "Levi Cafe City", "Beats By Con", "Levi Cafe City", "Prod. Riddiman", "Prod. Riddiman", "Prod. Riddiman", "Eric Godlow Beats"]

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