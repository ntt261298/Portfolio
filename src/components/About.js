import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about" className="panel">
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
            <h3>Passion</h3>
            <h6>Full Stack Developer</h6>
            <p>
            My passion is to work with extremely talented people and 
            collaborate to make products that would make an immediate 
            impact 
            </p>
          </div>
          <div className="about about2">
            <h3>Seft-taught</h3>
            <h6>Front End Developer</h6>
            <p>
            I'm a seft-taught person. I'm not hesitant to learn a new
            technology as long as it helps me to solve my problem, to 
            achieve my purpose
            </p>
          </div>
          <div className="about about3">
            <h3>Creative</h3>
            <h6>Graphic Designer</h6>
            <p>
            Design is pretty fascinating to me. I've learnt a little bit 
            about that and this portfolio i designed my seft using Adobe
            Illustrator
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
