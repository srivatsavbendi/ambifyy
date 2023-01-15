import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from './card';

class Wall extends Component {
    state = {  } 
    render() { 
        return (
            <div className = "row m-4">
                <div className="col-4">
                    <Card bgPath="snowycozycabin.mov" title="Cozy Cabin In The Winter" author="TheBearThatsGolden"/>
                    <Card bgPath="4.gif" title="Rainy Street Corner" author="UrAWizardHarry"/>
                    <Card bgPath="13.gif" title="Cozy Spaceship" author="UrAWizardHarry"/>
                    <Card bgPath="10.gif" title="LoFi Bedroom" author="luxpae2"/>
                    <Card bgPath="10.gif" title="LoFi Bedroom" author="luxpae2"/>

                </div>
                <div className="col-4">
                    <Card bgPath="spaceastronautstaringoutofwindow.mov" title="Astronaut Gazing At The Stars" author="UrAWizardHarry"/>
                    <Card bgPath="6.gif" title="Nighttime Traffic" author="akashboletum"/>
                    <Card bgPath="7.gif" title="Cozy Cafe" author="akashboletum"/>
                    <Card bgPath="8.gif" title="Dystopian Metropolis" author="akashboletum"/>
                    <Card bgPath="14.gif" title="Suburban Neighborhood" author="UrAWizardHarry"/>
                </div>
                <div className="col-4">
                    <Card bgPath="snowycity.mov" title="Snowy City" author="UrAWizardHarry"/>
                    <Card bgPath="11.gif" title="Winter City" author="luxpae2"/>
                    <Card bgPath="12.gif" title="Street Isolation" author="luxpae2"/>
                    <Card bgPath="2.gif" title="Snowy Resort" author="earthypure"/>
                    <Card bgPath="ambify31.png" title="Snowy Resort" author="earthypure"/>
                </div>
            </div>
            
        );
    }
}
 
export default Wall;

