import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [showRules, setShowRules] = useState(true);
  const [showCharacter, setShowCharacter] = useState(false);
  const [victory, setVictory] = useState('pending');
  const [showGame, setShowGame] = useState(false);
  const { children } = props;
  const handleClick = () => {
    setShowRules(false);
    setShowCharacter(true);
  };
  const handleClickPlay = () => {
    setShowCharacter(false);
    setShowGame(true);
  };
  const handleClickReplay = () => {
    setVictory('pending');
  };

  return (
    <GameContext.Provider
      value={{
        showRules,
        setShowRules,
        showCharacter,
        setShowCharacter,
        handleClick,
        victory,
        setVictory,
        handleClickPlay,
        showGame,
        setShowGame,
        handleClickReplay,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
