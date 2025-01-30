import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Images } from '../../../assets/images';

import { ImageSourcePropType } from 'react-native';
import globalStyles from '../../styles/styles';
import colors from '../../constants/colors';

interface AccountCardProps {
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
  status: boolean;
  onDelete: () => void;
}

const AccountCard: React.FC<AccountCardProps> = ({ image, title, subTitle, status, onDelete }) => {
  return (
    <View style={{...styles.card, backgroundColor: status ? colors.buttonSecondry : colors.dissableSecondry}}>
      <Image source={image} style={styles.image} />
      <View style={styles.details}>
        <Text style={globalStyles.H3Title}>{title}</Text>
        <Text style={globalStyles.Subtitle1}><View style={{width:6, height:6, backgroundColor:status ? colors.greenPrimarry : colors.redPrimarry, borderRadius:3}}/>  {subTitle}</Text>
      </View>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Image source={Images.trash} style={styles.trash} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    ...globalStyles.cardBox,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    marginLeft:8,
    width: 50,
    height: 50,
    borderRadius: 6,
    marginRight: 10,
  },
  trash: {
    width: 17.41,
    height: 20,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
  },
  deleteButton: {
    padding: 8,
  },
});

export default AccountCard;
