import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import AuthStack from './AuthStack';
import MainAppStack from './MainAppStack';
import auth from '@react-native-firebase/auth';

const Navigator = () => {
  const isLoggedIn = useSelector((state: RootState) => state.loginStatus.isLoggedIn);
  // const [isLoggedIn , setIsLoggedIn] =  React.useState(false);
  // React.useEffect(() => {
  //   const user = auth().currentUser;
  //   if (user) {
  //     setIsLoggedIn(true);
  //     // Proceed with Firestore operation
  //     console.log("User is Authenticated:", user)
  //   } else {
  //     console.log('User is not authenticated');
  //   }
  // });

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainAppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigator;