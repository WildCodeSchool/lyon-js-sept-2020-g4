import React, { useEffect, useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import planets from './Ressources';
import './gameDisplay.css';
import { GameContext } from './GameContext';

function Game() {
  /* DECLARATION DES HOOKS STATE AVEC USESTATE, UNE POUR CHAQUE VARIABLE: */
  const [ammo, setAmmo] = useState('Choose a kind of ammo');

  const [ammoDescription, setAmmoDescription] = useState('');

  const [planet, setPlanet] = useState('Votre Cible arrive !');

  const [cannon, setCannon] = useState('Choose a Range Canon');

  const [canonDescription, setCanonDescription] = useState('');

  const { setVictory, showGame, characterChoice } = useContext(GameContext);

  //-----------------------------------------
  // USE EFFECT LIE AU SETPLANET DU DESSUS POUR EVITER QU'UNE NOUVELLE PLANETE SOIT GENEREE A CHAQUE MODIFICATION DU STATE
  useEffect(() => {
    setPlanet(planets[0][Math.floor(Math.random() * planets[0].length)]);
  }, []);
  //-----------------------------------------
  // LA FONCTION ON CLICK QUI VA CHANGER LA VALEUR DE AMMODESCRIPTION POUR POUVOIR AFFICHER LE DETAIL DE CE QUE FAIT UNE MUNITATION DANS LA DIV QUI CORRESPOND
  const selectedAmmo = (e) => {
    setAmmo(e.target.id);

    switch (e.target.id) {
      case 'Napalm':
        setAmmoDescription(planets[1][0].description);
        break;
      case 'Foreuse':
        setAmmoDescription(planets[1][2].description);
        break;
      case 'Algues':
        setAmmoDescription(planets[1][1].description);
        break;
      default:
        console.log('Error');
    }
  };
  //-----------------------------------------
  // LA FONCTION ON CLICK QUI VA CHANGER LA VALEUR DE CANONDESCRIPTION POUR POUVOIR AFFICHER LE DETAIL DE CE QUE FAIT LE CANON DANS LA DIV QUI CORRESPOND
  const selectedCanon = (e) => {
    setCannon(e.target.id);

    switch (e.target.id) {
      case 'Canon Long':
        setCanonDescription(planets[2][0].description);
        break;
      case 'Canon Court':
        setCanonDescription(planets[2][1].description);
        break;

      default:
        console.log('Error');
    }
  };
  //-----------------------------------------
  //-----------------------------------------
  // LA FONCTION ON CLICK QUI VA DETERMINER SI LES STATES MATCH AVEC LES CARACTERISTIQUES DE LA PLANETE POUR SAVOIR SI VICTOIRE OU DEFAITE

  const matchGame = () => {
    if (
      planet.planet === 'Mars' &&
      ammo === 'Algues' &&
      cannon === 'Canon Court'
    ) {
      setVictory(true);
    } else if (
      planet.planet === 'Jupiter' &&
      ammo === 'Napalm' &&
      cannon === 'Canon Court'
    ) {
      setVictory(true);
    } else if (
      planet.planet === 'Saturne' &&
      ammo === 'Napalm' &&
      cannon === 'Canon Long'
    ) {
      setVictory(true);
    } else if (
      planet.planet === 'Uranus' &&
      ammo === 'Foreuse' &&
      cannon === 'Canon Long'
    ) {
      setVictory(true);
    } else if (
      planet.planet === 'Mercure' &&
      ammo === 'Napalm' &&
      cannon === 'Canon Court'
    ) {
      setVictory(true);
    } else if (
      planet.planet === 'Venus' &&
      ammo === 'Algues' &&
      cannon === 'Canon Court'
    ) {
      setVictory(true);
    } else if (
      planet.planet === 'Pluton' &&
      ammo === 'Foreuse' &&
      cannon === 'Canon Long'
    ) {
      setVictory(true);
    } else if (
      planet.planet === 'Neptune' &&
      ammo === 'foreuse' &&
      cannon === 'Canon Long'
    ) {
      setVictory(true);
    } else if (
      planet.planet === 'Terre' &&
      ammo === 'Napalm' &&
      cannon === 'Canon Court'
    ) {
      setVictory(true);
    } else {
      setVictory(false);
    }
    setPlanet(planets[0][Math.floor(Math.random() * planets[0].length)]);
  };
  return (
    <div className={showGame ? 'gamedisplay' : 'gamedisplay-off'}>
      <div className="gameBackgroundOn">
        <p>YOUR TARGET IS : {planet.planet}</p>

        <div className="characterPlanets">
          <div className="characterSelected">
            {characterChoice === 'First' ? (
              <img src="Alien1.png" alt="First Alien" />
            ) : (
              <img src="Alien3.png" alt="Je s'appel Groot" />
            )}
          </div>
          <div className="planetRandomized">
            <img alt="generated planets" src={planet.url} />
          </div>
        </div>
        <div className="chooseAmo">
          CUSTOM YOUR WEAPON
          <form>
            <fieldset>
              <legend>Choose your Ammo:</legend>
              {planets[1].map((item) => (
                <div key={item.munition}>
                  <img alt="choose a weapon" src={item.url} />
                  <input
                    onClick={selectedAmmo}
                    type="radio"
                    id={item.munition}
                    name="wpn"
                  />
                  {item.munition}
                </div>
              ))}
            </fieldset>
          </form>
        </div>
        <div className="descriptionAmo">
          <p id="selectedwpn"> </p>
          <p>DESCRIPTION :</p>
          <p>{ammo}</p>
          <p>{ammoDescription}</p>
        </div>
        <div className="chooseRange">
          <form>
            <fieldset>
              <legend>Adapt your range:</legend>
              {planets[2].map((item) => (
                <div key={item.canon}>
                  <img alt="choose a Canon" src={item.url} />
                  <input
                    onClick={selectedCanon}
                    type="radio"
                    id={item.canon}
                    name="wpn"
                  />
                  {item.canon}
                </div>
              ))}
            </fieldset>
          </form>
        </div>

        <div className="descriptionRange">
          <p>Description du canon</p>
          <p>{cannon}</p>
          <p>{canonDescription}</p>
        </div>

        <Button variant="contained" onClick={matchGame} type="submit">
          TIRER !!
        </Button>
      </div>
    </div>
  );
}

export default Game;
