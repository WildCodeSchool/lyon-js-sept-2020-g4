import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SmallRocket = () => {
  const [nextLaunch, setNextLaunch] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v3/launches/next`)
      .then((response) => {
        setNextLaunch(response.data.launch_date_utc);
        // console.log(response.data.launch_date_utc);
      });
  }, []);

  if (nextLaunch == null) {
    return <div>Loading...</div>;
  }

  const launchDate = nextLaunch; // '2020-11-15T00:49:00.000Z';
  const calculateTimeLeft = () => {
    const difference = Date.parse(launchDate) - Date.parse(new Date());
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return { difference, days, hours, minutes, seconds };
  };
  calculateTimeLeft();
  console.log(calculateTimeLeft());

  return (
    <div>
      <div>{nextLaunch}</div>
    </div>
  );
};

export default SmallRocket;
