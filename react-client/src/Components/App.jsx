import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import bigSuzi from './Images/bigSuz.jpg';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
// import bigSuzi from '../Components/Images/bigSuzi';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div>
            <div id="bigSuzi"> <img src={bigSuzi} width="700" height="450" />
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