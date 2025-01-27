import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ViewStyle, ImageSourcePropType } from 'react-native';
import { Images } from '../../../assets/images';

interface BackButtonProps {
  onPress: () => void;
  backgroundColor?: string;
  icon?: ImageSourcePropType;
  style?: ViewStyle;
}

const CloseButton: React.FC<BackButtonProps> = ({
  onPress,
  backgroundColor = '#FFFFFF',
  icon = Images.arrowLeftLight, // Replace with your local back icon
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }, style]}
      onPress={onPress}
    >
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8, // Slight rounding for a square
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default CloseButton;
