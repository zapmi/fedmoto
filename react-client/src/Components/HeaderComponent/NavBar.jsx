import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to="">Storage spaces going fast! - BOOK TODAY!!!</Link></li>
        </ul>
      </header>
      
    )
  }
}
export default NavBar;