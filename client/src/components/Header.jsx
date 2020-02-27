import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config.json'
import main               from '../lib/sass';
class Header extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {
      return (
        <div>
          <h1>All youtubers in the database</h1>  
        </div>
      )
    
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(Config.youtubersAPI))
      .then (res  => res.json())
      .then (json => {
        this.setState({youtubers       : json});
        this.setState({youtubersLoaded : true});
      })
      .catch(err => {
        this.setState({youtubersLoaded: true});
      });
  }

}

export default Headers;

