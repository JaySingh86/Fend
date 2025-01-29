// src/screens/LandingScreen.tsx
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    SafeAreaView
} from 'react-native';
import { Images } from '../../../assets/images';
import colors from '../../constants/colors';
import ButtonComponent from '../../components/Button/ButtonComponent';
// import auth from '@react-native-firebase/auth';

const LandingScreen = ({ navigation }: any) => {
    

    React.useEffect(() => {
        // const user = auth().currentUser;
        // if (user) {
        //   // Proceed with Firestore operation
        //   console.log("User is Authenticated:", user)
        // } else {
        //   console.log('User is not authenticated');
        // }
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.primaryBackground }}>
            <ImageBackground source={Images.background} style={styles.background}>
                {/* App Logo */}
                <View style={styles.logoContainer}>
                    <Image source={Images.logo} style={styles.logo} />
                </View>

                {/* Buttons */}
                <View style={styles.buttonContainer}>

                    <View style={{ width:'50%' }}>
                        <ButtonComponent
                            title="Sign Up"
                            marginLR={10}
                            color={colors.buttonPrimary}
                            onPress={() => navigation.navigate('CreateAccount')}
                        />
                    </View>
                    <View style={{ width:'50%' }}>
                        <ButtonComponent
                            title="Log In"
                            marginLR={10}
                            color={colors.buttonSecondry}
                            onPress={() => navigation.navigate('Login')}
                        />
                    </View>
                </View>
            </ImageBackground>

        </SafeAreaView>

    );
};

export default LandingScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoContainer: {
        marginTop: 80,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 196,
        height: 297,
        resizeMode: 'contain',
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 20,
    },
    button: {
        flex: 1,
        padding: 15,
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    loginButton: {
        backgroundColor: colors.buttonSecondry,
    },
    signupButton: {
        backgroundColor: colors.buttonPrimary,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
