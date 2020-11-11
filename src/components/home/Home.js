import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import './Carousel.css';
import Start from './Start';
import CountDownInterval from './CountDownInterval';

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
      <CountDownInterval />
    </div>
  );
};

export default Home;
