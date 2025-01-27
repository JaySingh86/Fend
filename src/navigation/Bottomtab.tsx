import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, StyleProp, ViewStyle } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';
import { Images } from '../../assets/images';
import colors from '../constants/colors';
import Drawer from "./DrawerStack"

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');


// Define props for screens (optional if there are no props)
type ScreenProps = {};

// Individual screen components
const DashboardScreen: React.FC<any> = (props) => (

  <View style={styles.screen}>
    <Text onPress={() => props.navigation.openDrawer()}>Dashboard</Text>
  </View>
);

const AccountsScreen: React.FC<ScreenProps> = () => (
  <View style={styles.screen}>
    <Text>Accounts</Text>
  </View>
);

const GeneratorScreen: React.FC<ScreenProps> = () => (
  <View style={styles.screen}>
    <Text>Generator</Text>
  </View>
);

const VaultScreen: React.FC<ScreenProps> = () => (
  <View style={styles.screen}>
    <Text>Vault</Text>
  </View>
);

const SettingsScreen: React.FC<ScreenProps> = () => (
  <View style={styles.screen}>
    <Text>Settings</Text>
  </View>
);

// Custom SVG for the curved background
const CustomTabBarBackground: React.FC = () => {
  const tabHeight = 70; // Height of the tab bar
  const curveHeight = 26; // Depth of the curve (upwards)

  return (
    <Svg
      width={width}
      height={tabHeight + curveHeight}
      viewBox={`0 0 ${width} ${tabHeight + curveHeight}`}
      style={styles.curve}
    >
      <Path
        d={`
          M 0 ${curveHeight} 
          H ${width * 0.37} 
          C ${width * 0.40} ${curveHeight} ${width * 0.45} 0 ${width * 0.5} 0 
          C ${width * 0.55} 0 ${width * 0.60} ${curveHeight} ${width * 0.63} ${curveHeight} 
          H ${width} 
          V ${tabHeight + curveHeight} 
          H 0 Z
        `}
        fill={colors.tabBackground}
    
      />
     
    </Svg>
  );
};

const BottomTab: React.FC = () => {

  return (
    <Tab.Navigator 
   
      screenOptions={({ route }) => ({
       
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Dashboard') {
            return <Image style={styles.icon} source={focused ? Images.dashboardActive : Images.dashboard} />;
          } else if (route.name === 'Accounts') {
            return <Image style={styles.icon} source={focused ? Images.accountsActive : Images.accounts} />;
          } else if (route.name === 'ScountAI') {
            return (
              <View style={styles.centralIconContainer}>
                <Image style={styles.scountAiIcon} source={focused ? Images.scoutAIActive : Images.scoutAI} />
              </View>
            );
          } else if (route.name === 'Generator') {
            return <Image style={styles.icon} source={focused ? Images.generatorActive : Images.generator} />;
          }
          else if (route.name === 'Vault') {
            return <Image style={styles.icon} source={focused ? Images.vaultActive : Images.vault} />;
          }
        },
        tabBarActiveTintColor: colors.textPrimary,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        headerShown: false,
        
        tabBarStyle: {
          position: 'absolute',
          height: 70,
          borderTopWidth: 0,
          backgroundColor: 'transparent',
        },
        tabBarBackground: () => <CustomTabBarBackground />,
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Accounts" component={AccountsScreen} />
      <Tab.Screen
        name="ScountAI"
        component={GeneratorScreen}
        options={{ tabBarLabel: () => null }}
      />
      <Tab.Screen name="Generator" component={GeneratorScreen} />
      <Tab.Screen name="Vault" component={VaultScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  curve: {
    position: 'absolute',
    bottom: 0,
  },
  centralIconContainer: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15, // Ensures proper alignment with the curve
    top: 0,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  scountAiIcon: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },
});

export default BottomTab;
