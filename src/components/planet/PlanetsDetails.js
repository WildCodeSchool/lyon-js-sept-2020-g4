import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
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
      <div className="caracsContainer">
        {carac.map((e) => (
          <div key={e.id} className="box">
            <h2>{e.name}</h2>
            <div className="planetsImg">
              <img className="planetImg" src={e.url} alt={e.name} />
            </div>
            <div id="caracList">
              <ul>
                <li>Distance du soleil: {e.fromSun} Millions de km</li>
                <br />
                <li>Composition: {e.composition}</li>
                <br />
                <li>Temperature Min: {e.tempMin}°</li>
                <br />
                <li>Temperature Max: {e.tempMax}°</li>
                <br />
                <li>Vitesse de rotation: {e.rotation} km/h</li>
                <br />
                <li>Période de roration: {e.periodeRotation}h</li>
                <br />
                <li>Révolution Solaire: {e.revolutionSolaire} jours</li>
                <br />
                <li>Gravity: {e.gravity} m/s²</li>
                <br />
                <li>Density: {e.density} g/cm3</li>
                <br />
                <li>{e.description}</li>
              </ul>
            </div>
          </div>
        ))}
        <div className="planetButtonBack">
          <Button variant="contained" type="submit">
            Back
          </Button>
        </div>
      </div>
    );
  }
}

export default PlanetDetails;
