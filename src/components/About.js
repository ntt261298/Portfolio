import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
            <img src="./img/logo.svg" alt="logo" />
            <span>NTT</span>
        </div>
        <div className="menu">
            <ul>
                <li><a href="#home">HOME <span>|</span></a></li>
                <li><a href="#education">EDUCATION <span>|</span></a></li>
                <li><a href="#skills">SKILLS <span>|</span></a></li>
                <li><a href="#projects">PROJECTS <span>|</span></a></li>
                <li><a href="#about">ABOUT ME <span>|</span></a></li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Header;
