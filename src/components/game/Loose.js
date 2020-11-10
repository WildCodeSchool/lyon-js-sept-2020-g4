import React from 'react';

const Loose = (props) => {
  const { victory } = props;
  return victory === '' ? (
    <div />
  ) : (
    <div>
      <img id="looseImg" alt="defeate img" src="./defeat.png" />
    </div>
  );
};

export default Loose;
