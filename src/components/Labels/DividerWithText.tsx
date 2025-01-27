import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import colors from '../../constants/colors';

interface DividerWithTextProps {
  text: string;
  lineColor?: string;
  textStyle?: TextStyle;
  lineStyle?: ViewStyle;
}

const DividerWithText: React.FC<DividerWithTextProps> = ({
  text,
  lineColor = colors.sepratorPrimary, // Default line color
  textStyle,
  lineStyle,
}) => {
  return (
    <View style={styles.container}>
      {/* Left Line */}
      <View style={[styles.line, lineStyle, { backgroundColor: lineColor }]} />
      
      {/* Text */}
      <Text style={[styles.text, textStyle]}>{text}</Text>
      
      {/* Right Line */}
      <View style={[styles.line, lineStyle, { backgroundColor: lineColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.sepratorPrimary, // Default line color
  },
  text: {
    marginHorizontal: 10,
    fontSize: 14,
    color: colors.textSecondry,
    fontFamily: 'Montserrat-Regular',
  },
});

export default DividerWithText;
