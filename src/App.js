import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Sidebar />
        <Section id="introduction"/>
        <Section id="about"/>
        <Section id="projects"/>
        <Section id="extras"/>
        <Section />
        <Section />
        <Section />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default App;
