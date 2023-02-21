import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DisplayButton from './display_button';
import LinkedButton from './linked_button';
import ExpandButton from './expand_button';

class LandingHeader extends Component {
    state = {
    } 

    render() { 
        return (
            <div className="header1 py-2 bg-dark text-white text-left row block fixed-top">
                <span className = "col h2 my-3 mx-5"><a className="text-white text-decoration-none" href="/home">Ambify</a></span>
            </div>
        );
    }

}
 
export default LandingHeader; 