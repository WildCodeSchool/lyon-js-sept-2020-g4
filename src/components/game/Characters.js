import React, { useContext } from 'react';
import { GameContext } from './GameContext';

import './Character.css';

function Characters() {
  const { showCharacter, handleClickPlay } = useContext(GameContext);
  return (
    <div className="container">
      <div className={showCharacter ? 'Characters' : 'Characters-off'}>
        <h2>Choose a Character</h2>
        <div className="img-characters">
          <div>
            <img
              src="https://images-ext-2.discordapp.net/external/-5VmwTB7rQHOgLx4Bj-8EDOFiE7rkecf--9rm9iatzk/https/banner2.cleanpng.com/20180324/ehe/kisspng-extraterrestrial-life-extraterrestrials-in-fiction-cartoon-aliens-for-kids-5ab66263e09e19.5823849815219021799201.jpg?width=743&height=660"
              alt="male character"
            />
          </div>
          <div>
            <img
              src="https://img.favpng.com/20/9/11/aliens-cartoon-png-favpng-CjxfD8Veyn6iX58rPCuGUxq37.jpg"
              alt="female character"
            />
          </div>
        </div>
        <button onClick={handleClickPlay} type="submit">
          Play
        </button>
      </div>
    </div>
  );
}

export default Characters;
