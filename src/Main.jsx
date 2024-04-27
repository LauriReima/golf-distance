import { StatusBar, StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import Jotain from './Jotain';
import SignIn from './components/SignIn/SignIn'
import AppBar from './components/Header/AppBar';
import theme from './theme'
import Footer from './components/Footer/Footer';
import MainView from './components/Distance/MainView';
import FairwayView from './components/Fairways/NewFairwayData'
import { useState } from 'react';



const Main = () => {
  
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