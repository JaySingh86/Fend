// src/components/ButtonComponent.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonComponentProps {
  title: string;
  color: string;
  onPress: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ title, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        padding: 15,
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
  
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
