import React, { Component } from 'react';
import "./SideNav.css"
class SideNav extends Component {
    render() {
        return (

            <div class="row">
                <div class="col-sm-2">
                    <div>
                        <a href="#" ><img src="https://images.squarespace-cdn.com/content/539b5adbe4b0dc27b961c927/1568922341756-C62F6BQPUW065CIQ69WN/federallogo.jpg?content-type=image%2Fjpeg" id="fedlogo" class="img-fluid flex-center"></img></a>
                    </div>
                    <ul id="topSideNav">
        
                        <li class="nav-item">
                            <a href="bikes.html" class="nav-link m-2 menu-item">BIKES</a>
                        </li>
                        <li class="nav-item">
                            <a href="buildInquiry.html" class="nav-link m-2 menu-item">BUILD INQUIRY</a>
                        </li>
                        <li class="nav-item">
                            <a href="serviceAppointment.html" class="nav-link m-2 menu-item">SERVICE APPOINTMENT</a>
                        </li>
                        <li class="nav-item">
                            <a href="shop.html" class="nav-link m-2 menu-item">SHOP</a>
                        </li>
                        <li class="nav-item">
                            <a href="events.html" class="nav-link m-2 menu-item">EVENTS</a>
                        </li>
                        <li class="nav-item">
                            <a href="careers.html" class="nav-link m-2 menu-item">CAREERS</a>
                        </li>
                        <li class="nav-item">
                            <a href="signIn.html" class="nav-link m-2 menu-item">SIGN IN</a>
                        </li>
                       
                    </ul>

                    <div class="fixed-bottom">
                        <ul id="bottomSideNav">
                            <li class="nav-item">
                                <a href="https://www.instagram.com/federalmoto/" target="_blank" class="nav-link-bottom m-2 menu-item">INSTAGRAM→</a>
                            </li>
                            <li class="nav-item">
                                <a href="contact.html" class="nav-link-bottom m-2 menu-item">CONTACT</a>
                            </li>
                        </ul>
                    </div>

                </div>


            </div>
            




        )
    }
}
export default SideNav;