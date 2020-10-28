import React from 'react';

function DisplayPlanets({ carac }) {
  return (
    <div className="DisplayPlanets">
      {carac.map((e) => (
        <div className="box">
          <ul>
            <h3>{e.name}</h3>
            <li>Distance du soleil:{e.fromSun} millions de km</li>
            <li>
              Composition:
              {e.composition}
            </li>

            <li>Temperature Min:{e.tempMin}°</li>
            <li>Temperature Max:{e.tempMax}°</li>
            <li>Vitesse de rotation:{e.rotation} km/h</li>
            <li>Période de roration:{e.periodeRotation}h</li>
            <li>Révolution Solaire:{e.revolutionSolaire} jours</li>
            <li>
              Gravity:
              {e.gravity}
            </li>
            <li>
              Density:
              {e.density}
            </li>
          </ul>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayPlanets;
