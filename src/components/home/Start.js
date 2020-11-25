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
        <h1>Bienvenue</h1>
        <p>
          A quel point connais-tu notre système solaire ? Explorons notre
          univers, son soleil et ses planètes!
        </p>

        <Button
          variant="contained"
          type="submit"
          onClick={onClick}
          style={{ width: '200px' }}
        >
          Commence le voyage
        </Button>
      </div>
    )
  );
};

export default Start;
