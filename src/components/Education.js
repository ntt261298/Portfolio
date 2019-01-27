import React, { Component } from 'react';

const items = [
  {
     img: 'img/studying.svg',
     content: 'Hanoi University of Science and Technology'
   },
  {
    img: 'img/it.svg',
    content: 'Information Technology'
   },
  {
    img: 'img/cpa.svg',
    content: 'Current CPA 3.55'
  }
];

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
  }

  next() {
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item, index) => {
      console.log(index);
      
      return (
        <div 
          key={item.img}
          className={index === this.state.activeIndex ? 'slider-item' : 'hide'}
        >
          <img src={item.img}/>
          <p>{item.content}</p>
        </div>
      );
    });
    return (
      <div id="education">
        <h1>EDUCATION</h1>
        <div className="stroke"></div>
        <div className="slide-edu">
            {slides}
        </div>
      </div>
    );
  }
}

export default Education;
