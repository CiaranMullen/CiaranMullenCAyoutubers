import React    from 'react';
import {Router} from "@reach/router";
import Header  from './Header';
import Youtubers   from './Youtubers';
import Youtuber    from './Youtuber';
import AddYoutuber from './AddYoutuber';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Header      path='/Header'/>
        <Youtubers   path='/' />      
        <Youtuber    path='/youtuber/:youtuberID' />
        <AddYoutuber path='/add-youtuber/' />
      </Router>
    );
  }

}

export default App;
