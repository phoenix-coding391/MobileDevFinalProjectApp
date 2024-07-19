import * as SQLite from 'expo-sqlite';

const dbName = 'mydatabase';
let db;

const initializeDatabase = async () => {
  db = await SQLite.openDatabaseAsync(dbName);
  const result = await db.getAllAsync('SELECT * FROM games');
  if(result.length == 0){
      await db.execAsync(`
           PRAGMA journal_mode = WAL;
           CREATE TABLE IF NOT EXISTS games (id INTEGER PRIMARY KEY NOT NULL, gameName TEXT NOT NULL, description TEXT NOT NULL, gameplayMechanics INTEGER NOT NULL, setting INTEGER NOT NULL, storytelling INTEGER NOT NULL, enjoyability INTEGER NOT NULL, position TEXT NOT NULL);
           INSERT INTO games (gameName, description, gameplayMechanics, setting, storytelling, enjoyability, position) VALUES ('Dark Souls 3', 'Grim/Dark high-fantasy Action-RPG focused around an un-ending cycle and humanities inability to accept change', 8, 9, 10, 8, "3rd");
           INSERT INTO games (gameName, description, gameplayMechanics, setting, storytelling, enjoyability, position) VALUES ('Dark Souls 3', 'Grim/Dark high-fantasy Action-RPG focused around an un-ending cycle and humanities inability to accept change', 8, 9, 10, 8, "3rd");
           INSERT INTO games (gameName, description, gameplayMechanics, setting, storytelling, enjoyability, position) VALUES ('Dark Souls 3', 'Grim/Dark high-fantasy Action-RPG focused around an un-ending cycle and humanities inability to accept change', 8, 9, 10, 8, "3rd");
      `);
  };

// DO NOT UNCOMMENT OR I WILL EAT YOUR FACE
  //await db.execAsync('DELETE FROM games');
  console.log('Database initialized successfully');
  console.log(result);
};

const selectFromDatabase = async () => {

};

const getConnection = () => {
  return db; // Return the already opened database connection
};

export { getConnection, initializeDatabase };
