import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DisplayButton from './display_button';
import LinkedButton from './linked_button';
import ExpandButton from './expand_button';

class Header extends Component {
    state = {
    } 

    render() { 
        return (
            <div className="header1 py-2 bg-dark text-white text-left row block fixed-top">
                <span className = "col h2 my-3 mx-5"><Link to="/home" className="text-decoration-none text-white"><i>ambify</i></Link></span>
                {/*<span className = "float-right mr-5"><a className="text-white" href="/login"><i className="material-symbols-outlined account">account_circle</i></a></span>
                   <p><Link to="/Ambience">Ambience</Link></p>*/}
                <span className="col-2 ">
                    <div className="row px-5">
                        <span className="col-4"><LinkedButton color="btn-primary" url="https://www.buymeacoffee.com/" text={<i className="material-symbols-outlined">local_cafe</i>} /></span>
                        <span className="col-4 displaybtn"><DisplayButton text={<i className="material-symbols-outlined">expand_more</i>} /></span>
                        <span className="col-4"><ExpandButton text={<i className="material-symbols-outlined">open_in_full</i>} /></span>
                    </div>
                </span>
            </div>
        );
    }

}
 
export default Header; 