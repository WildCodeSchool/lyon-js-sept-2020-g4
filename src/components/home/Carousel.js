/* eslint-disable react/no-string-refs */
import React, { Component } from 'react';
import './Carousel.css';
import data from './data.json';
import Slide from './Slide';
import scrollToAnimate from './scrollToAnimate';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.handleLeftNavigation = this.handleLeftNavigation.bind(this);
    this.onResize = this.onResize.bind(this);
    this.obj = data;
    this.state = {
      numberOfSlidesToScroll: 4,
    };
  }

  componentDidMount() {
    this.checkNumberOfSlidesToScroll();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    console.log('resizing', this);
  }

  handleRightNavigation = () => {
    const { carouselViewport } = this.refs;
    const { widthToScroll, timeToScroll } = this.widthAndTimeToScroll();
    const newPosition = carouselViewport.scrollLeft + widthToScroll;
    scrollToAnimate({
      element: carouselViewport,
      to: newPosition,
      duration: timeToScroll,
      scrollDirection: 'scrollLeft',
    });
  };

  checkNumberOfSlidesToScroll() {
    let numberOfSlidesToScroll;
    if (window.innerWidth <= 900) {
      numberOfSlidesToScroll = 1;
    } else {
      numberOfSlidesToScroll = 1;
    }
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.numberOfSlidesToScroll !== numberOfSlidesToScroll) {
      this.setState({ numberOfSlidesToScroll });
    }
  }

  widthAndTimeToScroll() {
    const { carouselViewport } = this.refs;
    const { numberOfSlidesToScroll } = this.state;
    if (numberOfSlidesToScroll === 'full') {
      return {
        widthToScroll: carouselViewport.offSetWidth,
        timeToScroll: 400,
      };
    }
    const widthOfSlide = 120;
    const timeToMoveOneSlide = 200;
    return {
      widthToScroll: numberOfSlidesToScroll * widthOfSlide,
      timeToScroll: Math.min(numberOfSlidesToScroll * timeToMoveOneSlide, 400),
    };
  }

  handleLeftNavigation() {
    const { carouselViewport } = this.refs;
    const { widthToScroll, timeToScroll } = this.widthAndTimeToScroll();
    const newPosition = carouselViewport.scrollLeft - widthToScroll;
    scrollToAnimate({
      element: carouselViewport,
      to: newPosition,
      duration: timeToScroll,
      scrollDirection: 'scrollLeft',
    });
  }

  renderSlides() {
    return this.obj.map((item) => {
      return <Slide url={item.url} key={item.id} />;
    });
  }

  render() {
    return (
      <div className="carousel-container">
        <button
          className="carousel-nav carousel-left-navigation-button"
          onClick={this.handleLeftNavigation}
          type="button"
        >
          &#60;
        </button>
        <div className="carousel-viewport" ref="carouselViewport">
          {this.renderSlides()}
        </div>
        <button
          className="carousel-nav carousel-right-navigation-button"
          onClick={this.handleRightNavigation}
          type="button"
        >
          &#62;
        </button>
      </div>
    );
  }
}

export default Carousel;
