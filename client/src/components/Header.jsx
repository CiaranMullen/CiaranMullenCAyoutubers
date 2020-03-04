import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config.json'
import '../lib/sass/main.scss';
class Header extends React.Component {

  // #######################################################
  // # Render
  // #######################################################

  render() {
      return (
        <header>
          <div class="Header">
          <h1>My youtubers website</h1>  
          </div>
        </header>
      
      )
    
  }
}

export default Header;

