import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../constants/colors";

interface SecondaryButtonProps {
  title: string;
  onPress: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width:150,
    marginTop: 20,
    paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    alignSelf:'center',

  },
  buttonText: {
    fontSize: 14,
    color: colors.textPrimary,
    fontFamily: 'Montserrat-Medium'
  },
});

export default SecondaryButton;
