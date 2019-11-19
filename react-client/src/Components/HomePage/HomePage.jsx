import React, { Component } from 'react';
import "./HomePage.css"
import { Link } from 'react-router-dom';
import bigSuzi from '../Images/bigSuzi.jpg';

class HomePage extends Component {
    render() {

        return (
            <div class="col-sm-10" id="bigSuzipic">

                <img src={bigSuzi} class="img-fluid" width="1309" height="auto" alt="bigSuzi" />
                <div>
                    <button class="bigSuziButton">CHECK OUT FED-014 "BIG SUZIE"</button>
                </div>
                <hr></hr>
                <div id="fedMotto">
                    Federal Moto makes one-off custom bikes and functional goods that are inspired and ridden from the city streets to the mountain peaks. Based in Chicago, Illinois.
                </div>
                <hr></hr>

                <img src={bigSuzi} class="img-fluid" width="1309" height="auto" alt="bigSuzi" />

            </div>






        )
    }
}
export default HomePage;