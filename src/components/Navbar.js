import React, { Component } from 'react';
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {

    render() {
        return (
            <nav className="nav bg-dark" id="navbar">    
                <div className="nav-content">
                    {/* <img src={profile} className="img-thumbnail rounded-circle img-fluid w-50" /> */}
                    {/* <img
                        src={logo}
                        className="nav-logo"
                        alt="Logo"
                        onClick={this.scrollToTop}
                    />
                    <ul className="navbar-nav mr-auto py-4">
                        <li className="text-light">Charles Qian</li>
                    </ul> */}
                    <ul className="nav-items">
                        <li className="nav-item text-light">
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Home</Link>
                        </li>
                        <li className="nav-item text-light">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >About</Link>
                        </li>
                        <li className="nav-item text-light">
                            <Link
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Experience</Link>
                        </li>
                        <li className="nav-item text-light">
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Projects</Link>
                        </li>
                        <li className="nav-item text-light">
                            <Link
                                activeClass="active"
                                to="extras"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Extras</Link>
                        </li>
                    </ul>
                </div>   
            </nav>
        );
    }
}

export default Navbar;