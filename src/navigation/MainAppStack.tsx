
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Drawer from "./DrawerStack"

const Stack = createNativeStackNavigator();

const MainAppStack = () => {
    return (
<Stack.Navigator screenOptions={{ headerShown: false }}>
<Stack.Screen  name="Drawer" component={Drawer} />

</Stack.Navigator>

    )}
    export default MainAppStack;