import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from './card';

class Wall extends Component {
    state = {  } 
    render() { 
        return (
            <div className = "row m-4 mt-5">
                <div className="row mt-3">
                    <div className="col-4 mt-5">
                        <Card bgPath="paristrain.mp4" title="Train Through Paris " tag1="Landscape" tag2="City" tag3="Night"/>
                        <Card bgPath="watershoes.mov" title="Standing In The Rain" tag1="Animated" tag2="Rain" tag3="Sneakers"/>
                        <Card bgPath="girlstudying.mov" title="Cozy Studying" tag1="Animated" tag2="Room" tag3="Chill"/>
                        <Card bgPath="nightparking.mp4" title="Chill In The Car" tag1="Landscape" tag2="City" tag3="Night"/>
                        <Card bgPath="nightbridge.mp4" title="Busy Bridge At Night" tag1="Landscape" tag2="City" tag3="Night"/>
                        <Card bgPath="musicrecord.mp4" title="Spinning Records" tag1="Everyday" tag2="Room" tag3="Day"/>
                    </div>
                    <div className="col-4 mt-5">
                        <Card bgPath="darkalley.mp4" title="Dark Alley At Night" tag1="Animated" tag2="Rain" tag3="Night"/>
                        <Card bgPath="girlonledge.mov" title="Sitting On A Ledge" tag1="Animated" tag2="City" tag3="Girl"/>
                        <Card bgPath="rainleaves.mp4" title="Rainfall On Leaves" tag1="Animated" tag2="Rain" tag3="Nature"/>
                        <Card bgPath="snowytracks.mp4" title="Snowy Tracks" tag1="Landscape" tag2="Snow" tag3="City"/>
                        <Card bgPath="europeandaylight.mp4" title="European Springs" tag1="Landscape" tag2="City" tag3="Day"/>
                        <Card bgPath="paradise.mp4" title="Paradise Island" tag1="Landscape" tag2="Nature" tag3="Day"/>
                    </div>
                    <div className="col-4 mt-5">
                        <Card bgPath="snowycity.mov" title="Snowy City" tag1="Animated" tag2="Snow" tag3="Night"/>
                        <Card bgPath="spaceastronautstaringoutofwindow.mov" title="Astronaut Gazing At The Stars" tag1="Animated" tag2="Space" tag3="Astronaut"/>
                        <Card bgPath="floorleaves.mp4" title="Fall Rain" tag1="Landscape" tag2="Rain" tag3="Day"/>
                        <Card bgPath="snowycozycabin.mov" title="Cozy Cabin In The Winter" tag1="Animated" tag2="Snow" tag3="Cabin"/>
                        <Card bgPath="lushwaterfall.mp4" title="Lush Waterfall" tag1="Landscape" tag2="Nature" tag3="Day"/>
                        <Card bgPath="englandnight.mp4" title="An English Night" tag1="Landscape" tag2="City" tag3="Night"/>
                    </div>
                </div>
            </div>
            
        );
    }
}
 
export default Wall;

