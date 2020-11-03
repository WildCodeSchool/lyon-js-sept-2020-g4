import React from 'react';
import './Character.css';

function Characters(props) {
  const { showCharacter } = props;
  return (
    <div className={showCharacter ? 'Characters' : 'Characters-off'}>
      <h2>Choose a Character</h2>
      <button type="submit">Play</button>
    </div>
  );
}

export default Characters;
