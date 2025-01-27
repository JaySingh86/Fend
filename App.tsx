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
import Drawer from './src/navigation/DrawerStack';

import MainAppStack from './src/navigation/MainAppStack';
import { SafeAreaView } from 'react-native';
const App = () => {
  return (
    <NavigationContainer>
      {/* <SafeAreaView style={{ flex:1}}> */}
     <MainAppStack />
     {/* </SafeAreaView> */}
    </NavigationContainer>
  );
};

export default App;
