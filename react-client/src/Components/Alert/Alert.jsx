import React, { Component } from 'react';
import "./Alert.css"
import { Link } from 'react-router-dom';
class Alert extends Component {
  render() {
    return (
      <header>
        <a href="https://www.instagram.com/sphynxdaddy" target="_blank" class="alert-link"> <div class="alert alert-warning alert-dismissible fade show" role="alert">
          Storage spaces going fast! - BOOK TODAY!!!
  <button type="button" class="close" data-dismiss="alert">
            <span>X</span>
          </button>
        </div>
        </a>
      </header>

    )
  }
}
export default Alert;


