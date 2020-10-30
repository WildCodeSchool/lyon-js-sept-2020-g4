import React from 'react';
import Home from '../home/Home';
import { ExtraProps } from './ExtraProp';
import axios from 'axios';

function PlanetsDetails({ carac, match }) {
  const data = match.params;
  let finalArr = [];
  console.log(data);
  console.log(finalArr);

  const getDataFromArr = () => {
    axios
      .get(
        'https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,neq,true&&filter[]=id,neq,ceres&&filter[]=id,neq,eris&&filter[]=id,neq,haumea&&filter[]=id,neq,makemake'
      )
      .then((response) => {
        const arrFromApi = response.data.bodies;
        finalArr = arrFromApi.map((item) => {
          const propToAdd = ExtraProps[item.id] ? ExtraProps[item.id] : {};
          return { ...item, ...propToAdd };
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getDataFromArr();

  return (
    <div className="DisplayPlanets">
      {/* {carac.map((e, index) => (
        <div key={index} className="box">
          <ul>
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
      ))} */}
      <p>coucou</p>
    </div>
  );
}

export default PlanetsDetails;
