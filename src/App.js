import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
        <Home />
        <Education />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
