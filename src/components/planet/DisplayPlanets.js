import React from 'react';
import { Link } from 'react-router-dom';
import './boxPlanets.css';

function DisplayPlanets({ carac }) {
  return (
    <div className="DisplayPlanets">
      <h2>Planets Details</h2>
      {carac.map((e) => (
        <div className="caroussel">
          <Link to={{ pathname: `/${e.id}` }}>
            <h3>{e.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DisplayPlanets;
