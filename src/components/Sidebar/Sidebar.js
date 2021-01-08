import React, { Component } from 'react';
import './Sidebar.css';

import "./SidebarToggle";
import navContent from "./NavContent";

// import SideBarToggle from './SidebarToggle';
// import { GiHamburgerMenu } from 'react-icons/gi';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
        };
    }
    
    render() {
        return (
            <nav className={"sidenav" + (this.props.sideBarOpen ? "" : "hidden")} id="sidenav" data-toggle="collapse">
                {/* <SideBarToggle/> */}
                {navContent} 
            </nav>
        );
    }
}

export default Sidebar;