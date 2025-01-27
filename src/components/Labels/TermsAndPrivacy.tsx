import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import colors from '../../constants/colors';

interface TermsAndPrivacyProps {
  onTermsPress: () => void;
  onPrivacyPress: () => void;
}

const TermsAndPrivacy: React.FC<TermsAndPrivacyProps> = ({
  onTermsPress,
  onPrivacyPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        By signing up, you agree with our{' '}
        <Text style={styles.link} onPress={onTermsPress}>
          terms of service
        </Text>{' '}
        and{' '}
        <Text style={styles.link} onPress={onPrivacyPress}>
          privacy policy
        </Text>
        . You’ll be able to change notification settings for marketing emails in
        your DFend Account.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical:8
  },
  text: {
    fontSize: 12,
    color: colors.textSecondry,
    lineHeight: 14,
    fontFamily: 'Montserrat-Light',
    textAlign: 'center',
  },
  link: {
    color: colors.textSecondry,
    textDecorationLine: 'underline',
  },
});

export default TermsAndPrivacy;
