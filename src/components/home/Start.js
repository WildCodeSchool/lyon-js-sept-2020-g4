import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import './start.css';
import { StartContext } from './StartContext';
// Passage en hooks et avec un start context pour gérer l'état
// de la div start, ne la faisant appraitre que lors de l'arrivée sur l'app,
// mais plus lors du retour sur Home.
const Start = () => {
  const { showInfo, onClick } = useContext(StartContext);

  return (
    showInfo && (
      <div className="accessApp">
        <h1>Welcome</h1>
        <p>
          How much do you know about our solar system? Let's dive into a
          detailed presentation of our Star the Sun and its planets!
        </p>

        <Button variant="contained" type="submit" onClick={onClick}>
          START YOUR JOURNEY
        </Button>
      </div>
    )
  );
};

export default Start;
