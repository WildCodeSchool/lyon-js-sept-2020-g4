import React from 'react';
import axios from 'axios';
import { ExtraProps } from './ExtraProp';

class PlanetDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carac: [],
    };
  }

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
        console.log(error);
      });
  }

  render() {
    const { carac } = this.state;

    return (
      <div className="DisplayPlanets">
        {carac.map((e) => (
          <div key={e.id} className="box">
            <ul>
              <h3>{e.name}</h3>
              <li>Distance du soleil:{e.fromSun} millions de km</li>
              <li>Composition:{e.composition}</li>
              <li>Temperature Min:{e.tempMin}°</li>
              <li>Temperature Max:{e.tempMax}°</li>
              <li>Vitesse de rotation:{e.rotation} km/h</li>
              <li>Période de roration:{e.periodeRotation}h</li>
              <li>Révolution Solaire:{e.revolutionSolaire} jours</li>
              <li>Gravity:{e.gravity}</li>
              <li>Density:{e.density}</li>
            </ul>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PlanetDetails;