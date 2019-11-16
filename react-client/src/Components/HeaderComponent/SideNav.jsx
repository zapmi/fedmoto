import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bigSuzi from '../Images/bigSuzi.jpg';
class SideNav extends Component {
    render() {
        return (

            <div class="row">
                <div class="col-sm-2">
                    {/* <div class="affix"> */}
                        {/* <div id="slide-out" class="side-nav sn-bg-4 fixed" > */}
                        <ul>
                            <li class="nav-item-logo">
                                <div>
                                    <a href="#" ><img src="https://images.squarespace-cdn.com/content/539b5adbe4b0dc27b961c927/1568922341756-C62F6BQPUW065CIQ69WN/federallogo.jpg?content-type=image%2Fjpeg" id="fedlogo" class="img-fluid flex-center"></img></a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a href="doItYourself.html" class="nav-link m-2 menu-item nav-active">DO IT YOURSELF</a>
                            </li>
                            <li class="nav-item">
                                <a href="bikes.html" class="nav-link m-2 menu-item">BIKES</a>
                            </li>
                            <li class="nav-item">
                                <a href="buildInquiry.html" class="nav-link m-2 menu-item">BUILD INQUIRY</a>
                            </li>
                            <li class="nav-item">
                                <a href="shop.html" class="nav-link m-2 menu-item">SHOP +</a>
                            </li>
                            <li class="nav-item">
                                <a href="service.html" class="nav-link m-2 menu-item">SERVICE</a>
                            </li>
                            <li class="nav-item">
                                <a href="storage.html" class="nav-link m-2 menu-item">STORAGE</a>
                            </li>
                            <li class="nav-item">
                                <a href="events.html" class="nav-link m-2 menu-item">EVENTS</a>
                            </li>
                            <li class="nav-item">
                                <a href="media.html" class="nav-link m-2 menu-item">MEDIA</a>
                            </li>
                            <li class="nav-item">
                                <a href="careers.html" class="nav-link m-2 menu-item">CAREERS</a>
                            </li>
                            <li class="nav-item">
                                <a href="signin.html" class="nav-link m-2 menu-item">SIGN IN</a>
                            </li>
                            {/* <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>



                            <li class="nav-item">
                                <a href="https://www.instagram.com/federalmoto/" target="_blank" class="nav-link m-2 menu-item">INSTAGRAM</a>
                            </li>
                            <li class="nav-item">
                                <a href="contact.html" class="nav-link menu-item">CONTACT</a>
                            </li> */}
                        </ul>
                        {/* </div> */}
                    {/* </div> */}
                </div>


                <div class="col-sm-10" id="bigSuzipic">

                    <img src={bigSuzi} class="img-fluid" width="1070" height="auto" alt="bigSuzi" />
                    <img src={bigSuzi} class="img-fluid" width="1070" height="auto" alt="bigSuzi" />

                </div>


            </div>







        )
    }
}
export default SideNav;