import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { GameContext } from './GameContext';
import './Character.css';

function Characters() {
  const { showCharacter, handleClickPlay } = useContext(GameContext);
  return (
    <div className="containerCharacters">
      <div className={showCharacter ? 'Characters' : 'Characters-off'}>
        <h2>Choose your Character</h2>
        <div className="img-characters">
          <div>
            <img src="./Alien1.png" alt="male character" />
          </div>
          <div>
            <img src="AlienGroot.png" alt="female character" />
          </div>
        </div>
        <Button variant="contained" onClick={handleClickPlay} type="submit">
          Play
        </Button>
      </div>
    </div>
  );
}

export default Characters;
