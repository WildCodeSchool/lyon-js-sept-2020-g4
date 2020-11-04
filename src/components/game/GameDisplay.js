import React, { useEffect, useState } from 'react';
import planets from './Ressources';
import './gameDisplay.css';

function Game() {
  /* DECLARATION DES HOOKS STATE AVEC USESTATE, UNE POUR CHAQUE VARIABLE: */
  const [ammo, setAmmo] = useState('Choose a kind of ammo');

  const [ammoDescription, setAmmoDescription] = useState('');

  const [planet, setPlanet] = useState('Votre Cible arrive !');

  const [cannon, setCannon] = useState('Choose a Range Canon');

  const [canonDescription, setCanonDescription] = useState('');
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
  return (
    <div>
      <div className="gameBackground">
        <div className="chooseWeapon">
          <div className="characterSelected">
            RETOUR DU PERSONNAGE PRECEDEMENT SELECTIONNE
          </div>
          CUSTOM YOUR WEAPON
          <form>
            <fieldset>
              <legend>Choose your Ammo:</legend>
              {planets[1].map((item) => (
                <div>
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
          <form>
            <fieldset>
              <legend>Adapt your range:</legend>
              {planets[2].map((item) => (
                <div>
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
        <div className="descriptions">
          <p id="selectedwpn"> </p>
          <p>DESCRIPTION :</p>
          <p>{ammo}</p>
          <p>{ammoDescription}</p>
          <div>
            <p>Description du canon</p>
            <p>{cannon}</p>
            <p>{canonDescription}</p>
          </div>

          <button type="submit">TIRER !!</button>
          <div className="cockpit" />
        </div>

        <div className="planetRandomized">
          <p>YOUR TARGET IS : {planet.planet}</p>
          <img alt="generated planets" src={planet.url} />
        </div>
      </div>
      {/* (??????) ? <Victoire /> : <Defaite /> */}
    </div>
  );
}

export default Game;
