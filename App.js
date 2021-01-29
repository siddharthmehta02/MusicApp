
/* eslint-disable prettier/prettier */

import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'react-native';
import Router from './src/navigations/Router';
import { SongProvider } from './src/provider/SongProvider';

const App: () => React$Node = () => {
  return (
      <>
        <StatusBar barStyle="dark-content" />
        <SongProvider>
        <Router />
        </SongProvider>
      </>
  );
};

export default App;