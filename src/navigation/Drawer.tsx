import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();

type DrawerContentProps = {
  navigation: DrawerNavigationProp<RootStackParamList, 'Home'>;
};




const HomeScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Home Screen</Text>
  </View>
);

const DrawerContent = ({ navigation }: DrawerContentProps) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with profile image URL
          style={styles.profileImage}
        />
        <Text style={styles.name}>Chris Smith</Text>
        <Text style={styles.email}>chris_smith@gmail.com</Text>
      </View>

      {/* Options Section */}
      <View style={styles.optionsContainer}>
        <DrawerOption
          iconSource={{ uri: 'https://via.placeholder.com/20?text=P' }}
          label="My Profile"
          onPress={() => navigation.navigate('Home')}
        />
        <DrawerOption
          iconSource={{ uri: 'https://via.placeholder.com/20?text=F' }}
          label="FAQ"
        />
        <DrawerOption
          iconSource={{ uri: 'https://via.placeholder.com/20?text=S' }}
          label="Share"
        />
        <DrawerOption
          iconSource={{ uri: 'https://via.placeholder.com/20?text=T' }}
          label="Terms & Conditions"
        />
        <DrawerOption
          iconSource={{ uri: 'https://via.placeholder.com/20?text=PP' }}
          label="Privacy Policy"
        />
        <DrawerOption
          iconSource={{ uri: 'https://via.placeholder.com/20?text=I' }}
          label="Invite Friends & Family"
        />
      </View>

      {/* Footer Section */}
      <TouchableOpacity style={styles.upgradeButton}>
        <Text style={styles.upgradeText}>Upgrade to Premium</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

type DrawerOptionProps = {
  iconSource: { uri: string };
  label: string;
  onPress?: () => void;
};

const DrawerOption = ({ iconSource, label, onPress }: DrawerOptionProps) => (
  <TouchableOpacity style={styles.optionRow} onPress={onPress}>
    <Image source={iconSource} style={styles.optionIcon} />
    <Text style={styles.optionLabel}>{label}</Text>
  </TouchableOpacity>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props: DrawerContentProps) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E3141',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 18,
fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    color: '#BBBBBB',
    fontSize: 14,
  },
  optionsContainer: {
    flex: 1,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  optionIcon: {
    width: 20,
    height: 20,
  },
  optionLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 15,
  },
  upgradeButton: {
    backgroundColor: '#4B7BE5',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
  },
  upgradeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signOutButton: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  signOutText: {
    color: '#FF4C4C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  screenText: {
    fontSize: 18,
    color: '#333',
  },
});

export default App;
