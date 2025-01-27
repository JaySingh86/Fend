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

const GeneratorScreen = ({ navigation }: any) => {
    const handleDrawerToggle = () => {
        navigation.toggleDrawer(); // This will open/close the drawer
      };
    
      const handleRightIconPress = () => {
        Alert.alert('Handle Right Icon Pressed'); // Handle push notification logic
      };
    
    return (
        <View style={{ flex: 1, backgroundColor: colors.primaryBackground}}>
            <MainHeader
                title="Generator" // Passing the title here
                onDrawerToggle={handleDrawerToggle} // Pass in the function to toggle the drawer
                rightIcon={Images.plusIcon} // Using Ionicons' search icon for the right icon
                onRightIconPress={handleRightIconPress} // Handle right icon press
            />
           
        </View>

    );
};


export default GeneratorScreen;

const styles = StyleSheet.create({
    
});
