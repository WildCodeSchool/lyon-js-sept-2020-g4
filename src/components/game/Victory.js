import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { GameContext } from './GameContext';

function Victory() {
  const { handleClickReplay } = useContext(GameContext);
  return (
    <div>
      <img src="./victory.png" alt="T'as gagné" />
      <Button variant="contained" onClick={handleClickReplay} type="submit">
        Replay
      </Button>
    </div>
  );
}

export default Victory;
