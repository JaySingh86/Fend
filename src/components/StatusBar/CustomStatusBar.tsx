import React from 'react';
import { StatusBar, SafeAreaView, Platform, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const CustomStatusBar: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {
        Platform.OS === 'android' ? 
        (
          <StatusBar backgroundColor={colors.primaryBackground} barStyle="light-content" />
        ) : 
        (
          <StatusBar translucent backgroundColor={colors.primaryBackground} barStyle="light-content" />
        )
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 0, // You can customize the SafeAreaView's style here if needed
  },
});

export default CustomStatusBar;
