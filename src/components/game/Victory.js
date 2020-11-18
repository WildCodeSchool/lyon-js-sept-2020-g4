import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { GameContext } from './GameContext';
import './Victory.css';

function Victory() {
  const { counterVictories, handleClickReplay } = useContext(GameContext);

  if (counterVictories === 2) {
    return (
      <div className="trophy-div">
        <img className="trophy" src="./pngegg.png" alt="trophy" />
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
      </div>
    );
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
