import React from 'react';
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
} from 'react-native';
import colors from '../../constants/colors';
import globalStyles from '../../styles/styles';

interface PhoneNumberInputProps {
  placeholder?: string;
  value: string;
  onChangeFormattedText: (formattedText: string, rawText: string) => void;
  errorMessage?: string;
  editable?: boolean;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  inputAccessoryViewID?: string;
  onNext?: () => void;
  onPrevious?: () => void;
  showPrevious?: boolean;
  showNext?: boolean;
  maxLength?: number; // Maximum raw number length
}

const formatPhoneNumber = (text: string): string => {
  const cleaned = text.replace(/\D/g, '');
  if (cleaned.length <= 3) return cleaned;
  if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
  return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
};

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  placeholder = 'Enter phone number',
  value,
  onChangeFormattedText,
  errorMessage,
  editable = true,
  marginTop = 10,
  marginBottom = 10,
  marginLeft = 0,
  marginRight = 0,
  inputStyle,
  containerStyle,
  inputAccessoryViewID = 'phone-input-toolbar',
  onNext,
  onPrevious,
  showPrevious = false,
  showNext = false,
  maxLength = 10,
}) => {
  const handleTextChange = (text: string) => {
    const rawText = text.replace(/\D/g, '').slice(0, maxLength); // Limit raw text length
    const formattedText = formatPhoneNumber(rawText);
    onChangeFormattedText(formattedText, rawText);
  };

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        { marginTop, marginBottom, marginLeft, marginRight },
      ]}
    >
      <TextInput
        style={[
          styles.input,
          inputStyle,
          {
            backgroundColor: editable ? colors.buttonSecondry : colors.dissableSecondry, // Dimmed background if not editable
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholderPrimary}
        value={value}
        onChangeText={handleTextChange}
        keyboardType="phone-pad"
        editable={editable}
        inputAccessoryViewID={inputAccessoryViewID}
      />

      {/* InputAccessoryView */}
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <View style={globalStyles.inputAccessoryContainer}>
          {showPrevious && (
            <Button title="Previous" onPress={onPrevious || (() => {})} />
          )}
          {showNext && <Button title="Next" onPress={onNext || (() => {})} />}
          <Button title="Done" onPress={() => Keyboard.dismiss()} />
        </View>
      </InputAccessoryView>

      {/* Validation Error */}
      {/* {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null} */}
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
  inputAccessoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.buttonSecondry,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
});

export default PhoneNumberInput;
