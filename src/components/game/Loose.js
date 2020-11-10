import React from 'react';

const Loose = (props) => {
  const { victory } = props;
  return victory === '' ? (
    <div />
  ) : (
    <div>
      <img alt="defeate img" src="./defeat.png" />
    </div>
  );
};

export default Loose;
