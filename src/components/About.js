import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="menu-header" style={{paddingTop: '30px'}}>
          <h1>ABOUT ME</h1>
          <div className="stroke" style={{background: '#fff'}}></div>
        </div>
        <div className="about-info">
          <img src="./img/author.jpg" alt="TruongNT" className="bio-img" />
          <div className="bio">
            <p>
            “My name is Truong. I’m currently a third-year student
            at Hanoi University of Science and Technology. My major
            is information system belongs to information technology
            department. I’m pasionate about Web development,
            i want to improve my technical skills everyday and build
            useful systems in the future...”
            </p>
          </div>
          <div className="about about1">
            <h3>123 Webshop</h3>
            <h6>Full Stack Developer</h6>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            cupiditate molestiae illo accusamus doloremque saepe similique
            possimus quod aspernatur illum.
            </p>
          </div>
          <div className="about about2">
            <h3>Design ABC</h3>
            <h6>Front End Developer</h6>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            cupiditate molestiae illo accusamus doloremque saepe similique
            possimus quod aspernatur illum.
            </p>
          </div>
          <div className="about about3">
            <h3>Samsung</h3>
            <h6>Graphic Designer</h6>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            cupiditate molestiae illo accusamus doloremque saepe similique
            possimus quod aspernatur illum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
