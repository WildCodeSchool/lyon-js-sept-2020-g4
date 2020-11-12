import React, { useState, createContext } from 'react';

export const StartContext = createContext();

export const StartProvider = (props) => {
  const { children } = props;
  const [showInfo, setShowInfo] = useState(true);
  const onClick = () => {
    setShowInfo(false);
  };
  return (
    <StartContext.Provider
      value={{
        showInfo,
        setShowInfo,
        onClick,
      }}
    >
      {children}
    </StartContext.Provider>
  );
};
