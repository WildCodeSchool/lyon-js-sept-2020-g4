import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { GameContext } from './GameContext';

function Victory() {
  const { counterVictories, handleClickReplay } = useContext(GameContext);

  if (counterVictories === 3) {
    return <div>Super win!</div>;
  }

  return (
    <div className="victory">
      <img src="./victory.png" alt="T'as gagné" />
      <Button variant="contained" onClick={handleClickReplay} type="submit">
        Replay
      </Button>
    </div>
  );
}

export default Victory;
