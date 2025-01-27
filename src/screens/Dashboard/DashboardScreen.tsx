// src/screens/LandingScreen.tsx
import React from 'react';
import {
    View,
    StyleSheet,
    Alert
} from 'react-native';
import colors from '../../constants/colors';
import MainHeader from '../../components/Header/MainHeader';
import { Images } from '../../../assets/images';
import SecurityScoreCard from '../../components/Cards/SecurityScoreCard';

const DashboardScreen = ({ navigation }: any) => {
    const handleDrawerToggle = () => {
        navigation.toggleDrawer(); // This will open/close the drawer
    };

    const handleRightIconPress = () => {
        Alert.alert('Right Icon Pressed'); // Handle push notification logic
    };
    const handleHelpPress = () => {
        Alert.alert('Help', 'This is the help section for the card.');
    };

    return (
        <View style={{ flex: 1, backgroundColor: colors.primaryBackground }}>
            <MainHeader
                title="Dashboard" // Passing the title here
                onDrawerToggle={handleDrawerToggle} // Pass in the function to toggle the drawer
                rightIcon={Images.noNotification} // Using Ionicons' search icon for the right icon
                onRightIconPress={handleRightIconPress} // Handle right icon press
            />
            <SecurityScoreCard
                title="Current Security Score"
                content="This is the content of the card. Add any information here."
                onHelpPress={handleHelpPress}
            />


        </View>

    );
};


export default DashboardScreen;

const styles = StyleSheet.create({

});
