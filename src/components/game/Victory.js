import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import './victory.css';

function Victory() {
  const { handleClickReplay } = useContext(GameContext);
  return (
    <div>
      <img src="./victory.png" alt="T'as gagné" />
      <button onClick={handleClickReplay} type="submit">
        Replay
      </button>
    </div>
  );
}

export default Victory;
