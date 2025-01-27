import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, StyleProp, ViewStyle } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

// Define props for screens (optional if there are no props)
type ScreenProps = {};

// Individual screen components
const DashboardScreen: React.FC<ScreenProps> = () => (
  <View style={styles.screen}>
    <Text>Dashboard</Text>
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
  const tabHeight = 82; // Height of the tab bar
  const curveHeight = 38; // Depth of the curve (upwards)

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
          H ${width * 0.27} 
          C ${width * 0.45} ${curveHeight} ${width * 0.38} 0 ${width * 0.5} 0 
          C ${width * 0.65} 0 ${width * 0.58} ${curveHeight} ${width * 0.72} ${curveHeight} 
          H ${width} 
          V ${tabHeight + curveHeight} 
          H 0 Z
        `}
        fill="#6F747A"
      />
    </Svg>
  );
};

const BottomTab: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Dashboard') {
              return <Image style={styles.icon} source={require('./assets/dashboard.png')} />;
            } else if (route.name === 'Accounts') {
              return <Image style={styles.icon} source={require('./assets/accounts.png')} />;
            } else if (route.name === 'Generator') {
              return (
                <View style={styles.centralIconContainer}>
                  <Image style={styles.icon} source={require('./assets/generator.png')} />
                </View>
              );
            } else if (route.name === 'Vault') {
              return <Image style={styles.icon} source={require('./assets/vault.png')} />;
            } else if (route.name === 'Settings') {
              return <Image style={styles.icon} source={require('./assets/settings.png')} />;
            }
          },
          tabBarActiveTintColor: '#007bff',
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
        <Tab.Screen name="Generator" component={GeneratorScreen} />
        <Tab.Screen name="Vault" component={VaultScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
    width: 80,
    height: 80,
    backgroundColor: '#007bff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35, // Ensures proper alignment with the curve
    borderWidth: 4,
    borderColor: '#6F747A',
    top: -8,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default BottomTab;
