import React from 'react';
import { Link } from 'react-router-dom';

function DisplayPlanets({ carac }) {
  return (
    <div className="DisplayPlanets">
      {carac.map((e, index) => (
        <div key={index} className="box">
          <ul>
            <Link to={{ pathname: `/${e.id}` }}>
              <h3>{e.name}</h3>
            </Link>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DisplayPlanets;
