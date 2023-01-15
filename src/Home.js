import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import LinkedButton from './components/linked_button'
import Header from './components/header';
import Wall from './components/wall';

class Home extends Component {
    state = {
    }
    render() { 
        return (
            <div style={{ overflow: 'hidden' }}>   
                <Header/>
                <Wall/>
            </div>
        );
    }

}
 
export default Home;