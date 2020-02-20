import React              from 'react';
import {Link}             from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'

class Cake extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.cake && this.state.cakeLoaded === true) {
      return (
        <p>Error loading cakes. Try again later.</p>
      );
    } else if (!this.state.youtube) {
      return (
        <p>Loading youtubers...</p>
      );
    } else if (this.state.youtube.length === 0) {
      return (
        <p>Sorry, no youtubers are available</p>
      );
    } else {
      return (
        <div>
          <h1>{this.state.youtube.title}</h1>
          <Link to='/'>Back to All cakes</Link>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch(urlToCurrentDomain(`${Config.youtubersAPI}/${this.props.youtubeID}`))
      .then (res  => res.json())
      .then (json => {
        this.setState({youtube       : json});
        this.setState({youtubeLoaded : true});
      })
      .catch(err => {
        this.setState({youtubeLoaded: true});
      });
  }

}

export default Youtube;
