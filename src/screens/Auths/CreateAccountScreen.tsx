import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Button, Keyboard, Platform } from 'react-native';
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
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/LoginStatusSlice';

import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { saveUserToDatabase } from '../../api/firebase';


const CreateAccountScreen = ({ navigation }: any) => {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [rawPhoneNumber, setRawPhoneNumber] = React.useState('');


    const field1Ref = React.useRef<any>(null);
    const field2Ref = React.useRef<any>(null);


    const validateInputs = () => {

    };
    const signInWithGoogle = async () => {
        console.log("signInWithGoogle");
        try {
            // iOS does not require hasPlayServices
            if (Platform.OS === 'android') {
                await GoogleSignin.hasPlayServices();
            }
            // Start Google Sign-In process
            const userInfo = await GoogleSignin.signIn();
            console.log("userInfo:", userInfo)
            const { idToken } = await GoogleSignin.getTokens();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign in to Firebase
            const userCredential = await auth().signInWithCredential(googleCredential);
            const user = userCredential.user;

            // Save user details in Firebase Realtime Database
            await saveUserToDatabase(user);

            console.log('User signed in and saved:', user);
            const loginInfo = {
                isLoggedIn: true, // Default state - user is not logged in
                uid: user?.uid,
                createdAt: user?.metadata?.lastSignInTime,
                email: user?.email,
                name: user?.displayName,
                profilePicture: user?.photoURL
            }
            dispatch(login(loginInfo))


        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error(error);
            }
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
                    onPress={() => signInWithGoogle()}
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
                    inputAccessoryViewID={'input1'}
                    value={firstName}
                    onChangeText={setFirstName}
                    errorMessage={""}
                    editable={true}
                    marginBottom={0}
                    showNext
                    onNext={() => console.log("Next tap")}
                />
                
                <CustomTextInput
                    placeholder="Last name"
                    inputAccessoryViewID={'input2'}
                    value={lastName}
                    onChangeText={setLastName}
                    errorMessage={""}
                    editable={true}
                    marginBottom={0}
                    showNext
                    showPrevious
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
                    onPress={() => navigation.navigate('OTPVerify', { isFromLogin: false })}
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
