import React              from 'react';
import {navigate, Link}   from '@reach/router';
import urlToCurrentDomain from '../lib/urlToCurrentDomain';
import * as Config        from '../config.json'
import Header             from './Header';
import NavBar             from './NavBar';
class AddYoutuber extends React.Component {

  // #######################################################
  // # Local state
  // #######################################################

  state = {
    title     : '',
    genre     : ''
  }

  // #######################################################
  // # Render
  // #######################################################

  render() {

    if (this.state.reportedError) {
      return (
        <div>
          <h1>Error</h1>
          <p>Sorry, there was an error creating the youtuber. The error was: {this.state.reportedError || 'Unknown'}</p>
          <a href='#' onClick={this.resetForRetry.bind(this)}>Try again</a>&nbsp;|&nbsp;
          <Link to='/'>Back to All youtubers</Link>
        </div>
      );

    } else if (this.state.processingAdd) {
      return (
        <div>Adding youtuber channel...</div>
      );
    } else {
      return (
        <div>
        <Header></Header>
        <NavBar></NavBar>
          <h1>Add youtuber channel</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>

            <div>
              <label>youtuber Title: 
                <input type='' value={this.state.title} onChange={this.handleTitleUpdate.bind(this)} />
              </label>
            </div>
            <div>
              <label>youtuber Genre:
                <input type='' value={this.state.genre} onChange={this.handleGenreUpdate.bind(this)} />
              </label>
            </div>
         
            {/* <div>
              <label>youtuber Content:
                <textarea value={this.state.content} onChange={this.handleContentUpdate.bind(this)}></textarea>
              </label>
            </div> */}

            <div>
              <input type='submit' value='Add Youtuber' />
            </div>

          </form>
          <Link to='/'>Back to All youtubers</Link>
        </div>
      );
    }
  }

  handleTitleUpdate(e) {
    this.setState({title: e.target.value || null});
  }

  handleGenreUpdate(e) {
    this.setState({genre: e.target.value || null});
  }

  handleSubmit(e) {

    // Prevent the default form submit action
    e.preventDefault();

    // Perform a POST call for the new data
    fetch(urlToCurrentDomain(`${Config.youtubersAPI}`), {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        authoredBy: this.state.authoredBy,
        title     : this.state.title,
        genre     : this.state.genre
      })}
    )
      .then (res  => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then (json => navigate(`/youtuber/${json._id}`))
      .catch(err => {
        this.setState({reportedError: err.message || 'Unknown'});
      })

  }

  resetForRetry() {
    this.setState({reportedError: null});
  }

  componentDidMount() {
    // this.getComments(this.props.youtuberID);
  }

}

export default AddYoutuber;
