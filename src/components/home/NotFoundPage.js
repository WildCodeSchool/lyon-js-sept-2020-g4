import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="notFound">
      <h1>This page doesn't exits !</h1>
      <Link to="/">
        <Button className="notFoundButton" variant="contained" type="button">
          Back to a knonw place
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
