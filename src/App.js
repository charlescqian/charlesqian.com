import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Section from './components/Section';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import dummyText from "./DummyText";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Sidebar />
        <Section 
          id="home" 
          subtitle={dummyText}
          dark={true}
          title="Home"
        />
        <Section 
          id="about" 
          subtitle={dummyText}
          dark={false}
          title="about"
        />
        <Section 
          id="experience" 
          subtitle={dummyText}
          dark={true}
          title="experience"
        />
        <Section 
          id="projects" 
          subtitle={dummyText}
          dark={false}
          title="projects"
        />
        <Section 
          id="extras" 
          subtitle={dummyText}
          dark={true}
          title="extras"
        />
        <Footer />
      </div>
    );
  }
}

export default App;