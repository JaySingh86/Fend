/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './src/navigation/AuthStack';
import BottomTab from './src/navigation/Bottomtab';
import Drawer from './src/navigation/Bottomtab';

const App = () => {
  return (
    <NavigationContainer>
     <Drawer />
    </NavigationContainer>
  );
};

export default App;
