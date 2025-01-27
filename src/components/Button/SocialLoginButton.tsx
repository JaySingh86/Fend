import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image, ImageSourcePropType } from 'react-native';
import colors from '../../constants/colors';

interface SocialLoginButtonProps {
  title: string;
  backgroundColor: string;
  onPress: () => void;
  icon: ImageSourcePropType; // Icon image source
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  title,
  backgroundColor,
  onPress,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
    >
      <View style={styles.content}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 64,
    borderRadius: 8,
    marginBottom: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 44,
    height: 44,
    marginRight: 20, // Spacing between icon and text
  },
  text: {
    color: colors.textSecondry,
    fontSize: 14,
    fontWeight: 'light',
    fontFamily:'Montserrat-Regular'
  },
});

export default SocialLoginButton;
