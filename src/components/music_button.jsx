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
                let urls = ["images/silverymoon.mp3", "images/together.mp3", "images/daydream.mp3", "images/jazz1.mp3", "images/jazz2.mp3", "images/jazz3.mp3", "images/jazz4.mp3", "images/jazz5.mp3", "images/jazz6.mp3", "images/jazz7.mp3", "images/jazz8.mp3", "images/jazz9.mp3", "images/jazz10.mp3", "images/jazz11.mp3", "images/jazz12.mp3", "images/jazz13.mp3", "images/jazz14.mp3", "images/jazz15.mp3", "images/jazz16.mp3", "images/jazz17.mp3", "images/jazz18.mp3"]
                let names = ["By The Light of the Silvery Moon", "Together With You", "Ipanema Daydream", "A Night Alone", "Almost A Year Ago", "Bet On It", "Bluesy Vibes", "Book Bag", "Ersatz Bossa", "George Street Shuffle", "Home For The Holidays", "Just As Soon", "Long Stroll", "Nighttime Stroll", "Soul And Mind", "The Night Falling", "Together With You", "With A Stamp", "Marshmallow", "Sunset", "Cold"]
                let authors = ["E's Jammy Jams", "JR Tundra", "Bird Creek", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo"]
    
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
                let urls = ["images/serenity.mp3", "images/lighter.mp3", "images/somewhere.mp3", "images/disappointment.mp3", "images/distance.mp3", "images/twoofus.mp3", "images/sakura.mp3", "images/faraway.mp3", "images/deepspace.mp3", "images/loner.mp3", "images/iminlove.mp3", "images/softeyes.mp3", "images/rainingoutside.mp3", "images/solitary.mp3", "images/dontleave.mp3", "images/bluemoon.mp3", "images/thecalm.mp3", "images/needingyou.mp3", "images/sorry.mp3", "images/mindful.mp3", "images/serenity1.mp3", "images/pixelcity.mp3", "images/patience.mp3", "images/workinglate.mp3"]
                let names = ["Serenity", "Lighter", "Somewhere", "Disappointment", "Distance", "Two Of Us", "Sakura", "Far Away", "Deep Space", "Loner", "I'm In Love", "Soft Eyes", "Raining Outside", "Solitary", "Don't Leave", "Blue Moon", "The Calm", "Needing You", "Sorry", "Mindful", "Serenity", "Pixel City", "Patience", "Working Late"]
                let authors = ["Prod. Riddiman", "Midsummer", "Prod. Riddiman", "Prod. Riddiman", "Levi Cafe City", "Beats By Con", "Levi Cafe City", "Prod. Riddiman", "Prod. Riddiman", "Prod. Riddiman", "Eric Godlow Beats", "Jxsie Beats", "Prod. Kosei", "Prod. Riddiman", "Prod. Moon", "Eric Godlow Beats", "Beats By Con", "Prod. Riddiman", "Prod. Riddiman", "Nightwave Beats", "Prod. Kxl", "Fezco", "JadynDolaBeats", "Ambient Chill"]
            
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
            let urls = ["images/silverymoon.mp3", "images/together.mp3", "images/daydream.mp3", "images/jazz1.mp3", "images/jazz2.mp3", "images/jazz3.mp3", "images/jazz4.mp3", "images/jazz5.mp3", "images/jazz6.mp3", "images/jazz7.mp3", "images/jazz8.mp3", "images/jazz9.mp3", "images/jazz10.mp3", "images/jazz11.mp3", "images/jazz12.mp3", "images/jazz13.mp3", "images/jazz14.mp3", "images/jazz15.mp3", "images/jazz16.mp3", "images/jazz17.mp3", "images/jazz18.mp3"]
            let names = ["By The Light of the Silvery Moon", "Together With You", "Ipanema Daydream", "A Night Alone", "Almost A Year Ago", "Bet On It", "Bluesy Vibes", "Book Bag", "Ersatz Bossa", "George Street Shuffle", "Home For The Holidays", "Just As Soon", "Long Stroll", "Nighttime Stroll", "Soul And Mind", "The Night Falling", "Together With You", "With A Stamp", "Marshmallow", "Sunset", "Cold"]
            let authors = ["E's Jammy Jams", "JR Tundra", "Bird Creek", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo", "Mogo Mogo"]

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
            let urls = ["images/serenity.mp3", "images/lighter.mp3", "images/somewhere.mp3", "images/disappointment.mp3", "images/distance.mp3", "images/twoofus.mp3", "images/sakura.mp3", "images/faraway.mp3", "images/deepspace.mp3", "images/loner.mp3", "images/iminlove.mp3", "images/softeyes.mp3", "images/rainingoutside.mp3", "images/solitary.mp3", "images/dontleave.mp3", "images/bluemoon.mp3", "images/thecalm.mp3", "images/needingyou.mp3", "images/sorry.mp3", "images/mindful.mp3", "images/serenity1.mp3", "images/pixelcity.mp3", "images/patience.mp3", "images/workinglate.mp3"]
            let names = ["Serenity", "Lighter", "Somewhere", "Disappointment", "Distance", "Two Of Us", "Sakura", "Far Away", "Deep Space", "Loner", "I'm In Love", "Soft Eyes", "Raining Outside", "Solitary", "Don't Leave", "Blue Moon", "The Calm", "Needing You", "Sorry", "Mindful", "Serenity", "Pixel City", "Patience", "Working Late"]
            let authors = ["Prod. Riddiman", "Midsummer", "Prod. Riddiman", "Prod. Riddiman", "Levi Cafe City", "Beats By Con", "Levi Cafe City", "Prod. Riddiman", "Prod. Riddiman", "Prod. Riddiman", "Eric Godlow Beats", "Jxsie Beats", "Prod. Kosei", "Prod. Riddiman", "Prod. Moon", "Eric Godlow Beats", "Beats By Con", "Prod. Riddiman", "Prod. Riddiman", "Nightwave Beats", "Prod. Kxl", "Fezco", "JadynDolaBeats", "Ambient Chill"]

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