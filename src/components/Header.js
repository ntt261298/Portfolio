import React, { Component } from 'react';

class Header extends Component {
  state = {
    active: 'home'
  }
  changeActive(type) {
    switch (type) {
      case 'home':
        this.setState({
          active: 'home'
        })
        break;
      case 'education':
        this.setState({
          active: 'education'
        })
        break;
      case 'skills':
        this.setState({
          active: 'skills'
        })
        break;
      case 'about':
        this.setState({
          active: 'about'
        })
        break;
      default:
        break;
    }
  }
  render() {
    const activeStyle = {color: 'var(--orange)'}
    return (
      <div className="header">
        <div className="logo">
          <a href="#home">
            <img src="./img/logo.svg" alt="logo" />
            <img className="ntt" src="./img/ntt.svg" alt="ntt"/>
          </a>
        </div>
        <div className="menu">
            <ul>
                <li><a
                  href="#home"
                  style={this.state.active === 'home' ? activeStyle : {}}
                  onClick={this.changeActive.bind(this, 'home')}
                  >HOME <span>|</span></a></li>
                <li><a
                  href="#education"
                  style={this.state.active === 'education' ? activeStyle : {}}
                  onClick={this.changeActive.bind(this, 'education')}
                  >EDUCATION <span>|</span></a></li>
                <li><a
                  href="#skills"
                  style={this.state.active === 'skills' ? activeStyle : {}}
                  onClick={this.changeActive.bind(this, 'skills')}
                  >SKILLS <span>|</span></a></li>
                <li><a
                  href="#projects"
                  style={this.state.active === 'projects' ? activeStyle : {}}
                  onClick={this.changeActive.bind(this, 'projects')}
                  >PROJECTS <span>|</span></a></li>
                <li><a
                  href="#about"
                  style={this.state.active === 'about' ? activeStyle : {}}
                  onClick={this.changeActive.bind(this, 'about')}
                  >ABOUT ME</a></li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Header;
