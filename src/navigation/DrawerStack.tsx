import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  Pressable,
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
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/LoginStatusSlice";
const { height, width } = Dimensions.get("screen");

type RootStackParamList = {
  Home: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();

type DrawerContentProps = {
  navigation: DrawerNavigationProp<RootStackParamList, "Home">;
};

const DrawerContent = ({ navigation }: DrawerContentProps) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={{height:height *0.05}}></View>
      {/* Status Bar */}
      {/* <StatusBar barStyle="light-content" backgroundColor="rgba(46, 46, 61, 0.9)" /> */}
      
      {/* Header Section */}
      <View style={styles.headerView}>
        <View style={styles.IconView}>
          <Image
            resizeMode="contain"
            style={styles.closeIcon}
            source={Images.closeIcon}
          />
        </View>
      </View>
      <View style={styles.header}>
        <View style={styles.ImageView}>
          <Image />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.name}>Chris Smith</Text>
          <Text style={styles.email}>chris_smith@gmail.com</Text>
        </View>
      </View>
      <View style={styles.buttonView}>
        <Pressable onPress={() => dispatch(logout())}>
        <View style={styles.mainView}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </View>
        </Pressable>
      </View>
      <View style={{height:height *0.02}}></View>
      {/* Options Section */}
      <View style={styles.optionsContainer}>
        <DrawerOption
          iconSource={Images.profileIcon}
          label="My Profile"
          onPress={() => navigation.navigate("Home")}
        />
        <DrawerOption
          iconSource={Images.FAQIcon}
          label="FAQ"
        />
        <DrawerOption
          iconSource={Images.shareIcon}
          label="Share"
        />
       
      </View>
      <View style={{height:height *0.06}}></View>
      <View style={styles.optionsContainer}>
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
      <View style={{height:height *0.035}}></View>
      <ButtonComponent
                            title="Upgrade to premium"
                            marginLR={32}
                            color={colors.buttonPrimary}
                            // onPress={() => navigation.navigate('Login')}
                        />

     
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
    <Image resizeMode="contain" source={iconSource} style={styles.optionIcon} />
    <Text style={styles.optionLabel}>{label}</Text>
  </TouchableOpacity>
);

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType:"back",
      }}
      drawerContent={(props: DrawerContentProps) => (
        <DrawerContent {...props} />
      )}
    >
      <Drawer.Screen name="BottomTab" component={BottomTab} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: "rgba(46, 46, 61, 0.9)",
  },
  headerView: {
    height: height * 0.06,
    width: width * 0.86,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  IconView: {
    height: height * 0.05,
    width: width * 0.12,
    backgroundColor: "rgba(58, 58, 77, 1)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    right: 8,
  },
  closeIcon: {
    height: 30,
    width: 30,
  },
  header: {
    top: -height * 0.023,
    alignItems: "center",
    height: height * 0.2,
    width: width * 0.86,
  },
  ImageView: {
    height: height * 0.15,
    width: width * 0.33,
    borderRadius: 65,
    backgroundColor: "yellow",
  },
  titleView: {
    top: height * 0.02,
    height: height * 0.05,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonView: {
    height: height * 0.07,
    width: width * 0.86,
    justifyContent: "center",
    alignItems: "center",
  },
  mainView: {
    height: height * 0.04,
    width: width * 0.3,
    backgroundColor: "rgba(74, 74, 97, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    color: "#BBBBBB",
    fontSize: 14,
  },
  optionsContainer: {
  height: height * 0.2,
  // backgroundColor:"green",
    justifyContent: "space-evenly",
    alignItems:"center"
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
   height:height* 0.035,
   width:width* 0.68,
  //  backgroundColor:"red"
  },
  optionIcon: {
    width: 25,
    height: 25,
  },
  optionLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    // marginLeft: 15,
    left:width * 0.08,
    fontFamily:"Montserrat-Thin"
  },
  upgradeButton: {
    backgroundColor: "#4B7BE5",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15,
  },
  upgradeText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  signOutButton: {
    alignItems: "center",
    paddingVertical: 15,
  },
  signOutText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
  },
});

export default DrawerStack;
