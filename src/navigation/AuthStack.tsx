// src/navigation/AuthStack.tsx
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingScreen from '../screens/Auths/LandingScreen';
import CreateAccountScreen from '../screens/Auths/CreateAccountScreen';
import LoginScreen from '../screens/Auths/LoginScreen';
import OTPVerifyScreen from '../screens/Auths/OTPVerifyScreen';
import EnableFaceIdScreen from '../screens/Auths/EnableFaceIdScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTPVerify" component={OTPVerifyScreen} />
      <Stack.Screen name="EnableFaceId" component={EnableFaceIdScreen} />


    </Stack.Navigator>
  );
};

export default AuthStack;
