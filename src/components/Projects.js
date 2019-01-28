import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <div className="menu-header">
          <h1>PROJECTS</h1>
          <div className="stroke"></div>
        </div>
        <div className="project-list">
          <div className="project-1">
            <a href="https://ntt261298.herokuapp.com" target="_blank" class="pj-hover">
              <img src="img/chat.jpg" alt="chat app"/>
              <p>
              This is my very first project with Node,
              Code is little messy, and front doesn’t look good,
              but it’s pretty cool to me...
              </p>
              <div className="project-cover"></div>
            </a>
            <div className="demo">
             <a href="https://ntt261298.herokuapp.com" target="_blank">
                <i class="fa fa-eye"></i>
                 Chat App Nodejs
             </a>
            </div>
            <div className="git">
              <a href="https://github.com/ntt261298/Chat_Application" target="_blank">
                <i class="fab fa-github"></i>
                 Github
              </a>
            </div>
          </div>
          <div className="project-2">
            <a href="https://ntt261298.herokuapp.com" target="_blank" className="pj-hover">
              <img src="img/book-store.jpg" style={{height: 'calc(100% - 80px)'}} alt="book store"/>
              <p>
              I and my assignment group member designed 
              and coded a whole book store app. I spent
              most of my last semester time on it, so 
              check it out,..
              </p>
              <div className="project-cover"></div>
            </a>    
            <div className="demo">
             <a href="https://ntt261298.herokuapp.com" target="_blank">
                <i class="fa fa-eye"></i>
                 Book Store React-Redux
             </a>
            </div>
            <div className="git">
              <a href="https://github.com/ntt261298/Chat_Application" target="_blank">
                <i class="fab fa-github"></i>
                 Github
              </a>
            </div>
          </div>
          <div className="project-3">
            <a href="https://ntt261298.herokuapp.com" target="_blank" className="pj-hover">
              <img src="img/diagnose.jpg" alt="chat app"/>
              <p>
              Training Keras model for medical diagnosis and bringing it
              to Flask server, it's my AI assignment and also my first
              time i've used Machine Learning...
            </p>
            <div className="project-cover"></div>
            </a>        
            <div className="demo">
             <a href="https://ntt261298.herokuapp.com" target="_blank">
                <i class="fa fa-eye"></i>
                 Thyroid Diagnose Nodejs-Flask
             </a>
            </div>
            <div className="git">
              <a href="https://github.com/ntt261298/Chat_Application" target="_blank">
                <i class="fab fa-github"></i>
                 Github
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
