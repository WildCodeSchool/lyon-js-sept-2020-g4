import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [showRules, setShowRules] = useState(true);
  const [showCharacter, setShowCharacter] = useState(false);
  const [counterVictories, setCounterVictories] = useState(0);
  const [victory, setVictory] = useState('pending');
  const [showGame, setShowGame] = useState(false);
  const [characterChoice, setCharacterChoice] = useState('test');
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
    if (counterVictories === 3) {
      setCounterVictories(0);
    }
  };
  const handleClickFirstCharacter = () => {
    setCharacterChoice('First');
  };
  const handleClickSecondCharacter = () => {
    setCharacterChoice('Second');
  };

  const setVictoryAndSuperWin = (newVictory) => {
    if (newVictory === true) {
      setCounterVictories((prevCounter) => prevCounter + 1);
    } else {
      setCounterVictories((prevCounter) => prevCounter - 1);
    }
    setVictory(newVictory);
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
        counterVictories,
        setVictory: setVictoryAndSuperWin,
        handleClickPlay,
        showGame,
        setShowGame,
        handleClickReplay,
        characterChoice,
        setCharacterChoice,
        handleClickFirstCharacter,
        handleClickSecondCharacter,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
