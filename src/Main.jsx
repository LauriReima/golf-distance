import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import Jotain from './Jotain';
import AppBar from './AppBar';
import theme from './theme'
import Footer from './Footer';
import MainView from './MainView';


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<MainView />} exact />
        <Route path="*" element={<Navigate to="/" replace />} /> 
      </Routes>
      <Footer />
    </View>
  );
};

export default Main;