// src/navigation/AuthStack.tsx
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingScreen from '../screens/Auths/LandingScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
