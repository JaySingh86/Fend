import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, SafeAreaView, Image, InputAccessoryView, Button, Keyboard, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/Button/BackButton';
import colors from '../../constants/colors';
import { Images } from '../../../assets/images';
import ButtonComponent from '../../components/Button/ButtonComponent';
import SecondaryButton from '../../components/Button/SecondaryButton';

const EnableFaceIdScreen: React.FC = ({ route, navigation }: any) => {
  // const navigation = useNavigation();
  const { isFromLogin } = route.params;

  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [timer, setTimer] = useState<number>(30);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);
  const inputsRef = useRef<TextInput[]>([]);
  const inputAccessoryViewID = "uniqueAccessoryViewID";
  const [isFaceIDEnabled, setIsFaceIDEnabled] = useState(false);

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
  const toggleFaceID = () => {
    setIsFaceIDEnabled((previousState) => !previousState);
  };



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
        <Text style={styles.title}>{'Enable\nFace ID'}</Text>
        <Text style={styles.subtitle}>
          To enable Face ID, select the toggle to on. You can select this later in profile settings.
        </Text>
        <Image source={Images.faceIdIcon} style={styles.logo} />
        <View style={styles.faceIDContainer}>
          <Text style={styles.faceIDText}>Enable Face ID</Text>
          <Switch
            value={isFaceIDEnabled}
            onValueChange={toggleFaceID}
            thumbColor={isFaceIDEnabled ? "#ccc" : "#ccc"}
            trackColor={{ false: colors.buttonSecondry, true:colors.buttonPrimary }}
          />
        </View>



      </View>
            {/* Add the Secondary Button */}
            <SecondaryButton title="Skip for Now" onPress={navigation.navigate('')} />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 16,
  },
  logoContainer: {
    marginTop: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, logo: {
    width: 132,
    height: 132,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 48
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
    color: colors.textPrimary,
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
  }, inputAccessoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.buttonSecondry,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  faceIDContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    marginTop: 32,
    marginHorizontal:20,
  },
  faceIDText: {
    fontSize: 14,
    marginRight: 10,
    color: colors.textPrimary,
    fontFamily: 'Montserrat-Regular'

  },
  enabledText: {
    marginTop: 10,
    color: "#4CAF50",
    fontWeight: "bold",
  },
});

export default EnableFaceIdScreen;