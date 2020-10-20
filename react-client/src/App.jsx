import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Alert from './Components/Alert';
import Footer from './Components/Footer';
import SideNav from './Components/SideNav';
import HomePage from './Components/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Alert /> */}
          <SideNav />
          <HomePage />

        </div>
        {/* <Footer /> */}
      </Router>
    )
  }
}
export default App;