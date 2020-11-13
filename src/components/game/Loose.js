import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { GameContext } from './GameContext';
import './winLoose.css';

const Loose = () => {
  const { victory, handleClickReplay } = useContext(GameContext);
  return victory === '' ? (
    <div />
  ) : (
    <div className="loose">
      <img src="./defeate.png" alt="T'as perdu" />
      <Button variant="contained" onClick={handleClickReplay} type="submit">
        Replay
      </Button>
    </div>
  );
};

export default Loose;
