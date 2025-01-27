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
import store, { RootState,  persistor  } from './src/redux/store';

import MainAppStack from './src/navigation/MainAppStack';

import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from './src/theme/ThemeProvider';

import { PersistGate } from 'redux-persist/integration/react';
const App = () => {
  const isLoggedIn = useSelector((state: RootState) => state.loginStatus.isLoggedIn);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
    <NavigationContainer>
     
    { isLoggedIn ? <MainAppStack /> : <AuthStack />}
    
    </NavigationContainer>
    </ThemeProvider>
    </PersistGate>
    </Provider>
  );
};

export default App;
