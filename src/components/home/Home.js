import React from 'react';
import Carousel from './Carousel';
import './Carousel.css';
import Start from './Start';
import IssStatus from '../iss/Iss';

function Home() {
  return (
    <div>
      <h1>Welcome to SpaceY</h1>
      <Carousel />
      <h1>Home</h1>
      <Start />
      <IssStatus />
    </div>
  );
}

export default Home;
