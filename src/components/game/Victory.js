import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { GameContext } from './GameContext';
import './Victory.css';

function Victory() {
  const { handleClickReplay } = useContext(GameContext);

  return (
    <div className="trophy-div">
      <div className="confetti-container">
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />

        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
      </div>
      <img src="./pngegg.png" alt="trophy" />
      <Button variant="contained" onClick={handleClickReplay} type="submit">
        Replay
      </Button>
    </div>
  );
}

export default Victory;
