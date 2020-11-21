import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { GameContext } from './GameContext';
import './winLoose.css';
import LooseAnimation from './LooseAnimation'

const Loose = () => {
  const { victory, handleClickReplay } = useContext(GameContext);
  return victory === '' ? (
    <div />
  ) : (
    <div className="loose">
      <img src="./defeate.png" alt="T'as perdu" />
      <LooseAnimation />
      <Button variant="contained" onClick={handleClickReplay} type="submit">
        Replay
      </Button>
    </div>
  );
};

export default Loose;
