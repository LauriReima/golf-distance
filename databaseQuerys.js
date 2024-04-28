import { SQLite } from 'expo-sqlite';

const db = SQLite.openDatabase('golfDB.db');


export const addDataToGolfData = (score, holeNumber) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE GolfData 
        SET ?
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