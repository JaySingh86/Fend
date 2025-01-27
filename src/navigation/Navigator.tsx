import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import AuthStack from './AuthStack';
import MainAppStack from './MainAppStack';

const Navigator = () => {
  const isLoggedIn = useSelector((state: RootState) => state.loginStatus.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainAppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigator;