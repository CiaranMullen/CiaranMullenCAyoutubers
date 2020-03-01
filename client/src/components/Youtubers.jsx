import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config.json'

class Youtubers extends React.Component {

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
        <div class="navbar">
        <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
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
        
  
          <ul>
            {this.state.youtubers.map(youtuber => (
              <li key={`youtuber${youtuber._id}`}><Link to={`/youtuber/${youtuber._id}`}>{youtuber.title}</Link></li>
            ))}
          </ul>
          <p><Link to='/add-youtuber'>Add a new youtuber</Link></p>
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

