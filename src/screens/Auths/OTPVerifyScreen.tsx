import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, SafeAreaView, Image ,InputAccessoryView, Button, Keyboard} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/Button/BackButton';
import colors from '../../constants/colors';
import { Images } from '../../../assets/images';
import ButtonComponent from '../../components/Button/ButtonComponent';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/LoginStatusSlice';
import auth from '@react-native-firebase/auth';
import { parseFirebaseError } from '../../utils/firebaseErrorUtils';
import database from '@react-native-firebase/database';

const OTPVerifyScreen: React.FC = ({ route, navigation }: any) => {
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  const { isFromLogin, otpConfirmation } = route.params;

  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [timer, setTimer] = useState<number>(30);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);
  const inputsRef = useRef<TextInput[]>([]);
  const inputAccessoryViewID = "uniqueAccessoryViewID";
  const [phone, setPhone] = useState('User Phone Number');
  const [name, setName] = useState('+918377906186');

  useEffect(() => {
    let countdown: NodeJS.Timeout;
    if (isResendDisabled && timer > 0) {
      countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      setIsResendDisabled(false);
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [timer, isResendDisabled]);

  const handleResendCode = () => {
    setIsResendDisabled(true);
    setTimer(30);
    // Add your logic to resend the OTP here
    console.log('OTP Resent');
  };

  const handleChange = (value: string, index: number) => {
    if (/\d/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        inputsRef.current[index + 1]?.focus();
      } else if (!value && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 6) {
      console.log('OTP Verified:', enteredOtp);
      // Add your OTP verification logic here
    } else {
      Alert.alert('Please enter all 6 digits of the OTP');
    }
  };
  // Step 2: Verify OTP & Save User to Database
  const verifyOTP = async () => {
    console.log('otpConfirmation',otp)
    const joinedOTP =  otp.join('');  // Concatenates all elements without spaces

    try {
      if (!otp) {
        throw new Error('Please enter the OTP.');
      }
      if (!otpConfirmation.verificationId) {
        throw new Error('Verification ID is missing. Please request a new OTP.');
      }
      if (!otpConfirmation) return;
      // const credential = auth.PhoneAuthProvider.credential(otpConfirmation.verificationId, joinedOTP);
      // await auth().signInWithCredential(credential);

      const userCredential = await otpConfirmation.confirm(joinedOTP);
      const userId = userCredential.user.uid;
      console.log("userCredential:",userCredential,userId )

      // Store user data in Firebase Realtime Database
      await database().ref(`/users/${userId}`).set({
        name,
        phone
      });

      Alert.alert('Success', 'User signed up successfully!');
    } catch (error) {
      console.error('Invalid OTP:', parseFirebaseError(error));
      Alert.alert('Error', 'Invalid OTP. Try again.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primaryBackground }}>
      {/* Back Button */}
      <View style={{ flexDirection: 'row-reverse', paddingHorizontal: 20 }}>
        <BackButton
          onPress={() => navigation.goBack()}
          backgroundColor={colors.buttonSecondry} // Light gray background
          icon={Images.closeIcon} // Replace with your back icon
        />
      </View>

      {/* OTP Form */}
      <View style={styles.centeredContent}>
        <Text style={styles.title}>{isFromLogin ? 'Welcome\nBack, Chris!' : 'Verify your\nphone number'}</Text>
        <Text style={styles.subtitle}>
          We have sent the OTP code to the phone number ending in{" "}
          <Text style={styles.highlight}>0153</Text>.
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              inputAccessoryViewID={inputAccessoryViewID}
              ref={(ref) => (inputsRef.current[index] = ref!)}
              style={styles.otpBox}
              value={digit}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(value) => handleChange(value, index)}
            />
            
          ))}
        </View>
        <InputAccessoryView nativeID={inputAccessoryViewID}>
        <View style={styles.inputAccessoryContainer}>
          <Button title="Done" onPress={() =>{ Keyboard.dismiss() }} />
        </View>
      </InputAccessoryView>
        
       

        {/* <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity> */}

        {/* Resend Code Section */}
        <View style={styles.resendContainer}>
       
          <Text style={styles.timerText}>
            {isResendDisabled ? `Resend code ( 0:${timer} )` : "Didn’t receive code?"}            
          </Text>
          {!isResendDisabled && (
            <TouchableOpacity onPress={() => handleResendCode()}>
              <Text style={styles.resendText}>Resend Code</Text>
            </TouchableOpacity>
          )}
        </View>
        <ButtonComponent
          title="Verify Me"
          marginLR={0}
          marginT={20}
          color={colors.buttonPrimary}
          onPress={() => verifyOTP()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 16,
  },

  centeredContent: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    marginTop: 32,
    fontSize: 24,
    color: colors.textPrimary,
    fontFamily: 'Montserrat-Regular'
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: colors.textSecondry,
    marginBottom: 16,
    lineHeight: 20,
    fontFamily: 'Montserrat-Regular'
  },
  highlight: {
    color: colors.textPrimary, // Change to your preferred color
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Montserrat-Regular'

  },
  otpContainer: {
    marginTop: 12,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  otpBox: {
    width: 40,
    height: 40,
    backgroundColor: colors.buttonSecondry,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    color:colors.textPrimary,
    fontFamily: 'Montserrat-Regular'

  },
  verifyButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 16,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  timerText: {
    fontSize: 14,
    color: colors.textSecondry,
    fontFamily: 'Montserrat-Light'

  },
  resendText: {
    fontSize: 14,
    color: colors.textPrimary,
    marginTop: 4,
    fontFamily: 'Montserrat-Bold'
  },inputAccessoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.buttonSecondry,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
});

export default OTPVerifyScreen;