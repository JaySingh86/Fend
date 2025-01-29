import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  InputAccessoryView,
  Button,
  Keyboard,
  TouchableOpacity,
  Image
} from 'react-native';
import colors from '../../constants/colors';
import { Images } from '../../../assets/images';
import globalStyles from '../../styles/styles';

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  errorMessage?: string;
  secureTextEntry?: boolean;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  editable?: boolean; // Prop for enabling/disabling the input
  onNext?: () => void;
  onPrevious?: () => void;
  showPrevious?: boolean;
  showNext?: boolean;
  inputAccessoryViewID?: string;

}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  errorMessage,
  secureTextEntry = false,
  marginTop = 10,
  marginBottom = 10,
  marginLeft = 0,
  marginRight = 0,
  inputStyle,
  containerStyle,
  editable = true, // Default to editable
  onNext,
  onPrevious,
  showPrevious = false,
  showNext = false,
  inputAccessoryViewID = "id",


}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        { marginTop, marginBottom, marginLeft, marginRight },
      ]}
    >
      {/* Input Field */}
      <TextInput
        style={[
          styles.input,
          inputStyle,
          {
            // borderColor: isFocused ? '#007BFF' : '#CCCCCC', // Highlight border on focus
            backgroundColor: editable ? colors.buttonSecondry : colors.dissableSecondry, // Dimmed background if not editable
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholderPrimary}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={editable}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        inputAccessoryViewID={inputAccessoryViewID} // Attach InputAccessoryView
      />

      {/* Input Accessory View */}
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <View style={globalStyles.inputAccessoryContainer}>
          <View style={{ flexDirection: 'row' }}>
            {/* {showPrevious ?
              <TouchableOpacity style={styles.button} onPress={onPrevious}>
                <Image source={Images.arrowLeftLight} style={styles.icon} />
              </TouchableOpacity>
              :
              <View style={styles.button}>
                <Image source={Images.arrowLeftLight} style={styles.iconDissable} />
              </View>
            }
            {showNext ?
              <TouchableOpacity style={styles.button} onPress={onNext}>
                <Image source={Images.arrowRightLight} style={styles.icon} />
              </TouchableOpacity>
              :
              <View style={styles.button}>
                <Image source={Images.arrowRightLight} style={styles.iconDissable} />
              </View>
            } */}

            {/* {showNext && <Button title="Next" onPress={onNext || (() => {})} />} */}
          </View>

          <Button title="Done" onPress={() => Keyboard.dismiss()} />
        </View>
      </InputAccessoryView>

      {/* Validation Error */}
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    height: 64,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colors.textPrimary,
  },
  errorText: {
    color: '#FF0000',
    fontSize: 12,
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: colors.buttonPrimary

  }, iconDissable: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: 'gray'
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default CustomTextInput;
