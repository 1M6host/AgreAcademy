import { CommonActions } from "@react-navigation/native";
import React from "react";
import { Text, View, ImageBackground, Alert } from "react-native";
import BlueButtonView from "../components/BlueButtonView";
import ButtonView from "../components/ButtonView";
import Header from "../components/Header";
import { Colors } from "../constants/Colors";
import { images } from "../constants/images";
import { styles } from "../constants/styles";
import { clearAll, SHeight, SWidth } from "../constants/Utls";
import ProfileView from "../views/Profile";

export default Profile = ({ navigation }) => {
  const onLogOut = () => {
    Alert.alert("Logout?", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: async () => {
          await clearAll();
          navigation.reset({
            index: 0,
            routes: [{ name: "Splash" }],
          });
        },
      },
    ]);
  };
  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header title={"Profile"} />

      <ProfileView onLogOut={()=>onLogOut()}/>
    </ImageBackground>
  );
};
