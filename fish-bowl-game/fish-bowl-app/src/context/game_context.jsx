// src/context/GameContext.jsx
import { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [input, setInput] = useState(''); // Store your input here

  return (
    <GameContext.Provider value={{ input, setInput }}>
      {children}
    </GameContext.Provider>
  );
};