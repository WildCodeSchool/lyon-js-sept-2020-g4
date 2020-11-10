import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import './Rules.css';

function Rules() {
  const { showRules, handleClick } = useContext(GameContext);
  return (
    <div className="container">
      <div className={showRules ? 'Rules' : 'Rules-off'}>
        <h2>Rules</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi
        </p>
        <button type="submit" onClick={handleClick}>
          Choose a Character
        </button>
      </div>
    </div>
  );
}

export default Rules;
