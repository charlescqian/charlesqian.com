import React from 'react';
import "./Navbar.css";
import { Link, animateScroll as scroll} from "react-scroll";

class Navbar extends React.Component {


    render() {
        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <ul className="nav-items">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">About</li>
                        <li className="nav-item">Projects</li>
                        <li className="nav-item">Contact Me</li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;