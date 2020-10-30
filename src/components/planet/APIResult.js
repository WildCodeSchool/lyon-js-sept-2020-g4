import React from 'react';
import Home from '../home/Home';
import { ExtraProps } from './ExtraProp';
import axios from 'axios';


class APIResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: []
     }
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
    return (  );
  }
}
 
export default APIResult;