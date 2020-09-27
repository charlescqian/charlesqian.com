import React, { Component } from 'react';
import './Sidebar.css';
import profile from './profile_picture.jpg';
import { Link, animateScroll as scroll } from "react-scroll";

class Sidebar extends Component {

    render() {
        return (
            <nav className="sidebar bg-dark" id="sidebar">
                <div className="nav-content">
                    <section className='profile'>
                        <img src={profile} className="img-thumbnail rounded-circle img-fluid w-75" />
                        <p className="name text-light">Charles Qian</p>
                    </section>
                    
                    <ul className="nav-items text-light">
                        <li className="nav-item">
                            <Link
                                className="link"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="link"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="link"
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Experiences
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="link"
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="link"
                                activeClass="active"
                                to="extras"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Extras
                            </Link>
                        </li>
                    </ul>
                    <ul className='nav-items'>

                    </ul>
                </div>    
                             
            </nav>
        );
    }
}

export default Sidebar;