import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="menu-header">
          <h1>ABOUT</h1>
          <div className="stroke"></div>
        </div>
        <div className="about-info">
          <img src="./img/ntt.svg" alt="TruongNT" className="bio-img" />
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            praesentium quisquam, aliquam incidunt velit dolor eum excepturi
            reprehenderit amet dolore impedit accusantium eos ullam eaque quae
            cupiditate labore nesciunt? Delectus?
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
