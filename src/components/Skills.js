import React, { Component } from 'react';
import Responsive from 'react-responsive-decorator';

class Skills extends Component {
  state = {
    active: 'tech',
    programLg: '0',
    design: '0',
    lg: '0'
  }
  componentDidMount() {
    this.props.media({ minWidth: 768 }, () => {
      this.setState({
        tech: '95px'
      });
    });
    this.props.media({ maxWidth: 768 }, () => {
      this.setState({
        tech: '45px'
      });
    });
  }
  viewSkill(type) {
    this.props.media({ minWidth: 768 }, () => {
      switch (type) {
        case 'tech':
          this.setState({
            active: 'tech',
            tech: '95px',
            programLg: '0',
            design: '0',
            lg: '0'
          });
          break;
        case 'programLg':
          this.setState({
            active: 'programLg',
            tech: '-100%',
            programLg: '100px',
            design: '0',
            lg: '0'
          });
          break;
        case 'design':
          this.setState({
            active: 'design',
            tech: '-100%',
            programLg: '-100%',
            design: '120px',
            lg: '0'
          });
          break;
        case 'lg':
          this.setState({
            active: 'lg',
            tech: '-100%',
            programLg: '-100%',
            design: '-100%',
            lg:'0'
          });
          break;
        default:
          break;
      }
      });

    this.props.media({ maxWidth: 768 }, () => {
      switch (type) {
        case 'tech':
          this.setState({
            active: 'tech',
            tech: '45px',
            programLg: '0',
            design: '0',
            lg: '0'
          });
          break;
        case 'programLg':
          this.setState({
            active: 'programLg',
            tech: '-100%',
            programLg: '50px',
            design: '0',
            lg: '0'
          });
          break;
        case 'design':
          this.setState({
            active: 'design',
            tech: '-100%',
            programLg: '-100%',
            design: '80px',
            lg: '0'
          });
          break;
        case 'lg':
          this.setState({
            active: 'lg',
            tech: '-100%',
            programLg: '-100%',
            design: '-100%',
            lg:'0'
          });
          break;
        default:
          break;
      }
      });
  }


  render() {
    const activeStyle = { color: 'var(--orange)' };
    return (
      <div id="skills" className="panel" style={{transition: 'var(--ease-out)'}}>
        <div className="menu-header">
          <h1>SKILLS</h1>
          <div className="stroke"></div>
        </div>
        <div className="skill-content">
          <div className="orange-cover"></div>
          <div className="tech slide" style={{marginTop: `${this.state.tech}`}}>
            <div className="title">
              <p>NodeJS</p>
              <p>ReactJS</p>
              <p>MongoDB</p>
              <p>PostgreSQL</p>
              <p>Github</p>
            </div>
            <div className="line">
              <div className="line-node form"></div>
              <div className="line-react form"></div>
              <div className="line-mongo form"></div>
              <div className="line-post form"></div>
              <div className="line-git form"></div>
            </div>
            <div className="right"></div>
          </div>
          <div className="program-language slide" style={{marginTop: `${this.state.programLg}`}}>
            <div className="title">
              <p>Javascript</p>
              <p>C++</p>
              <p>Java</p>
              <p>Python</p>
            </div>
            <div className="line">
              <div className="line-js form"></div>
              <div className="line-c form"></div>
              <div className="line-java form"></div>
              <div className="line-python form"></div>
            </div>
            <div className="right"></div>
          </div>
          <div className="design slide" style={{marginTop: `${this.state.design}`}}>
            <div className="title">
              <p>Adobe Illustrator</p>
              <p style={{marginTop:'20px'}}>Adobe Photoshop</p>
            </div>
            <div className="line">
              <div className="line-ai form"></div>
              <div className="line-ps form"></div>
            </div>
            <div className="right"></div>
          </div>
          <div className="language" style={{marginTop: `${this.state.lg}`}}>
            <h2>English</h2>
            <p>TOEIC 740</p>
            <p>CFL Test 2018</p>
          </div>
        </div>
        <div className="skills-menu">
          <ul>
            <li
            onClick={this.viewSkill.bind(this, 'tech')}
            style={this.state.active === 'tech' ? activeStyle : {}}
            >Tech</li>
            <li
            onClick={this.viewSkill.bind(this, 'programLg')}
            style={this.state.active === 'programLg' ? activeStyle : {}}
            >Programing Language</li>
            <li
            onClick={this.viewSkill.bind(this, 'design')}
            style={this.state.active === 'design' ? activeStyle : {}}
            >Design</li>
            <li
            onClick={this.viewSkill.bind(this, 'lg')}
            style={this.state.active === 'lg' ? activeStyle : {}}
            >Language</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Responsive(Skills);
