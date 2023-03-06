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
                <span className = "col h2 my-3 mx-5"><Link to="/home" className="text-decoration-none text-white"><i>ambifyy</i></Link></span>
                <span className="col-2">
                    <div className="row px-5">
                        <span className="col-3"></span>
                        <span className="col-4"><LinkedButton title="Provide feedback" color="btn-secondary" url="mailto:srivatsavbendi@gmail.com" text={<i className="material-symbols-outlined">mail</i>} /></span>
                        <span className="col-4"><LinkedButton title="Support Ambify" color="btn-primary" url="https://www.buymeacoffee.com/" text={<i className="material-symbols-outlined">local_cafe</i>} /></span>
                    </div>
                </span>
            </div>
        );
    }

}
 
export default LandingHeader; 
