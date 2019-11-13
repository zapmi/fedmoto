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



          <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="d-flex flex-grow-1">
            <span class="w-100 d-lg-none d-block">
                </span>
            <a class="navbar-brand d-none d-lg-inline-block" href="#">
                <h2>Mike Zapata</h2>
            </a>

            <div class="w-100 text-right">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
        <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
            <ul class="navbar-nav ml-auto flex-nowrap">
                <li class="nav-item">
                    <a href="index.html" class="nav-link m-2 menu-item nav-active">About</a>
                </li>
                <li class="nav-item">
                    <a href="portfolio.html" class="nav-link m-2 menu-item">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a href="contact.html" class="nav-link m-2 menu-item">Contact</a>
                </li>

            </ul>
        </div>
    </nav>





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