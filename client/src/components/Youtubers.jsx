import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config.json'

class Cakes extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {}

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (!this.state.youtubers && this.state.youtubersLoaded === true) {
      return (
        <p>Error loading youtubers. Try again later.</p>
      );
    } else if (!this.state.youtubers) {
      return (
        <p>Loading youtubers...</p>
      );
    } else if (this.state.youtubers.length === 0) {
      return (
        <p>Sorry, no youtubers are available</p>
      );
    } else {
      return (
        <div>
          <h1>All youtubers in the database</h1>
          <ul>
            {this.state.youtubers.map(youtube => (
              <li key={`youtube${youtube._id}`}><Link to={`/youtube/${youtube._id}`}>{youtube.title}</Link></li>
            ))}
          </ul>
          <p><Link to='/add-youtube'>Add a new youtube</Link></p>
        </div>
      )
    }
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

export default Youtubers;

