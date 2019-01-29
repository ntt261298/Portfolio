import React, { Component } from 'react';

const items = [
  {
     img: 'img/studying.jpg',
     content: 'Hanoi University of Science and Technology'
   },
  {
    img: 'img/it.jpg',
    content: 'Information Technology'
   },
  {
    img: 'img/cpa.jpg',
    content: 'Current CPA 3.55'
  }
];

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      active1: 'active',
      active2: '',
      active3: ''
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  setActive(value) {
    switch (value) {
      case 0:
        this.setState({
          activeIndex: 0,
          active1: 'active', active2: '', active3: ''
        });
        break;
      case 1:
        this.setState({
          activeIndex: 1,
          active1: '', active2: 'active', active3: ''
        });
        break;
      case 2:
        this.setState({
          activeIndex: 2,
          active1: '', active2: '', active3: 'active'
        });
        break;
      default:
        break;
    }
  }
  next() {
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setActive(nextIndex);
  }

  previous() {
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setActive(nextIndex);
  }

  goToIndex(newIndex) {
    this.setActive(newIndex);
  }

  render() {
    const slides = items.map((item, index) => {
      console.log(index);

      return (
        <div
          key={item.img}
          className={index === this.state.activeIndex ? 'slider-item' : 'hide'}
        >
          <div className="back" style={{height: 'calc(100vh - 220px)', background: 'var(--primary)'}}></div>
          <img src={item.img} style={{transition: 'all 1000ms ease-out'}} alt="item"/>
          <p>{item.content}</p>
        </div>
      );
    });
    return (
      <div id="education">
        {/* <div className="fix-header"></div> */}
        <div className="menu-header">
          <h1>EDUCATION </h1>
          <div className="stroke"></div>
        </div>
        <div className="slide-edu">
          <div className="left-direct">
            <img src="img/baseline-chevron_left-24px.svg" alt="left" onClick={this.previous}/>
          </div>
          <div className="right-direct">
            <img src="img/baseline-chevron_right-24px.svg" alt="right" onClick={this.next}/>
          </div>
            {slides}
          <div className={`circle circle-1 ${this.state.active1}`} onClick={this.goToIndex.bind(this, 0)}></div>
          <div className={`circle circle-2 ${this.state.active2}`} onClick={this.goToIndex.bind(this, 1)}></div>
          <div className={`circle circle-3 ${this.state.active3}`} onClick={this.goToIndex.bind(this, 2)}></div>
        </div>
      </div>
    );
  }
}

export default Education;
