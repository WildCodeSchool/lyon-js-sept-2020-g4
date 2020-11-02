import React from 'react';
import Button from '@material-ui/core/Button';
import './game.css';
import { Link } from 'react-router-dom';

const PlayButton = () => {
  return (
    <div className="PlayButton">
      <Link to="/game">
        <Button variant="contained" color="primary">
          Test tes connaissances !
        </Button>
      </Link>
    </div>
  );
};

export default PlayButton;
