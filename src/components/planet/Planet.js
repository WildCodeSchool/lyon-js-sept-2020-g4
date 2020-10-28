import React from 'react';
import axios from 'axios';
import DisplayPlanets from './DisplayPlanets';
import { ExtraProps } from './ExtraProp';

class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carac: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,neq,true&&filter[]=id,neq,ceres&&filter[]=id,neq,eris&&filter[]=id,neq,haumea&&filter[]=id,neq,makemake'
      )
      .then((response) => {
        const arrFromApi = response.data.bodies;
        const finalArr = arrFromApi.map((item) => {
          const propToAdd = ExtraProps[item.id] ? ExtraProps[item.id] : {};
          console.log(propToAdd);
          return { ...item, ...propToAdd };
        });
        this.setState({
          carac: finalArr,
        });
        console.log(finalArr);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { carac } = this.state;
    return (
      <div className="renderingPlanets">
        {carac ? <DisplayPlanets carac={carac} /> : <p>No data yet</p>}
      </div>
    );
  }
}

export default Planets;
