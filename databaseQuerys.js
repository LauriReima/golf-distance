import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('golfDB.db');

export const updateScore = (score, holeNumber) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE GolfData 
        SET score = ?
        WHERE holeNumber = ?;`,
        [score, holeNumber],
        (_, results) => {
          console.log('Data lisätty onnistuneesti');
        },
        (_, error) => {
          console.error('Virhe lisättäessä dataa:', error);
        }
      );
    });
  };

  export const fetchDataFromDatabase = () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `SELECT * FROM GolfData;`,
          [],
          (_, { rows }) => {
            const fetchedData = rows._array;
            resolve(fetchedData); // Palauta tiedot
          },
          (_, error) => {
            reject(error); // Palauta virhe
          }
        );
      });
    });
  };