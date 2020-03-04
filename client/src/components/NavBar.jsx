import React from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import { Link } from '@reach/router';
import * as Config from '../config.json'
import '../lib/sass/main.scss';
class NavBar extends React.Component {

    // #######################################################
    // # Render
    // #######################################################

    render() {
        return (

            <div>
                <div class="navbar">

                    <ul>
                        <li><a href="http://localhost:3001/">Home</a></li>
                        <li><a href="http://localhost:3000/youtubers">JSONView</a></li>
                        <li class="dropdown">
                            <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </li>
                    </ul>

                </div>

            </div>


        )

    }
}

export default NavBar;

