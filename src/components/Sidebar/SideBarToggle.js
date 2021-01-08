import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import "./SidebarToggle.css"

const sideBarToggle = props => {
    return (
        <button className='sidenav-toggle' onClick={props.handleSideBarToggle}>
            <GiHamburgerMenu size={25}/>
        </button>
    );
}

export default sideBarToggle;