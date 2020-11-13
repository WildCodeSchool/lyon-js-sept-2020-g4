import React, { useContext } from 'react';
import Rules from './Rules';
import Characters from './Characters';
import GameDisplay from './GameDisplay';
import { GameContext } from './GameContext';
import Victory from './Victory';
import Loose from './Loose';

const Game = () => {
  const { victory } = useContext(GameContext);

  // Tricky thing : create a function to avoid ESlint nested ternary pb in render //
  const avoidNestedRenderProblem = (status) => {
    if (status === 'pending') {
      return <GameDisplay />;
    }
    if (status === true) {
      return <Victory />;
    }
    return <Loose />;
  };
  return (
    <div>
      <Rules />
      <Characters />
      {avoidNestedRenderProblem(victory)}
    </div>
  );
};

export default Game;
