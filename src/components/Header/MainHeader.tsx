// CustomHeader.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../constants/colors';
import CustomStatusBar from '../StatusBar/CustomStatusBar';
import BackButton from '../Button/BackButton';
import { Images } from '../../../assets/images';
import globalStyles from '../../styles/styles';
// import { Ionicons } from 'react-native-vector-icons'; // Using Ionicons for icons

interface CustomHeaderProps {
  title: string; // The title of the screen
  rightIcon?: ImageSourcePropType; // The name of the right icon (Ionicons icon name)
  onDrawerToggle?: () => void; // Optional prop to toggle drawer
  onNotificationPress?: () => void; // Optional prop to handle notification press
  onRightIconPress?: () => void; // The function to handle right icon press

}

const MainHeader: React.FC<CustomHeaderProps> = ({ title, onDrawerToggle, onRightIconPress, rightIcon }) => {
  return (

    <View style={{ backgroundColor: colors.primaryBackground }}>
      <CustomStatusBar />
      <View style={{ marginBottom: 12 , flexDirection:'row', alignItems:'center', paddingHorizontal:20}}>
        {/* Left Drawer Button */}

        <BackButton
          onPress={onDrawerToggle || (() => { })} // Provide a default no-op function
          backgroundColor={colors.buttonSecondry} // Light gray background
          icon={Images.burgerMenu} // Replace with your back icon
        />

        {/* Center Title */}
        <Text style={globalStyles.NavTitle}>{title}</Text>

        {/* Right Notification Button */}
        <BackButton
          onPress={onRightIconPress || (() => { })} // Provide a default no-op function
          backgroundColor={colors.buttonSecondry} // Light gray background
          icon={rightIcon} // Replace with your back icon
        />


      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    height: 70,
    paddingHorizontal: 15,

  },
  leftButton: {
    marginLeft: 15,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightButton: {
    marginRight: 15,
  },
});

export default MainHeader;
