import React, { createContext, useState, useEffect } from 'react';
import { getConnection, initializeDatabase } from './DatabaseConnection';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState('Home');
  const [descriptions, setDescriptions] = useState({});
  const [dbReady, setDbReady] = useState(false);

  const fetchGames = async () => {
    try {
      const db = getConnection();
      const result = await db.getAllAsync('SELECT * FROM games ORDER BY position ASC');
      if (Array.isArray(result)) {
        const descriptionsObj = result.reduce((acc, game) => {
          acc[game.gameName] = {
            name: game.gameName,
            description: game.description,
            gameplayMechanics: game.gameplayMechanics,
            setting: game.setting,
            storytelling: game.storytelling,
            enjoyability: game.enjoyability,
            position: game.position,
            coverArtUrl: game.cover_art_url,
          };
          return acc;
        }, {});
        setDescriptions(descriptionsObj);
      } else {
        console.error('Expected an array of rows, but got:', result);
      }
    } catch (error) {
      console.error('Failed to fetch games from database:', error);
    }
  };


  useEffect(() => {
    const initializeAndFetchGames = async () => {
      try {
        await initializeDatabase();
        setDbReady(true);
        await fetchGames();
      } catch (error) {
        console.error('Failed to initialize database:', error);
      }
    };

    initializeAndFetchGames();
  }, []);

  const handleSave = async (name, description, gameplayMechanics, setting, storytelling, enjoyability, position, coverArtUrl) => {
    const db = getConnection();
    try {
      if (!name) {
        throw new Error('Game name is required');
      }

      const existingGame = descriptions[name];

      if (existingGame) {
        await db.getAllAsync(`
          UPDATE games SET description = ?, gameplayMechanics = ?, setting = ?, storytelling = ?, enjoyability = ?, position = ?, cover_art_url = ? WHERE gameName = ?`,
          [description, gameplayMechanics, setting, storytelling, enjoyability, position, coverArtUrl, name]
        );
      } else {
        await db.getAllAsync(`
          INSERT INTO games (gameName, description, gameplayMechanics, setting, storytelling, enjoyability, position, cover_art_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [name, description, gameplayMechanics, setting, storytelling, enjoyability, position, coverArtUrl]
        );
      }

      setCurrentView('Home');
      await fetchGames();
    } catch (error) {
      console.error('Failed to save game data:', error);
    }
  };


  return (
    <AppContext.Provider value={{ currentView, setCurrentView, descriptions, handleSave, dbReady }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
