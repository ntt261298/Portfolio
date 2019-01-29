import React, { Component } from 'react';

class Menu extends Component {
  state = {
    menu: 'close'
  }
  changeMenu() {
    if(this.state.menu === '') {
      this.setState({
        menu: 'close'
      })
    } else {
      this.setState({
        menu: ''
      })
    }
  }
  render() {
    const closeStyle = {transform: 'rotate(180deg)'};
    const closeBtn1 = { transform: 'rotate(45deg) translate(5px, 5px)', background: '#fff'};
    const closeBtn2 = { opacity: '0'};
    const closeBtn3 = { transform: 'rotate(-45deg) translate(7px, -6px)', background: '#fff'};
    return (
      <div id="menu">
        <div
          className="menu-btn"
          style={this.state.menu === 'close' ? closeStyle : {}}
          onClick={this.changeMenu.bind(this)}
          >
          <div className="btn-line" style={this.state.menu === 'close' ? closeBtn1 : {}}></div>
          <div className="btn-line" style={this.state.menu === 'close' ? closeBtn2 : {}}></div>
          <div className="btn-line" style={this.state.menu === 'close' ? closeBtn3 : {}}></div>
        </div>
        <ul className="menu-nav" style={this.state.menu === 'close' ? {transform: 'translate3d(0, 0, 0)'} : {}}>
            <li><a href="#home" onClick={this.changeMenu.bind(this)}>HOME</a></li>
            <li><a href="#education" onClick={this.changeMenu.bind(this)}>EDUCATION</a></li>
            <li><a href="#skills" onClick={this.changeMenu.bind(this)}>SKILLS</a></li>
            <li><a href="#projects" onClick={this.changeMenu.bind(this)}>PROJECTS</a></li>
            <li><a href="#about" onClick={this.changeMenu.bind(this)}>ABOUT ME</a></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
