import React              from 'react';

import '../lib/sass/main.scss';
class Header extends React.Component {

  // #######################################################
  // # Render
  // #######################################################

  render() {
      return (
<header>
          
<div class="header">
  <a href="#default" class="logo">Youtubers</a>
  <div class="header-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>

<div class="header2">
  
</div>
</header>
      
      )
    
  }
}

export default Header;

