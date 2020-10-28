import React from 'react';

function DisplayPlanets({ carac }) {
  return (
    <div className="DisplayPlanets">
      {carac.map((e) => (
        <div className="box">
          <ul>
            <h3>{e.name}</h3>
            <li>Eccentricity: {e.eccentricity}</li>
            <li key={e.id}>English Name {e.englishName}</li>
            <li>Gravity: {e.gravity}</li>
            <li>Density: {e.density}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DisplayPlanets;
