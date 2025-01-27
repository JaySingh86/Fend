import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Button, Keyboard } from 'react-native';
import BackButton from '../../components/Button/BackButton'; // Adjust the path
import SocialLoginButton from '../../components/Button/SocialLoginButton'; // Adjust the path
import { Images } from '../../../assets/images';
import colors from '../../constants/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DividerWithText from '../../components/Labels/DividerWithText';
import CustomTextInput from '../../components/Inputs/CustomTextInput';
import PhoneNumberInput from '../../components/Inputs/PhoneNumberInput';
import TermsAndPrivacy from '../../components/Labels/TermsAndPrivacy';
import ButtonComponent from '../../components/Button/ButtonComponent';

const CreateAccountScreen = ({ navigation }: any) => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [rawPhoneNumber, setRawPhoneNumber] = React.useState('');


    const field1Ref = React.useRef<any>(null);
    const field2Ref = React.useRef<any>(null);


    const validateInputs = () => {

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
                <Text style={styles.createAccountText}>Create an Account</Text>

                {/* Log In Text */}
                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Already have an account? </Text>
                    <Text
                        style={styles.loginLink}
                        onPress={() => navigation.replace('Login')}
                    >
                        Log In
                    </Text>
                </View>

                {/* Social Login Buttons */}
                <SocialLoginButton
                    title="Sign up with Google"
                    backgroundColor={colors.buttonSecondry}
                    icon={Images.googleIcon} // Replace with your local icon path
                    onPress={() => console.log('Google login pressed')}
                />
                <SocialLoginButton
                    title="Sign up with Apple"
                    backgroundColor={colors.buttonSecondry}
                    icon={Images.appleIcon} // Replace with your local icon path
                    onPress={() => console.log('Facebook login pressed')}
                />
                {/* Divider with "Or continue with" */}
                <DividerWithText text="Or continue with" />
                <CustomTextInput
                    placeholder="First name"
                    value={firstName}
                    onChangeText={setFirstName}
                    errorMessage={""}
                    editable={true}
                    marginBottom={0}

                />
                <CustomTextInput
                    placeholder="Last name"
                    value={lastName}
                    onChangeText={setLastName}
                    errorMessage={""}
                    editable={true}
                    marginBottom={0}
                    showNext

                />
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
                    onPress={() => navigation.navigate('OTPVerify',{isFromLogin:false})}
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

export default CreateAccountScreen;
