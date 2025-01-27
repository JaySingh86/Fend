/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';


import AuthStack from './src/navigation/AuthStack';
// import BottomTab from './src/navigation/Bottomtab';
// import Drawer from './src/navigation/DrawerStack';
import store, { RootState,  persistor  } from './src/redux/store';


import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from './src/theme/ThemeProvider';

import { PersistGate } from 'redux-persist/integration/react';
import Navigator from './src/navigation/Navigator';
const App = () => {
  
 
  return (
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
      <ThemeProvider>
   <Navigator />
    </ThemeProvider>
    </PersistGate>
    </Provider>
  );
};

export default App;
