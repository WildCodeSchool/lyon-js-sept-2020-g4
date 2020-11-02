import React from 'react';
import Carousel from './Carousel';
import './Carousel.css';
import Start from './Start';
import IssStatus from '../iss/Iss';

const Home = () => {
  return (
    <div className="renderingPlanets">
      <Start />
      <Carousel />
      <IssStatus />
    </div>
  );
};

export default Home;
