import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';

import * as Config        from '../config.json'
import '../lib/sass/main.scss';

class Youtuber extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.youtuber && this.state.youtuberLoaded === true) {
      return (
        <p>Error loading youtubers. Try again later.</p>
      );
    } else if (!this.state.youtuber) {
      return (
        <p>Loading youtubers...</p>
      );
    } else if (this.state.youtuber.length === 0) {
      return (
        <p>Sorry, no youtubers are available</p>
      );

    }
     else {
      return (
        <div>
          <h1>{this.state.youtuber.title}</h1>
          <h1>{this.state.youtuber.genre}</h1>
          <h1>{this.state.youtuber.subs}</h1>
          <Link to='/'>Back to All youtubers</Link>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.youtubersAPI}/${this.props.youtuberID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({youtuber       : json});
        this.setState({youtuberLoaded : true});
      })
      .catch(err => {
        this.setState({youtuberLoaded: true});
      });
  }

}

export default Youtuber;
