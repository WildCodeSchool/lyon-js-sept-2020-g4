import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { GameContext } from './GameContext';
import './Character.css';
// L'utilisation du onKeyPress sur les div, le role et le tabindex
// a été obligatoire pour faire passer le clic sur une div dans ESLINT
function Characters() {
  const {
    showCharacter,
    handleClickPlay,
    handleClickFirstCharacter,
    handleClickSecondCharacter,
  } = useContext(GameContext);
  return (
    <div className="containerCharacters">
      <div className={showCharacter ? 'Characters' : 'Characters-off'}>
        <h2>Choisis ton personnage</h2>
        <div className="img-characters">
          <div
            className="firstCharacter"
            onClick={handleClickFirstCharacter}
            onKeyPress={handleClickFirstCharacter}
            role="button"
            tabIndex={0}
          >
            <img src="./monster1.png" alt="male character" />
          </div>
          <div
            onClick={handleClickSecondCharacter}
            onKeyPress={handleClickSecondCharacter}
            className="secondcharacter"
            role="button"
            tabIndex={0}
          >
            <img src="Alien3.png" alt="female character" />
          </div>
        </div>
        <Button variant="contained" onClick={handleClickPlay} type="submit">
          Jouer
        </Button>
      </div>
    </div>
  );
}

export default Characters;
