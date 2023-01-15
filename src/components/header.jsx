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
            <div className="header1 sticky-top py-2 bg-dark text-white text-left row block">
                <span className = "col h2 my-3 mx-5"><a className="text-white text-decoration-none" href="/">Ambifyy</a></span>
                {/*<span className = "float-right mr-5"><a className="text-white" href="/login"><i className="material-symbols-outlined account">account_circle</i></a></span>
                   <p><Link to="/Ambience">Ambience</Link></p>*/}
                <span className="col-2 ">
                    <div className="row px-5">
                        <span className="col-4"><LinkedButton url="/" text={<i className="material-symbols-outlined">dark_mode</i>} /></span>
                        <span className="col-4"><ExpandButton text={<i className="material-symbols-outlined">open_in_full</i>} /></span>
                        <span className="col-4"><DisplayButton text={<i className="material-symbols-outlined">expand_more</i>} /></span>
                    </div>
                </span>
            </div>
        );
    }

}
 
export default Header; 