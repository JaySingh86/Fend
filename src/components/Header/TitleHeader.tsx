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

}

const TitleHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  return (

    <View style={{ backgroundColor: colors.primaryBackground }}>
      <CustomStatusBar />
      <View style={{ marginBottom: 12 , flexDirection:'row', alignItems:'center', paddingHorizontal:20, height:40}}>
        {/* Center Title */}
        <Text style={globalStyles.NavTitle}>{title}</Text>
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

export default TitleHeader;
