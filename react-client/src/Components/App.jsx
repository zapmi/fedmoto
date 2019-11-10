import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
// import image from './Images/bigSuzi';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div>
          <Route name="home" exact path="/" component={HomePage} /> 
          {/* <img src={bigSuzi} alt="BigSuziBike" />;  */}
          </div>
          
          <Footer />
          
        </div>
      </Router>
    )
  }
}
export default App;