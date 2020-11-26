import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
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
      numberOfSlidesToScroll: 1,
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
    const { numberOfSlidesToScroll } = this.state;
    let newNumberOfSlidesToScroll;
    if (window.innerWidth <= 900) {
      newNumberOfSlidesToScroll = 1;
    } else {
      newNumberOfSlidesToScroll = 4;
    }
    if (numberOfSlidesToScroll !== newNumberOfSlidesToScroll) {
      this.setState({ numberOfSlidesToScroll: newNumberOfSlidesToScroll });
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
          <Slide url={item.url} name={item.name} />
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 className="carousel-title">Choisis un astre</h1>
        <div className="carousel-container">
          <Button
            style={{
              minWidth: '50px',
              backgroundColor: '#e0e0e000',
              color: 'white',
            }}
            variant="contained"
            className="carousel-nav carousel-left-navigation-button"
            onClick={this.handleLeftNavigation}
            type="button"
          >
            &#60;
          </Button>

          <div className="carousel-viewport" ref={this.carouselViewport}>
            {this.renderSlides()}
          </div>
          <Button
            style={{
              minWidth: '50px',
              backgroundColor: '#e0e0e000',
              color: 'white',
            }}
            variant="contained"
            className="carousel-nav carousel-right-navigation-button"
            onClick={this.handleRightNavigation}
            type="button"
          >
            &#62;
          </Button>
        </div>
      </div>
    );
  }
}

export default Carousel;
