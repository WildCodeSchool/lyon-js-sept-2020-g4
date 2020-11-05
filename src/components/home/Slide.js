import React from 'react';
import './Slide.css';

const Slide = ({ url }) => {
  return <img className="slide" src={url} alt={url.site} />;
};

export default Slide;
