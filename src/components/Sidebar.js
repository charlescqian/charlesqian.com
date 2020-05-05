import React, { Component } from 'react';
import './Sidebar.css';
import profile from './profile_picture.jpg';

class Sidebar extends Component {

    render() {
        return (
            <nav className="sidebar bg-dark">    
                <img src={profile} className="img-thumbnail rounded-circle img-fluid w-75" />
                <ul className="navbar-nav mr-auto py-4">
                    <li className=" text-light">Charles Qian</li>
                </ul>
                <a className="nav-link text-light py-4" href="#introduction">Introduction</a>
                <a className="nav-link text-light py-4" href="#about">About</a>
                <a className="nav-link text-light py-4" href="#projects">Projects</a>
                <a className="nav-link text-light py-4" href="#extras">Extras</a>                
            </nav>
        );
    }
}

export default Sidebar;