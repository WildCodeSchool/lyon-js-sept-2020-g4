import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [showRules, setShowRules] = useState(true);
  const [showCharacter, setShowCharacter] = useState(false);
  const { children } = props;
  const handleClick = () => {
    setShowRules(false);
    setShowCharacter(true);
  };

  return (
    <GameContext.Provider
      value={{
        showRules,
        setShowRules,
        showCharacter,
        setShowCharacter,
        handleClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
