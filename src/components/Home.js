import React, { Component } from 'react';

class Home extends Component {
  state = {
      margin: 0
  }
  componentDidMount() {
      this.interval = setInterval(() => {
        if(this.state.margin === -70) {
            this.setState({
                margin: -140
            });
        }
        else if(this.state.margin === -140) {
          this.setState({
              margin: 0
          });
        }
        else {
          this.setState({
              margin: -70
          });
        }
    }, 2500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div id="home">
        <div className="fix-header"></div>
        <div className="bg-img"></div>
        <div className="back">
            
        </div>
        <div className="home-content">
                <div></div>
                <div></div>
                <div></div>
                <div className="text">
                    <p className="text-1" style={{marginTop: `${this.state.margin}px`}}>Nguyen Tien Truong</p>
                    <p className="text-2">Web Developer</p>
                    <p className="text-3">Student at Hust</p>
                </div>
                <span className="more">More</span>
                <div></div>
                <div></div>
                <div></div>
            </div>      
      </div>
    );
  }
}

export default Home;
