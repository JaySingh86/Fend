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
import TitleHeader from '../../components/Header/TitleHeader';

const ScountAIScreen = ({ navigation }: any) => {
   
    
    return (
        <View style={{ flex: 1, backgroundColor: colors.primaryBackground}}>
            <TitleHeader
                title="Scount AI" // Passing the title here
            />
           
        </View>

    );
};


export default ScountAIScreen;

const styles = StyleSheet.create({
    
});
