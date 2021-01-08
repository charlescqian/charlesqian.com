import React, { Component } from 'react';
import profile from '../../assets/profile_picture-min.jpg';
import resume from '../../assets/resume.pdf';
import { Link, animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiFilePaperFill } from "react-icons/ri";

const navContent = (
    <div className="nav-content">
        <section className='profile'>
            <img src={profile} className="img-thumbnail rounded-circle img-fluid w-75" alt="Profile"/>
            <p className="name text-light">Charles Qian</p>
        </section>
        
        <ul className="nav-items text-light">
            {/* TODO: Create a separate file called nav-items and export each of these then map them*/}
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
            {/* TODO: Create a separate file called SocialLinks then map each one of these? */}
            <li className="nav-item icon">
                <a href="https://github.com/charlescqian" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20}/> GitHub
                </a>
            </li>
            <li className="nav-item icon">
                <a href="https://www.linkedin.com/in/charlescqian/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={20}/> LinkedIn
                </a>
            </li>
            <li className="nav-item icon">
                <a href={resume} target="_blank" rel="noopener noreferrer">
                    <RiFilePaperFill size={20}/> Resume
                </a>
            </li>
        </ul>
    </div>    
);

export default navContent;