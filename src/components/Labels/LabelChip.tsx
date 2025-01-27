import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import colors from '../../constants/colors';
import globalStyles from '../../styles/styles';

interface DividerWithTextProps {
  text: string;
  bgColor?: string;
}

const LabelChip: React.FC<DividerWithTextProps> = ({
  text,
  bgColor = colors.sepratorPrimary, // Default line color
}) => {
  return (
    <View style={{...styles.container, backgroundColor:bgColor}}>
        <Text style={{...globalStyles.H1Title, textAlign:'center', fontSize:28}}>{text}</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    height:40,
    width:200,
    alignSelf:'center',
    borderRadius:12,
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

export default LabelChip;
