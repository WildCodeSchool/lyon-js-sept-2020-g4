import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { GameContext } from './GameContext';
import './Character.css';

function Characters() {
  const {
    showCharacter,
    handleClickPlay,
    characterChoice,
    handleClickFirstCharacter,
    handleClickSecondCharacter,
  } = useContext(GameContext);
  console.log(characterChoice);
  return (
    <div className="containerCharacters">
      <div className={showCharacter ? 'Characters' : 'Characters-off'}>
        <h2>Choose your Character</h2>
        <div className="img-characters">
          <div
            className="firstCharacter"
            onClick={handleClickFirstCharacter}
            onKeyPress={handleClickFirstCharacter}
            role="button"
            tabIndex={0}
          >
            <img src="./Alien1.png" alt="male character" />
          </div>
          <div
            onClick={handleClickSecondCharacter}
            onKeyPress={handleClickSecondCharacter}
            className="secondcharacter"
            role="button"
            tabIndex={0}
          >
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
