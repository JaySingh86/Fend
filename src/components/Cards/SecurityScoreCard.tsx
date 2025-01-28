import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../Button/BackButton';
import colors from '../../constants/colors';
import { Images } from '../../../assets/images';
import globalStyles from '../../styles/styles';
import LabelChip from '../Labels/LabelChip';
// import { Ionicons } from 'react-native-vector-icons';

const { width } = Dimensions.get('window');

interface CardProps {
    title: string; // Card title
    onHelpPress: () => void; // Function to handle help button press
}

const SecurityScoreCard: React.FC<CardProps> = ({ title, onHelpPress }) => {
    return (
        // <View style={styles.cardContainer}>
        //     {/* Title Section with Gradient */}
        //     <LinearGradient
        //         colors={['#313A5B', '#21273D']}
        //         style={styles.titleGradient}
        //     >
        //         <View style={styles.titleContainer}>
        //             <Text style={styles.titleText}>{title}</Text>
        //             <BackButton
        //                 onPress={console.log("")} // Provide a default no-op function
        //                 backgroundColor={colors.buttonSecondry} // Light gray background
        //                 icon={Images.questionIcon} // Replace with your back icon
        //             />
        //         </View>
        //     </LinearGradient>

        //     {/* Content Section with Gradient */}
        //     {/* <LinearGradient
        //         colors={['#21273D', '#313A5B']}
        //         style={styles.contentGradient}
        //     >
        //         <Text style={styles.contentText}>{content}</Text>
        //     </LinearGradient> */}
        // </View>
        <LinearGradient
            colors={['#313A5B', '#21273D']}
            style={styles.cardContainer}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 12, alignItems: 'center' }}>
                <Text style={globalStyles.H3Title}>{title}</Text>
                <BackButton
                    onPress={onHelpPress} // Provide a default no-op function
                    backgroundColor={colors.buttonTernarry} // Light gray background
                    icon={Images.questionIcon} // Replace with your back icon
                />
            </View>
            <View style={{ backgroundColor: colors.buttonPrimary, height: 1 }} />
            <View style={{ paddingTop:12 , paddingBottom:20}}>
                <Text style={{ ...globalStyles.H1Title, textAlign: 'center', fontSize: 46 , marginBottom:8}}>{"70"}</Text>
                <LabelChip
                    bgColor={colors.greenPrimarry} // Light gray background
                    text={"Good"} // Replace with your back icon
                />

            </View>
        </LinearGradient>
    );
};

export default SecurityScoreCard;

const styles = StyleSheet.create({
    cardContainer: {
        width: width - 40,
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
        alignSelf: 'center',
        elevation: 5,
        shadowColor: '#FFF',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        borderWidth: 0.5,
        borderColor: colors.buttonPrimary
    },
    titleGradient: {
        padding: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    helpButton: {
        padding: 5,
    },
    contentGradient: {
        padding: 15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    contentText: {
        color: 'white',
        fontSize: 16,
        lineHeight: 22,
    },
});
