// src/screens/LandingScreen.tsx
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    SafeAreaView,
    Alert
} from 'react-native';
import { Images } from '../../../assets/images';
import colors from '../../constants/colors';
import ButtonComponent from '../../components/Button/ButtonComponent';
import MainHeader from '../../components/Header/MainHeader';

const DashboardScreen = ({ navigation }: any) => {
    const handleDrawerToggle = () => {
        navigation.toggleDrawer(); // This will open/close the drawer
      };
    
      const handleNotificationPress = () => {
        Alert.alert('Push Notification Pressed'); // Handle push notification logic
      };
    
    return (
        <View style={{ flex: 1, backgroundColor: colors.primaryBackground}}>
            <MainHeader
                title="Dashboard" // Passing the title here
                onDrawerToggle={handleDrawerToggle} // Pass in the function to toggle the drawer
                onNotificationPress={handleNotificationPress} // Pass in the function to handle notification
            />
           
        </View>

    );
};


export default DashboardScreen;

const styles = StyleSheet.create({
    
});
