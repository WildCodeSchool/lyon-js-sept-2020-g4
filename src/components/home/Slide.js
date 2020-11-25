import React from 'react';
import './Slide.css';

const Slide = ({ url, name }) => {
  return (
    <div className="hori">
      <img className="slide" src={url} alt={url.site} />
      <p>{name}</p>
    </div>
  );
};

export default Slide;
