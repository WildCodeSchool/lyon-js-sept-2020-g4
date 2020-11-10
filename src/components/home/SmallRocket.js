import React, { useEffect, useState } from 'react';

import axios from 'axios';

const SmallRocket = () => {
  const [nextLaunch, setNextLaunch] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v3/launches/next`)
      .then((response) => {
        setNextLaunch(response.data.launch_date_utc);
        // console.log(response.data.launch_date_local);
      });
  }, [nextLaunch]);

  return (
    <div>
      <div>{nextLaunch}</div>
    </div>
  );
};

export default SmallRocket;
