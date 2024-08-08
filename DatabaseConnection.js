import * as SQLite from 'expo-sqlite';

const dbName = 'mydatabase';
let db;

const initializeDatabase = async () => {
  db = await SQLite.openDatabaseAsync(dbName);
  await db.execAsync(`
       PRAGMA journal_mode = WAL;
       CREATE TABLE IF NOT EXISTS games (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           gameName TEXT NOT NULL,
           description TEXT NOT NULL,
           gameplayMechanics INTEGER NOT NULL,
           setting INTEGER NOT NULL,
           storytelling INTEGER NOT NULL,
           enjoyability INTEGER NOT NULL,
           position TEXT NOT NULL,
           cover_art_url TEXT
       );
       INSERT OR IGNORE INTO games (id, gameName, description, gameplayMechanics, setting, storytelling, enjoyability, position, cover_art_url) VALUES (1, 'Dark Souls 3', 'Grim/Dark high-fantasy Action-RPG...', 8, 9, 10, 8, '3rd', 'https://www.google.ca/imgres?q=dark%20souls%203%20cover%20art&imgurl=https%3A%2F%2Fsteamuserimages-a.akamaihd.net%2Fugc%2F940585356216404579%2F9A194997DE902263A15E686EE7B5374CEEB0E125%2F%3Fimw%3D512%26%26ima%3Dfit%26impolicy%3DLetterbox%26imcolor%3D%2523000000%26letterbox%3Dfalse&imgrefurl=https%3A%2F%2Fsteamcommunity.com%2Fsharedfiles%2Ffiledetails%2F%3Fid%3D1563877678&docid=XbgHx7Sdar-FXM&tbnid=D_uPxnU4RzKzNM&vet=12ahUKEwj_07y8672HAxXMkokEHZ95DtsQM3oECH4QAA..i&w=512&h=512&hcb=2&ved=2ahUKEwj_07y8672HAxXMkokEHZ95DtsQM3oECH4QAA');
       INSERT OR IGNORE INTO games (id, gameName, description, gameplayMechanics, setting, storytelling, enjoyability, position, cover_art_url) VALUES (2, 'Elden Ring', 'High-fantasy Open-World Action-RPG...', 9, 10, 9, 10, '2nd', 'https://www.google.ca/url?sa=i&url=https%3A%2F%2Fwww.vg247.com%2Felden-ring-datamine-cover-character&psig=AOvVaw1P2lmKJoPfGcwQN9X70zWb&ust=1721847350990000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjRxa_rvYcDFQAAAAAdAAAAABAE');
       INSERT OR IGNORE INTO games (id, gameName, description, gameplayMechanics, setting, storytelling, enjoyability, position, cover_art_url) VALUES (3, 'Bloodborne', 'Gothic/Cosmic Horror Action-RPG...', 10, 10, 10, 10, '1st', 'https://www.google.ca/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fbloodborne%2Fcomments%2F2oftq6%2Fheres_bloodbornes_official_box_art_image_xpost%2F&psig=AOvVaw0RqvBmwPMY6FSrv1E9x03h&ust=1721847199083000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD9l4jrvYcDFQAAAAAdAAAAABAQ');
  `);
};


const selectFromDatabase = async (gameName) => {
    db = await SQLite.openDatabaseAsync(dbName);
    const result = await db.getAllAsync(
        'SELECT gameName, description, gameplayMechanics, setting, storytelling, enjoyability, position, cover_art_url FROM games WHERE gameName = ?',
        [gameName]
    );
    return result;
};

const getConnection = () => {
  return db;
};

export { getConnection, initializeDatabase, selectFromDatabase };
