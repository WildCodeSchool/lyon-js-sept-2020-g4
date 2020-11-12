import React, { useContext } from 'react';
import { GameContext } from './GameContext';

const Loose = () => {
  const { victory, handleClickReplay } = useContext(GameContext);
  return victory === '' ? (
    <div />
  ) : (
    <div>
      <img src="./defeate.png" alt="T'as perdu" />
      <button onClick={handleClickReplay} type="submit">
        Replay
      </button>
    </div>
  );
};

export default Loose;
