import React from 'react';
import Start from './Start';
import IssStatus from '../iss/Iss';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Start />
      <IssStatus />
    </div>
  );
}

export default Home;
