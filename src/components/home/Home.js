import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import './Carousel.css';
import Start from './Start';
import IssStatus from '../iss/Iss';

const Home = () => {
  return (
    <div className="renderingPlanets">
      <Start />
      <Carousel />
      <Link to="/game">
        <button className="PlayingButton" type="submit">
          Test tes connaissances !
        </button>
      </Link>
      <IssStatus />
    </div>
  );
};

export default Home;
