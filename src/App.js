import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Section from './components/Section';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import dummyText from "./DummyText";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Navbar />
        <Section 
          id="home" 
          subtitle={dummyText}
          dark={false}
          title="Home"
        />
        <Section 
          id="about" 
          subtitle={dummyText}
          dark={true}
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
          dark={true}
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
