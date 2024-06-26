import React, { createContext, useState } from 'react';

const AppContext = createContext();

const initialDescriptions = {
  ds3: "Game: Dark Souls 3\n\nDescription: Grim/Dark high-fantasy Action-RPG focused around an un-ending cycle and humanities inability to accept change\n\nGameplay/Mechanics: 8/10\nSetting: 9/10\nStorytelling: 10/10\nEnjoyability: 8/10\n\nPosition: 3rd",
  er: "Game: Elden Ring\n\nDescription: High-fantasy Open-World Action-RPG focused around the choice between clinging to an old way of life, or orchestrating its destruction in place of a new one\n\nGameplay/Mechanics: 9/10\nSetting: 10/10\nStorytelling: 9/10\nEnjoyability: 10/10\n\nPosition: 2nd",
  bb: "Game: Bloodborne\n\nDescription: Gothic/Cosmic Horror Action-RPG focused around the madness and atrocities that result from humanity's blind pursuit of power and understanding, and its insignificance in the face of indifferent forces represented as Lovecraftian Outer-Gods\n\nGameplay/Mechanics: 10/10\nSetting: 10/10\nStorytelling: 10/10\nEnjoyability: 10/10\n\nPosition: 1st",
};

export const AppProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState('Home');
  const [descriptions, setDescriptions] = useState(initialDescriptions);

  const handleSave = (key, description) => {
    setDescriptions((prevDescriptions) => ({
      ...prevDescriptions,
      [key]: description,
    }));
    setCurrentView('Home');
  };

  return (
    <AppContext.Provider value={{ currentView, setCurrentView, descriptions, handleSave }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
