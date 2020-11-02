import React from 'react';
import Carousel from './Carousel';
import './Carousel.css';
import Start from './Start';
import IssStatus from '../iss/Iss';
import PlayButton from '../game/GameButton';

const Home = () => {
  return (
    <div className="renderingPlanets">
      <Start />
      <Carousel />
      <PlayButton />
      <IssStatus />
    </div>
  );
};

export default Home;
