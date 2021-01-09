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
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import './components/Sidebar/Sidebar.css';
import ProjectsList from './components/Projects/ProjectsList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sideBarOpen: window.innerWidth > 768 ? true : false,
    }
    
    this.handleSideBarToggle = this.handleSideBarToggle.bind(this);
  }
  
  handleSideBarToggle() {
    this.setState({
      sideBarOpen: !this.state.sideBarOpen,
    });
    console.log("clicked");
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        {/* <Header /> */}
        {/* TODO: Wrap this in a nav and the main content in another div */}
        <SideBarToggle handleSideBarToggle={this.handleSideBarToggle}/>
        <Sidebar sideBarOpen={this.state.sideBarOpen}/>
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
        <ProjectsList/>
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