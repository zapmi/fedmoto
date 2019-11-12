import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import bigSuzi from './Images/bigSuz.jpg';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div>
            <div id="bigSuzi"> <img src={bigSuzi} class="img-fluid" width="1070" height="713.73" />
            </div>

            <Route name="home" exact path="/" component={HomePage} />

          </div>

          <Footer />

        </div>
      </Router>
    )
  }
}
export default App;