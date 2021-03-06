import React from 'react';
import Button from '@material-ui/core/Button';
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
          <Button size="large" variant="contained" type="submit">
            Test tes connaissances !
          </Button>
        </Link>
      </div>
      <CountDownInterval />
    </div>
  );
};

export default Home;
