import React from 'react';
import axios from 'axios';
import { GiPathDistance, GiPlanetCore } from 'react-icons/gi';
import {
  FaTemperatureLow,
  FaTemperatureHigh,
  FaGrav,
  FaWeightHanging,
} from 'react-icons/fa';
import { RiSunLine, RiSpeedLine } from 'react-icons/ri';

import { FiRotateCcw } from 'react-icons/fi';

import { ExtraProps } from './ExtraProp';
import './boxPlanets.css';

class PlanetDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carac: [],
    };
  }

  // On lance la requete API en fonction de la planete demandée dans l'url
  // Puis on fusionne les deux tableaux (celui en dur et celui renvoyer par l'API)
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    axios
      .get(
        `https://api.le-systeme-solaire.net/rest/bodies/?filter[]=id,eq,${id}`
      )
      .then((response) => {
        const arrFromApi = response.data.bodies;
        const finalArr = arrFromApi.map((item) => {
          const propToAdd = ExtraProps[item.id] ? ExtraProps[item.id] : {};
          return { ...item, ...propToAdd };
        });
        this.setState({
          carac: finalArr,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { carac } = this.state;
    return (
      <div className="planetsDetails">
        <div className="caracsContainer">
          {carac.map((e) => (
            <div key={e.id} className="box">
              <h2>{e.name}</h2>
              <div className="planetsImg">
                <img className="planetImg" src={e.url} alt={e.name} />
              </div>
              <div id="caracList">
                <ul>
                  <li>
                    <GiPathDistance size={70} /> : {e.fromSun} Millions km from
                    sun
                  </li>
                  <br />
                  <li>
                    {' '}
                    <GiPlanetCore size={70} />
                    Composition: {e.composition}
                  </li>
                  <br />
                  <li>
                    <FaTemperatureLow size={70} /> Min: {e.tempMin}°
                  </li>
                  <br />
                  <li>
                    <FaTemperatureHigh size={70} /> Max: {e.tempMax}°
                  </li>
                  <br />
                  <li>
                    <RiSpeedLine size={70} />
                    Vitesse de rotation: {e.rotation} km/h
                  </li>
                  <br />
                  <li>
                    <FiRotateCcw size={70} />
                    Période de roration: {e.periodeRotation}h
                  </li>
                  <br />
                  <li>
                    <RiSunLine size={70} />
                    Révolution Solaire: {e.revolutionSolaire} jours
                  </li>
                  <br />
                  <li>
                    <FaGrav size={70} />
                    Gravity: {e.gravity} m/s²
                  </li>
                  <br />
                  <li>
                    <FaWeightHanging size={70} />
                    Density: {e.density} g/cm3
                  </li>
                  <br />
                  <li>{e.description}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PlanetDetails;
