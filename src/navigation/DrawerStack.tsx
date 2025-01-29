import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Pressable,
  SafeAreaView
} from "react-native";
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./Bottomtab";
import { Images } from "../../assets/images";
import ButtonComponent from "../components/Button/ButtonComponent";
import colors from "../constants/colors";
import { useDispatch , useSelector} from "react-redux";
import { RootState } from '../redux/store';

import { logout } from "../redux/slices/LoginStatusSlice";
import globalStyles from "../styles/styles";
import BackButton from "../components/Button/BackButton";
import { getUserData } from "../api/firebase";
import auth from '@react-native-firebase/auth';

const { height, width } = Dimensions.get("screen");

type RootStackParamList = {
  Home: undefined;
  BottomTab: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();

type DrawerContentProps = {
  navigation: DrawerNavigationProp<RootStackParamList, "Home">;
};

const DrawerContent = ({ navigation }: DrawerContentProps) => {
  
  const dispatch = useDispatch();
  const userDetails = useSelector((state: RootState) => state.loginStatus);
  
  React.useEffect(() => {
    console.log("User Details: ", userDetails)
  });
 
  return (
    <View style={styles.drawerContent}>
      <SafeAreaView />
      {/* Drawer Header */}

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ height: 40, width: 40 }} />
        <View style={styles.userInfo}>
          <View style={{ marginTop: 12, marginBottom: 20, width: 120, height: 120, backgroundColor: colors.buttonSecondry, borderRadius: 60, justifyContent: 'center', alignItems: 'center' }}>
            
            <Image style={styles.profileImage} source={userDetails?.profilePicture.length > 0 ? {uri:userDetails?.profilePicture} : Images.userSample} />
          </View>
          <Text style={globalStyles.H2Title}>{userDetails?.name}</Text>
          <Text style={globalStyles.Subtitle1}>{userDetails?.email}</Text>
        </View>
        <View style={styles.headerView}>
          <BackButton
            onPress={() => navigation.closeDrawer()} // Provide a default no-op function
            backgroundColor={colors.buttonSecondry} // Light gray background
            icon={Images.closeIcon} // Replace with your back icon
          />
        </View>

      </View>

      {/* User Info */}

      {/* Sign Out */}
      <Pressable onPress={() => dispatch(logout())} style={styles.signOutButton}>
        <Text style={globalStyles.H4Title}>Sign Out</Text>
      </Pressable>

      {/* Drawer Options */}
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={styles.drawerOptions}>
          <DrawerOption
            iconSource={Images.profileIcon}
            label="My Profile"
            onPress={() => navigation.navigate("Home")}
          />
          <DrawerOption iconSource={Images.FAQIcon} label="FAQ" />
          <DrawerOption iconSource={Images.shareIcon} label="Share" />
        </View>
        <View style={{ height: height * 0.06 }} />
        <View style={styles.drawerOptions}>
          <DrawerOption
            iconSource={Images.TCIcon}
            label="Terms & Conditions"
          />
          <DrawerOption
            iconSource={Images.policyIcon}
            label="Privacy Policy"
          />
          <DrawerOption
            iconSource={Images.inviteIcon}
            label="Invite Friends & Family"
          />
        </View>
        {/* Footer Section */}
        <View style={{ height: height * 0.035 }} />
        <ButtonComponent
          title="Upgrade to premium"
          marginLR={0}
          marginB={12}
          color={colors.buttonPrimary}
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}      // onPress={() => navigation.navigate('Login')}
        />

      </View>



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

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        overlayColor: "transparent", // Makes the overlay transparent
        drawerStyle: {
          // backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent drawer background
          backgroundColor: "rgba(74, 74, 97, 0.9)",

          width: width * 0.8,
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="BottomTab" component={BottomTab} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for drawer
    padding: 20,
    paddingTop: 0,
  },
  headerView: {
    alignItems: "flex-end",
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
  userInfo: {
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userName: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  userEmail: {
    color: "#BBB",
    fontSize: 14,
  },
  drawerOptions: {
    marginTop: 20,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  optionIcon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  optionLabel: {
    color: "#FFF",
    fontSize: 16,
  },
  signOutButton: {
    marginTop: 12,
    alignSelf: "center",
    backgroundColor: colors.buttonSecondry,
    borderRadius: 40,
    height: 40,
    width: 114,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signOutText: {
    color: "#FFF",
    fontSize: 14,
  },

});

export default DrawerStack;
