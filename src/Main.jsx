import { StatusBar, StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import Jotain from './Jotain';
import SignIn from './components/SignIn/SignIn'
import AppBar from './components/Header/AppBar';
import theme from './theme'
import Footer from './components/Footer/Footer';
import MainView from './components/Distance/MainView';
import FairwayView from './components/Fairways/NewFairwayData'
import { useEffect, useState } from 'react';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

const loadDatabase = async () => {
  const dbName = 'golfDB.db'
  const dbAsset = require('../assets/golfDB.db')
  const dbUri =  Asset.fromModule(dbAsset).uri
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`

  const fileInfo = await FileSystem.getInfoAsync(dbFilePath)
  if (!fileInfo.exists) {
    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}SQLite`,
      { intermediates: true }
    )
    await FileSystem.downloadAsync(dbUri, dbFilePath)
  }
}

const Main = () => {
  const [dbData, setDbData] = useState(false)

  useEffect(() => {
    loadDatabase()
      .then(() => setDbData(true))
      .catch((e) => console.error(e))
  }, [])
  console.log(dbData);
  return (
    <View style={styles.container}>
      
      <AppBar name ={'Welcome'}/>
      <Routes>
        <Route 
            path="/signin" 
            element={<SignIn />} 
            name={'signIn'}
            exact 
        />
        <Route 
            path="/" 
            element={<MainView />}
            exact
        /> 
        <Route 
            path="/jotain" 
            element={<FairwayView />}
            exact
        /> 
      </Routes>
      <Footer />
    </View>
  );
};

export default Main;


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});