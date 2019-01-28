import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="contact">
          <div className="phone">
            <img src="" alt=""/>
            <p>0397364341</p>
          </div>
          <div className="mail"></div>
            <img src="" alt=""/>
            <p>ntt261298@gmail.com</p>
          <div className="location">
            <img src="" alt=""/>
            <p>So 7, Ta Quang Buu, Hanoi</p>
          </div>
        </div>
        <div className="social">
          <a href="">
            <img src="" alt=""/>
          </a>
          <a href="">
            <img src="" alt=""/>
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
