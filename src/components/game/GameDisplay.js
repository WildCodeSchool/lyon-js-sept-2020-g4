import React, { useEffect, useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import planets from './Ressources';
import './gameDisplay.css';
import { GameContext } from './GameContext';

function Game() {
  /* DECLARATION DES HOOKS STATE AVEC USESTATE, UNE POUR CHAQUE VARIABLE: */
  const [ammo, setAmmo] = useState('Choisis ta munition');
  const [ammoImg, setAmmoImg] = useState('./rocketProjet/emptyHeadRocket.png');

  const [ammoDescription, setAmmoDescription] = useState('');

  const [planet, setPlanet] = useState('Votre Cible arrive !');

  const [cannon, setCannon] = useState('Choisis la portée');
  const [cannonImg, setCannonImg] = useState(
    './rocketProjet/emptyRangeRocket.png'
  );

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
        setAmmoImg('./rocketProjet/redHeadRocket-test.png');
        break;
      case 'Foreuse':
        setAmmoDescription(planets[1][2].description);
        setAmmoImg('./rocketProjet/brownHeadRocket-test.png');
        break;
      case 'Algues':
        setAmmoDescription(planets[1][1].description);
        setAmmoImg('./rocketProjet/greenHeadRocket-test.png');
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
      case 'Longue portée':
        setCanonDescription(planets[2][0].description);
        setCannonImg('./rocketProjet/longRangeRocket-test.png');
        break;
      case 'Courte portée':
        setCanonDescription(planets[2][1].description);
        setCannonImg('./rocketProjet/shortRangeRocket-test.png');
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
      cannon === 'Courte portée'
    ) {
      setVictory(true);
    } else if (
      planet.planet === 'Jupiter' &&
      ammo === 'Napalm' &&
      cannon === 'Courte portée'
    ) {
      setVictory(true);
    } else if (
      planet.planet === 'Saturne' &&
      ammo === 'Napalm' &&
      cannon === 'Longue Portée'
    ) {
      setVictory(true);
    } else if (
      planet.planet === 'Uranus' &&
      ammo === 'Foreuse' &&
      cannon === 'Longue Portée'
    ) {
      setVictory(true);
    } else if (
      planet.planet === 'Mercure' &&
      ammo === 'Napalm' &&
      cannon === 'Courte portée'
    ) {
      setVictory(true);
    } else if (
      planet.planet === 'Venus' &&
      ammo === 'Algues' &&
      cannon === 'Courte portée'
    ) {
      setVictory(true);
    } else if (
      planet.planet === 'Pluton' &&
      ammo === 'Foreuse' &&
      cannon === 'Longue Portée'
    ) {
      setVictory(true);
    } else if (
      planet.planet === 'Neptune' &&
      ammo === 'Foreuse' &&
      cannon === 'Longue Portée'
    ) {
      setVictory(true);
    } else if (
      planet.planet === 'Terre' &&
      ammo === 'Napalm' &&
      cannon === 'Courte portée'
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
        <p className="customYourWpn">Ta cible est : {planet.planet}</p>
        <p className="customYourWpn">Personnalise ton missile : </p>

        <div className="characterPlanetsDesktop">
          <div className="characterSelected">
            {characterChoice === 'First' ? (
              <img
                className="characterImg"
                src="monster1.png"
                alt="First Alien"
              />
            ) : (
              <img
                className="characterImg"
                src="Alien3.png"
                alt="Je s'appel Groot"
              />
            )}
          </div>
          <div className="rocketBuild">
            <div className="customRocketContainer">
              <img
                className="smallImg"
                id="botRocket"
                alt="test1"
                src={cannonImg}
              />
              <img
                className="smallImg"
                id="bodyRocketalt"
                alt="test1"
                src="./rocketProjet/bodyRocket-test.png"
              />
              <img
                className="smallImg"
                id="headRocketalt"
                alt="test1"
                src={ammoImg}
              />
            </div>
          </div>
          <div className="planetRandomized">
            <img alt="generated planets" src={planet.url} />
          </div>
        </div>
        <div className="characterPlanetsMobile">
          <div className="characterSelected">
            {characterChoice === 'First' ? (
              <img className="smallImg" src="monster1.png" alt="First Alien" />
            ) : (
              <img
                className="smallImg"
                src="Alien3.png"
                alt="Je s'appel Groot"
              />
            )}
          </div>
          <div className="planetRandomized">
            <img
              className="smallImg"
              alt="generated planets"
              src={planet.url}
            />
          </div>
        </div>
        <div className="rocketBuildMobile">
          <div className="customRocketContainer">
            <img
              className="smallImg"
              id="botRocket"
              alt="test1"
              src={cannonImg}
            />
            <img
              className="smallImg"
              id="bodyRocketalt"
              alt="test1"
              src="./rocketProjet/bodyRocket-test.png"
            />
            <img
              className="smallImg"
              id="headRocketalt"
              alt="test1"
              src={ammoImg}
            />
          </div>
        </div>
        {/* MISE EN PLACE DU CUSTOM ROCKET, IL CONTIENT 2 IMAGES GEREES PAR DES
        USESTATES POUR FAIRE VARIER LA PROPULSION ET LA TËTE ET 1 IMAGE FIXE POUR LE BODY DE LA ROCKET */}

        <div className="containerWpns">
          <div className="chooseAmo">
            <h2>Munition</h2>
            {planets[1].map((item) => (
              <div
                key={item.munition}
                id={item.munition}
                onClick={selectedAmmo}
                onKeyPress={selectedAmmo}
                role="button"
                tabIndex={0}
              >
                <img
                  className="smallImg"
                  id={item.munition}
                  alt="choose a weapon"
                  src={item.url}
                />
              </div>
            ))}
          </div>
          <div className="chooseRange">
            <h2>Portée</h2>

            {planets[2].map((item) => (
              <div
                key={item.canon}
                id={item.canon}
                onClick={selectedCanon}
                onKeyPress={selectedCanon}
                role="button"
                tabIndex={0}
              >
                <img
                  className="smallImg"
                  id={item.canon}
                  alt="choose a Canon"
                  src={item.url}
                />
              </div>
            ))}
          </div>
        </div>
        <Button variant="contained" onClick={matchGame} type="submit">
          TIRER !!
        </Button>
        <div className="descriptionAmo">
          <p id="selectedwpn"> </p>

          <p className="selectedWpns">{ammo}</p>
          <p>{ammoDescription}</p>
        </div>
        <div className="descriptionRange">
          <p className="selectedWpns">{cannon}</p>
          <p>{canonDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Game;
