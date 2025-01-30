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
import store, { RootState, persistor } from './src/redux/store';


import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from './src/theme/ThemeProvider';

import { PersistGate } from 'redux-persist/integration/react';
import Navigator from './src/navigation/Navigator';
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { GoogleCredId } from './src/constants/config';

const App = () => {

  React.useEffect(() =>{
    GoogleSignin.configure({
      // scopes: ["email"], // what API you want to access on behalf of the user, default is email and profile
      webClientId:GoogleCredId, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  });
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <Navigator />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
