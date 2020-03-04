import React              from 'react';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import {Link}             from '@reach/router';
import * as Config        from '../config.json'
import Header             from './Header';
import NavBar             from './NavBar';
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
        <Header></Header>
        <NavBar></NavBar>
        
  
          <ul>
            {this.state.youtubers.map(youtuber => (
              <li key={`youtuber${youtuber._id}`}><Link to={`/youtuber/${youtuber._id}`}>{youtuber.title}</Link></li>
            ))}
          </ul>
          <p><Link to='/add-youtuber'>Add a new youtuber</Link></p>
          <div class="footer">
        <p>Footer</p>
        </div>
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

