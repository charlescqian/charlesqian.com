import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, animateScroll as scroll} from "react-scroll";

class Header extends Component {

    render() {
        return (
            <Navbar className="sticky-top" bg="dark" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#introduction">Introduction</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#extras">Extras</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;