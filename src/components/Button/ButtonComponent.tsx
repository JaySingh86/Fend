// src/components/ButtonComponent.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonComponentProps {
  title: string;
  color: string;
  marginLR?: number;
  marginT?: number;
  marginB?: number;
  onPress: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ title, color, marginLR, marginT, marginB,  onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color , marginHorizontal: marginLR, marginTop: marginT, marginBottom: marginB}]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        paddingHorizontal: 8,
        height: 51,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
  
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'medium',
    fontFamily: 'Inter-Regulr',

  },
});
