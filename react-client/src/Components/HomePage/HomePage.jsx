import React, { Component } from 'react';
import "./HomePage.css"
import { Link } from 'react-router-dom';
import bigSuzi from '../Images/bigSuzi.jpg';
import aboutFed from '../Images/aboutFed.jpg';
import bikes from '../Images/bikes.jpg';
import ig from '../Images/ig.jpg';
import service from '../Images/service.png';

class HomePage extends Component {
    render() {

        return (
            <div class="col-sm-10">

                <img src={bigSuzi} class="img-fluid" id="bigSuziPic" alt="bigSuzi" />
                <div>
                    <button class="bigSuziButton">CHECK OUT FED-014 "BIG SUZIE"</button>
                </div>
                <hr></hr>
                <div id="fedMotto">
                    Federal Moto makes one-off custom bikes and functional goods that are inspired and ridden from the city streets to the mountain peaks. Based in Chicago, Illinois.
                </div>
                <hr></hr>

                <img src={bikes} class="img-fluid" id="bikesPic" alt="bikes" />
                <img src={ig} class="img-fluid" id="igPic" alt="ig" />
                <img src={service} class="img-fluid" id="servicePic" alt="service" />
                <img src={aboutFed} class="img-fluid" id="aboutFedPic" alt="about" />

            </div>




        )
    }
}
export default HomePage;