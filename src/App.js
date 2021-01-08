import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Section from './components/Section';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar/Sidebar';
import dummyText from "./DummyText";
import SideBarToggle from './components/Sidebar/SidebarToggle';
import { Drawer, Hidden } from '@material-ui/core';
import navContent from "./components/Sidebar/NavContent";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './components/Sidebar/Sidebar.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sideBarOpen: true,
    }

    this.handleSideBarToggle = this.handleSideBarToggle.bind(this);
  }
  
  handleSideBarToggle() {
    this.setState({
      sideBarOpen: !this.sideBarOpen,
    });
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        {/* <SideBarToggle handleSideBarToggle={this.handleSideBarToggle}/>
        <Sidebar sideBarOpen={this.state.sideBarOpen}/> */}
        <nav>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor="left"
              open={this.state.sideBarOpen}
              onClose={this.handleSideBarToggle}
              ModalProps={{
                keepMounted: true,
              }}
              >
              {navContent}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              variant="permanent"
              open
              style={{backgroundColor: '#495867'}}
            >
              {navContent}
            </Drawer>
          </Hidden>
        </nav>
        <Section 
          id="home" 
          text={dummyText}
          dark={true}
          title="Home"
        />
        <Section 
          id="about" 
          text={dummyText}
          dark={false}
          title="About Me"
        />
        <Section 
          id="experience" 
          text={dummyText}
          dark={true}
          title="My Journey"
        />
        <Section 
          id="projects"  
          text={dummyText}
          dark={false}
          title="My Projects" 
        />
        <Section 
          id="extras" 
          text={dummyText}
          dark={true}
          title="Extras"
        />
        <Footer />
      </div>
    );
  }
}

export default App;