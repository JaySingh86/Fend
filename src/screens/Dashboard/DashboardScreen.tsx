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
import globalStyles from '../../styles/styles';
import { ScrollView, Text } from 'react-native-gesture-handler';

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
            <ScrollView style={{paddingHorizontal:20}}>
                <SecurityScoreCard
                    title="Current Security Score"
                    onHelpPress={handleHelpPress}
                />
                <View style={{ flexDirection: 'row',  marginTop: 12 }}>
                    <View style={[globalStyles.cardBox, { marginRight: 8, alignItems: 'center', justifyContent: 'center' }]}>
                        <Text style={{ ...globalStyles.H2itleIntraBold, marginBottom: 4 }}>65</Text>
                        <Text style={globalStyles.H5Title}>Passkeys</Text>
                    </View>
                    <View style={[globalStyles.cardBox, { marginLeft: 8, alignItems: 'center', justifyContent: 'center' }]}>
                        <Text style={{ ...globalStyles.H2itleIntraBold, marginBottom: 4 }}>225</Text>
                        <Text style={globalStyles.H5Title}>All Passwords</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row',  marginTop: 12 }}>
                    <View style={[globalStyles.cardBox, { marginRight: 8, alignItems: 'center', justifyContent: 'center' }]}>
                        <Text style={{ ...globalStyles.H2itleIntraBold, marginBottom: 4 }}>195</Text>
                        <Text style={globalStyles.H5Title}>Reused Passwords</Text>
                    </View>
                    <View style={[globalStyles.cardBox, { marginLeft: 8, alignItems: 'center', justifyContent: 'center' }]}>
                        <Text style={{ ...globalStyles.H2itleIntraBold, marginBottom: 4 }}>12</Text>
                        <Text style={globalStyles.H5Title}>Wi-Fi</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 12 }}>
                    <View style={[globalStyles.cardBox, { marginRight: 8, alignItems: 'center', justifyContent: 'center' }]}>
                        <Text style={{ ...globalStyles.H2itleIntraBold, marginBottom: 4 }}>7</Text>
                        <Text style={globalStyles.H5Title}>Deleted</Text>
                    </View>
                    <View style={{ flex: 1, marginLeft: 8 }} />
                </View>
                <Text style={{...globalStyles.H4Title, textAlign:'center', marginTop:40}}>Consider using SCOUT our AI Assistant to improve your security score. </Text>
            </ScrollView>
        </View>

    );
};


export default DashboardScreen;

const styles = StyleSheet.create({

});
