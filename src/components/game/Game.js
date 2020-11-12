/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import Rules from './Rules';

import Characters from './Characters';
import GameDisplay from './GameDisplay';
import { GameContext } from './GameContext';
import Victory from './Victory';
import Loose from './Loose';

const Game = () => {
  const { victory } = useContext(GameContext);
  console.log(victory);
  return (
    <div>
      <h1>Game</h1>
      <Rules />
      <Characters />
      {victory === 'pending' ? (
        <GameDisplay />
      ) : victory === true ? (
        <Victory />
      ) : (
        <Loose />
      )}
    </div>
  );
};

export default Game;
