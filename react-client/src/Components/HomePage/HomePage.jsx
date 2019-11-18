import React, { Component } from 'react';
import "./HomePage.css"
import { Link } from 'react-router-dom';
import bigSuzi from '../Images/bigSuzi.jpg';

class HomePage extends Component {
    render() {

        return (
            <div class="col-sm-10" id="bigSuzipic">

                <img src={bigSuzi} class="img-fluid" width="1309" height="auto" alt="bigSuzi" />
                <img src={bigSuzi} class="img-fluid" width="1309" height="auto" alt="bigSuzi" />

            </div>




        )
    }
}
export default HomePage;