import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import './Carousel.css';
import Start from './Start';
import IssStatus from '../iss/Iss';
import SmallRocket from './SmallRocket';

const Home = () => {
  return (
    <div className="renderingPlanets">
      <Start />
      <Carousel />
      <div className="PlayingButton">
        <Link to="/game">
          <button type="submit">Test tes connaissances !</button>
        </Link>
      </div>
      <IssStatus />
      <SmallRocket />
    </div>
  );
};

export default Home;
