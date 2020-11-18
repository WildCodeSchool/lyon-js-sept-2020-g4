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
              <h1 className="planetsTitle">{e.name}</h1>
              <div className="planetsImg">
                <img className="planetImg" src={e.url} alt={e.name} />
              </div>
              <div id="caracList">
                <ul>
                  <li>
                    <GiPathDistance size={70} />{' '}
                    <span className="textDetails">
                      {e.fromSun} Millions km from sun
                    </span>
                  </li>
                  <br />
                  <li>
                    {' '}
                    <GiPlanetCore size={70} />
                    <span className="textDetails">{e.composition}</span>
                  </li>
                  <br />
                  <li>
                    <FaTemperatureLow size={70} />{' '}
                    <span className="textDetails">Min: {e.tempMin}°</span>
                  </li>
                  <br />
                  <li>
                    <FaTemperatureHigh size={70} />{' '}
                    <span className="textDetails">Max: {e.tempMax}°</span>
                  </li>
                  <br />
                  <li>
                    <RiSpeedLine size={70} />
                    <span className="textDetails">
                      rotation: {e.rotation} km/h
                    </span>
                  </li>
                  <br />
                  <li>
                    <FiRotateCcw size={70} />
                    <span className="textDetails">
                      Période de roration: {e.periodeRotation}h
                    </span>
                  </li>
                  <br />
                  <li>
                    <RiSunLine size={70} />
                    <span className="textDetails">
                      Révolution Solaire: {e.revolutionSolaire} jours
                    </span>
                  </li>
                  <br />
                  <li>
                    <FaGrav size={70} />
                    <span className="textDetails">
                      Gravity: {e.gravity} m/s²
                    </span>
                  </li>
                  <br />
                  <li>
                    <FaWeightHanging size={70} />
                    <span className="textDetails">
                      Density: {e.density} g/cm3
                    </span>
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
