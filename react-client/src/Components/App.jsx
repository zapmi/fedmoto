import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
// import HomePage from './HomePage';
// import bigSuzi from './Images/bigSuz.jpg';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import SideNav from './HeaderComponent/SideNav';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <SideNav />

          {/* <Route name="home" exact path="/" component={HomePage} /> */}


          <Footer />

        </div>
      </Router>
    )
  }
}
export default App;