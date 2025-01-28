// styles.js
import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

const globalStyles = StyleSheet.create({
    
    NavTitle:{
        fontSize: 20,
        color: colors.textPrimary,
        fontFamily: 'Montserrat-Regular',
        flex:1, textAlign:'center'
    },
    H1Title: {
        fontSize: 24,
        color: colors.textPrimary,
        fontFamily: 'Montserrat-Regular'
    },
    
    H2Title: {
        fontSize: 20,
        color: colors.textPrimary,
        fontFamily: 'Montserrat-Regular'
    },
    H2itleIntraBold: {
        fontSize: 20,
        color: colors.textPrimary,
        fontFamily: 'Inter-Regulr',
        fontWeight:'600'
    },
    H3Title: {
        fontSize: 16,
        color: colors.textPrimary,
        fontFamily: 'Montserrat-Regular'
    },
    H4Title: {
        fontSize: 14,
        color: colors.textPrimary,
        fontFamily: 'Montserrat-Regular'
    },
    H5Title: {
        fontSize: 12,
        color: colors.textPrimary,
        fontFamily: 'Montserrat-Regular'
    },
    Subtitle1:{
        fontSize: 14,
        color: colors.textSecondry,
        lineHeight: 20,
        fontFamily: 'Montserrat-Regular'
    },
    buttonText: {
        color: colors.textPrimary,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Regular'
    },
    cardBox:{
        height: 81,
        backgroundColor: colors.buttonSecondry,
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: colors.buttonPrimary,
        flex:1
    }
});

export default globalStyles;
