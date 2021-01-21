
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Player from './src/Player';
import Router from './src/navigations/Router';
import HomeBottomNavigator from './src/navigations/HomeBottomNavigator';
import { NavigationContainer } from '@react-navigation/native';



// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#030303"/>
      
//       <Player/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router/>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;