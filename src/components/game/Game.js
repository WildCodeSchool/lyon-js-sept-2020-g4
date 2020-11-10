import React from 'react';
import Rules from './Rules';
import Characters from './Characters';
import GameDisplay from './GameDisplay';

const Game = () => {
  return (
    <div>
      <h1>Game</h1>
      <Rules />
      <Characters />
      <GameDisplay />
    </div>
  );
};

export default Game;
