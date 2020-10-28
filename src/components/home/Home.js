import React from 'react';
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Carousel />
      </div>
    </div>
  );
}

export default Home;
