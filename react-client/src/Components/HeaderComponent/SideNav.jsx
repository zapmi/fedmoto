import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SideNav extends Component {
    render() {
        return (
            // <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-left">
            //     <a class="navbar-brand" href="">Navbar</a>
            //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            //         <span class="navbar-toggler-icon"></span>
            //     </button>

            //     <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            //         <ul class="navbar-nav">
            //             <li class="nav-item">
            //                 <a class="nav-link">Home</a>
            //             </li>
            //             <li class="nav-item">
            //                 <a class="nav-link">About</a>
            //             </li>
            //             <li class="nav-item">
            //                 <a class="nav-link">Contact</a>
            //             </li>
            //             <li class="nav-item dropdown">
            //                 <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            //                 <div class="dropdown-menu">
            //                     <a class="dropdown-item">Action</a>
            //                     <a class="dropdown-item">Another action</a>
            //                     <a class="dropdown-item">Something else here</a>
            //                     <div class="dropdown-divider"></div>
            //                     <a class="dropdown-item">Separated link</a>
            //                     <a class="dropdown-item">One more separated link</a>
            //                 </div>
            //             </li>
            //         </ul>

            //     </div>
            // </nav >
            // <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-left">
            //* <nav class="navbar.fixed-right navbar-md  navbar-light bg-light"> */ 
            //     <div class="d-flex flex-grow-1">
            //         <span class="w-100 d-lg-none d-block">
            //         </span>
            //         <a class="navbar-brand d-none d-lg-inline-block" href="#">
            //             <h2>FED MOTO</h2>
            //         </a>

            //         <div class="w-100 text-right">
            //             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
            //                 <span class="navbar-toggler-icon"></span>
            //             </button>
            //         </div>
            //     </div>
            //     <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
            //         <ul class="navbar-nav ml-auto flex-nowrap">
            //             <li class="nav-item">
            //                 <a href="doItYourself.html" class="nav-link m-2 menu-item nav-active">DO IT YOURSELF</a>
            //             </li>
            //             <li class="nav-item">
            //                 <a href="bikes.html" class="nav-link m-2 menu-item">BIKES</a>
            //             </li>
            //             <li class="nav-item">
            //                 <a href="shop.html" class="nav-link m-2 menu-item">SHOP +</a>
            //             </li>
            //             <li class="nav-item">
            //                 <a href="service.html" class="nav-link m-2 menu-item">SERVICE</a>
            //             </li>
            //             <li class="nav-item">
            //                 <a href="storage.html" class="nav-link m-2 menu-item">STORAGE</a>
            //             </li>
            //             <li class="nav-item">
            //                 <a href="events.html" class="nav-link m-2 menu-item">EVENTS</a>
            //             </li>
            //             <li class="nav-item">
            //                 <a href="media.html" class="nav-link m-2 menu-item">MEDIA</a>
            //             </li>
            //             <li class="nav-item">
            //                 <a href="careers.html" class="nav-link m-2 menu-item">CAREERS</a>
            //             </li>
            //             <li class="nav-item">
            //                 <a href="signin.html" class="nav-link m-2 menu-item">SIGN IN</a>
            //             </li>
            //             <li class="nav-item">
            //                 <a href="https://www.instagram.com/federalmoto/" target="_blank" class="nav-link m-2 menu-item">INSTAGRAM</a>
            //             </li>
            //             <li class="nav-item">
            //                 <a href="contact.html" class="nav-link m-2 menu-item">CONTACT</a>
            //             </li>

            //         </ul>
            //     </div>
            // </nav>

            // <div class="row">
            //     <div class="col-4">col-8</div>
            //     <div class="col-8">col-4</div>
            // </div>

            <div class="row">
                <div class="col-sm-2">
                    <div id="slide-out" class="side-nav sn-bg-2 fixed" >
                        <ul class="custom-scrollbar">
                            <li>
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
                            <li class="nav-item">
                                <a href="https://www.instagram.com/federalmoto/" target="_blank" class="nav-link m-2 menu-item">INSTAGRAM</a>
                            </li>
                            <li class="nav-item">
                                <a href="contact.html" class="nav-link m-2 menu-item">CONTACT</a>
                            </li>




                        </ul>
                    </div>

                </div>
                <div class="col-8">

                </div>

            </div>







            //   ***************************



            //                         <li>
            //                             <ul class="collapsible collapsible-accordion">
            //                                 <li><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-chevron-right"></i> Submit blog<i
            //                                     class="fas fa-angle-down rotate-icon"></i></a>
            //                                     <div class="collapsible-body">
            //                                         <ul class="list-unstyled">
            //                                             <li><a href="#" class="waves-effect">Submit listing</a>
            //                                             </li>
            //                                             <li><a href="#" class="waves-effect">Registration form</a>
            //                                             </li>
            //                                         </ul>
            //                                     </div>
            //                                 </li>
            //                                 <li><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-hand-pointer"></i> Instruction<i
            //                                     class="fas fa-angle-down rotate-icon"></i></a>
            //                                     <div class="collapsible-body">
            //                                         <ul class="list-unstyled">
            //                                             <li><a href="#" class="waves-effect">For bloggers</a>
            //                                             </li>
            //                                             <li><a href="#" class="waves-effect">For authors</a>
            //                                             </li>
            //                                         </ul>
            //                                     </div>
            //                                 </li>
            //                                 <li><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-eye"></i> About<i class="fas fa-angle-down rotate-icon"></i></a>
            //                                     <div class="collapsible-body">
            //                                         <ul class="list-unstyled">
            //                                             <li><a href="#" class="waves-effect">Introduction</a>
            //                                             </li>
            //                                             <li><a href="#" class="waves-effect">Monthly meetings</a>
            //                                             </li>
            //                                         </ul>
            //                                     </div>
            //                                 </li>
            //                                 <li><a class="collapsible-header waves-effect arrow-r"><i class="far fa-envelope"></i> Contact me<i class="fas fa-angle-down rotate-icon"></i></a>
            //                                     <div class="collapsible-body">
            //                                         <ul class="list-unstyled">
            //                                             <li><a href="#" class="waves-effect">FAQ</a>
            //                                             </li>
            //                                             <li><a href="#" class="waves-effect">Write a message</a>
            //                                             </li>
            //                                             <li><a href="#" class="waves-effect">FAQ</a>
            //                                             </li>
            //                                             <li><a href="#" class="waves-effect">Write a message</a>
            //                                             </li>
            //                                             <li><a href="#" class="waves-effect">FAQ</a>
            //                                             </li>
            //                                             <li><a href="#" class="waves-effect">Write a message</a>
            //                                             </li>
            //                                             <li><a href="#" class="waves-effect">FAQ</a>
            //                                             </li>
            //                                             <li><a href="#" class="waves-effect">Write a message</a>
            //                                             </li>
            //                                         </ul>
            //                                     </div>
            //                                 </li>
            //                             </ul>
            //                         </li>

            //     </ul>
            //                     <div class="sidenav-bg mask-strong"></div>
            //   </div>
            //                 <nav class="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav">

            //                     <div class="float-left">
            //                         <a href="#" data-activates="slide-out" class="button-collapse black-text"><i class="fas fa-bars"></i></a>
            //                     </div>

            //                     <div class="breadcrumb-dn mr-auto">
            //                         <p>Material Design for Bootstrap</p>
            //                     </div>
            //                     <ul class="nav navbar-nav nav-flex-icons ml-auto">
            //                         <li class="nav-item">
            //                             <a class="nav-link"><i class="fas fa-envelope"></i> <span class="clearfix d-none d-sm-inline-block">Contact</span></a>
            //                         </li>
            //                         <li class="nav-item">
            //                             <a class="nav-link"><i class="fas fa-comments"></i> <span class="clearfix d-none d-sm-inline-block">Support</span></a>
            //                         </li>
            //                         <li class="nav-item">
            //                             <a class="nav-link"><i class="fas fa-user"></i> <span class="clearfix d-none d-sm-inline-block">Account</span></a>
            //                         </li>
            //                         <li class="nav-item dropdown">
            //                             <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
            //                                 aria-haspopup="true" aria-expanded="false">
            //                                 Dropdown
            //         </a>
            //                             <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
            //                                 <a class="dropdown-item" href="#">Action</a>
            //                                 <a class="dropdown-item" href="#">Another action</a>
            //                                 <a class="dropdown-item" href="#">Something else here</a>
            //                             </div>
            //                         </li>
            //                     </ul>












        )
    }
}
export default SideNav;