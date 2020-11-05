import React from 'react';

const Loose = (props) => {
  const { victory } = props;
  return victory === '' ? <div /> : <div>LOOSER !!!!!</div>;
};

export default Loose;
