import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CountDownInterval.css';
import Iss from '../iss/Iss';

const CountDownInterval = () => {
  const [countDownSeconds, setCountDownSeconds] = useState(0);
  function calculateTimeLeft(launchDate) {
    const difference = Date.parse(launchDate) - Date.parse(new Date());
    return difference / 1000;
  }

  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v3/launches/next`)
      .then((response) => {
        setCountDownSeconds(calculateTimeLeft(response.data.launch_date_utc));
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDownSeconds((prevCountDownSeconds) => prevCountDownSeconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = Math.floor(countDownSeconds % 60);
  const minutes = Math.floor((countDownSeconds / 60) % 60);
  const hours = Math.floor((countDownSeconds / (60 * 60)) % 24);
  const days = Math.floor(countDownSeconds / (60 * 60 * 24));

  return (
    <div className="iss-rocket">
      <Iss />
      <div className="rocket-container">
        <div className="countdown">
          <p>
            {days} jours {hours} heures
            <br /> {minutes} minutes {seconds} secondes
          </p>
        </div>
        <img className="smallrocket" src="rocketcountdown.png" alt="spaceX" />
        <p className="rocket-title">Prochain décollage de SpaceX </p>
      </div>
    </div>
  );
};

export default CountDownInterval;
