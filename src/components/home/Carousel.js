/* eslint-disable react/no-string-refs */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    this.carouselViewport = React.createRef();
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
    const carouselViewport = this.carouselViewport.current;
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
      numberOfSlidesToScroll = 4;
    }
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.numberOfSlidesToScroll !== numberOfSlidesToScroll) {
      this.setState({ numberOfSlidesToScroll });
    }
  }

  widthAndTimeToScroll() {
    const carouselViewport = this.carouselViewport.current;
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
    const carouselViewport = this.carouselViewport.current;
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
      return (
        <Link key={item.name} to={{ pathname: `/${item.id}` }}>
          <Slide url={item.url} />
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 className="carousel-title">Chose your planet</h1>
        <div className="carousel-container">
          <button
            className="carousel-nav carousel-left-navigation-button"
            onClick={this.handleLeftNavigation}
            type="button"
          >
            &#60;
          </button>

          <div className="carousel-viewport" ref={this.carouselViewport}>
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
      </div>
    );
  }
}

export default Carousel;
