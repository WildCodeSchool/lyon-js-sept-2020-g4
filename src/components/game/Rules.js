import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { GameContext } from './GameContext';
import './Rules.css';

function Rules() {
  const { showRules, handleClick } = useContext(GameContext);
  return (
    <div className="container">
      <div className={showRules ? 'Rules' : 'Rules-off'}>
        <h2>Rules</h2>
        <p>
          Tu es un extra-terrestre qui vient de poser sur le soleil (oklm), et
          tu remarque plein de petite balles marrantes qui tournent dans le
          vide, tu comprend très vite que chaque balle possède des
          caractéristiques bien distinctes. <br />
          <br />
          Tu te dis que ce serait vachement fun de faire le ménage par ici, tu
          vas donc, en fonction de la planète qui apparrait et de ses
          caractéristiques, choisir le bon type de munition et la portée de ton
          arme pour réussir à les désintégrer, en vu de rammenner un joli
          displome du SuperDestructeur de l'univers à tes camarades.
          <br />
          <br />A toi de jouer !!
        </p>
        <Button variant="contained" type="submit" onClick={handleClick}>
          Choose a Character
        </Button>
      </div>
    </div>
  );
}

export default Rules;
