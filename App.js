import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { NativeRouter } from 'react-router-native';

import Main from './src/Main';

const App = () => {
  

  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      
    </>
  );
};

export default App;
