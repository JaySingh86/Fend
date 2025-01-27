import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image, SafeAreaView } from 'react-native';
import BackButton from '../../components/Button/BackButton';
import { Images } from '../../../assets/images';
import colors from '../../constants/colors';
import PhoneNumberInput from '../../components/Inputs/PhoneNumberInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonComponent from '../../components/Button/ButtonComponent';
import TermsAndPrivacy from '../../components/Labels/TermsAndPrivacy';

const LoginScreen = ({ navigation }: any) => {

    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [rawPhoneNumber, setRawPhoneNumber] = useState<string>('');

    const handleLogin = (): void => {
        if (phoneNumber) {
            console.log('Phone Number:', phoneNumber);
            // Add your logic for sending OTP or logging in here
        } else {
            Alert.alert('Please enter your phone number');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.primaryBackground }}>
            {/* Back Button */}
            <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                <BackButton
                    onPress={() => navigation.goBack()}
                    backgroundColor={colors.buttonSecondry} // Light gray background
                    icon={Images.arrowLeftLight} // Replace with your back icon
                />
                <View style={styles.logoContainer}>
                    <Image source={Images.logoText} style={styles.logo} />
                </View>
                <View style={{ width: 40 }} />
            </View>
            <KeyboardAwareScrollView style={styles.container}>


                {/* Create an Account Text */}
                <Text style={styles.createAccountText}>{'Welcome\nBack!'}</Text>

                {/* Log In Text */}
                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Don't have an account? </Text>
                    <Text
                        style={styles.loginLink}
                        onPress={() => navigation.replace('CreateAccount')}
                    >
                        Sign Up
                    </Text>
                </View>


                <PhoneNumberInput
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChangeFormattedText={(formatted, raw) => {
                        setPhoneNumber(formatted);
                        setRawPhoneNumber(raw);
                    }}
                    maxLength={10} // Limit to 10 digits
                    errorMessage={
                        rawPhoneNumber.length < 10
                            ? 'Please enter a valid 10-digit phone number'
                            : ''
                    }

                />
                <ButtonComponent
                    title="Continue"
                    marginLR={0}
                    marginT={20}
                    color={colors.buttonPrimary}
                    onPress={() => navigation.navigate('OTPVerify',{isFromLogin:true})}
                />


            </KeyboardAwareScrollView>
            <TermsAndPrivacy
                onTermsPress={function (): void {
                    throw new Error('Function not implemented.');
                }} onPrivacyPress={function (): void {
                    throw new Error('Function not implemented.');
                }} />


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    logoContainer: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 168,
        height: 48.03,
    },
    createAccountText: {
        marginTop: 32,
        fontSize: 24,
        color: colors.textPrimary,
        fontFamily: 'Montserrat-Regular'
    },
    loginContainer: {
        marginTop: 20,
        flexDirection: 'row',
        marginBottom: 12
    },
    loginText: {
        fontSize: 16,
        color: colors.textSecondry,
        fontFamily: 'Montserrat-Light'

    },
    loginLink: {
        fontSize: 16,
        color: colors.textPrimary,
        fontFamily: 'Montserrat-Light'

    },
});
export default LoginScreen;
