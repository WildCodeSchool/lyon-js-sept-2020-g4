import React from 'react';
import { Link } from 'react-router-dom';
import './boxPlanets.css';

function DisplayPlanets({ carac }) {
  return (
    <div className="DisplayPlanets">
      {carac.map((e) => (
        <div key={e.id} className="caroussel">
          <Link to={{ pathname: `/${e.id}` }}>
            <h3>{e.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DisplayPlanets;