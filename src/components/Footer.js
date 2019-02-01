import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="contact animated hatch ae-animation-hatch">
          <div className="phone">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <p>0397364341</p>
          </div>
          <div className="mail">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <p>ntt261298@gmail.com</p>
          </div>
          <div className="location">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>So 7, Ta Quang Buu, Hanoi</p>
          </div>
        </div>
        <div className="social">
          <a href="https://www.facebook.com/nguyentien.truong.5220" target="_blank">
            <img src="img/facebook-logo-in-circular-button-outlined-social-symbol.svg" alt="fb"/>
          </a>
          <a href="https://github.com/ntt261298" target="_blank">
            <img src="img/github.svg" alt="gh"/>
          </a>
        </div>
        <div className="coppyright">
          &copy; 2019 NTT. All RIGHTS RESERVES.
        </div>
      </div>
    );
  }
}

export default Footer;
