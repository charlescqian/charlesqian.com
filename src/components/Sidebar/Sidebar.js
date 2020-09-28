import React, { Component } from 'react';
import './Sidebar.css';
import profile from '../../assets/profile_picture-min.jpg';
import resume from '../../assets/resume.pdf';
import { Link, animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiFilePaperFill } from "react-icons/ri";
import "./SideBarToggle"
import SideBarToggle from './SideBarToggle';
import { GiHamburgerMenu } from 'react-icons/gi';

class Sidebar extends Component {

    render() {
        return (
            <nav className="sidenav bg-dark" id="sidenav" data-toggle="collapse">
                {/* <SideBarToggle/> */}
                <button className="nav-toggle btn btn-dark">
                    <GiHamburgerMenu size={25}/>
                </button>
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
                    <ul className='nav-items icons text-light'>
                        <li className="nav-item icon">
                            <a href="https://github.com/charlescqian" target="_blank">
                                <FaGithub size={20}/> GitHub
                            </a>
                        </li>
                        <li className="nav-item icon">
                            <a href="https://www.linkedin.com/in/charlescqian/" target="_blank">
                                <FaLinkedin size={20}/> LinkedIn
                            </a>
                        </li>
                        <li className="nav-item icon">
                            <a href={resume} target="_blank">
                                <RiFilePaperFill size={20}/> Resume
                            </a>
                        </li>
                    </ul>
                </div>    
                             
            </nav>
        );
    }
}

export default Sidebar;