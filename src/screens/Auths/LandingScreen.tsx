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

const LandingScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.primaryBackground }}>
            <ImageBackground source={Images.background} style={styles.background}>
                {/* App Logo */}
                <View style={styles.logoContainer}>
                    <Image source={Images.logo} style={styles.logo} />
                </View>

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                    <ButtonComponent
                        title="Sign Up"
                        marginLR={10}
                        color= {colors.buttonPrimary}
                        onPress={() => navigation.navigate('CreateAccount')}
                    />
                    <ButtonComponent
                        title="Log In"
                        marginLR={10}
                        color= {colors.buttonSecondry}
                        onPress={() => navigation.navigate('Login')}
                    />
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
