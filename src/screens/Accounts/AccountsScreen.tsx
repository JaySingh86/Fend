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
import globalStyles from '../../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'react-native-gesture-handler';
import BackButton from '../../components/Button/BackButton';

const AccountsScreen = ({ navigation }: any) => {
    const handleDrawerToggle = () => {
        navigation.toggleDrawer(); // This will open/close the drawer
    };

    const handleRightIconPress = () => {
        Alert.alert('Handle Right Icon Pressed'); // Handle push notification logic
    };
    const handleHelpPress = () => {
        Alert.alert('Help', 'This is the help section for the card.');
    };
    return (
        <View style={{ flex: 1, backgroundColor: colors.primaryBackground }}>
            <MainHeader
                title="Accounts" // Passing the title here
                onDrawerToggle={handleDrawerToggle} // Pass in the function to toggle the drawer
                rightIcon={Images.plusIcon} // Using Ionicons' search icon for the right icon
                onRightIconPress={handleRightIconPress} // Handle right icon press
            />
            <View style={{ paddingHorizontal: 20 , marginTop:20}}>

                <View style={styles.mainCard}>
                    <Text style={{ ...globalStyles.H3Title, flex: 1, marginRight: 8, lineHeight: 25 }}>{"Strengthen your security by linking an account"}</Text>
                    <BackButton
                        onPress={() => handleHelpPress()} // Provide a default no-op function
                        backgroundColor={colors.buttonTernarry} // Light gray background
                        icon={Images.questionIcon} // Replace with your back icon
                    />
                </View>
                <Text style={{ ...globalStyles.H4Title, marginRight: 8, lineHeight: 25, textAlign:'center', marginTop:16 }}>{"By linking your account, the app can provide  visibility and control over your security settings and activity."}</Text>

            </View>

        </View>

    );
};


export default AccountsScreen;

const styles = StyleSheet.create({
    mainCard: {
        flexDirection: 'row', padding: 12,
        alignItems: 'center',
        backgroundColor: colors.buttonSecondry,
        height: 86,
        borderColor: colors.buttonPrimary,
        borderWidth: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    }

});
