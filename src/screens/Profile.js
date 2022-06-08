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

export default Profile = ({ navigation }) => {
  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header title={"Profile"} />

      <View style={[styles.container, { backgroundColor: Colors.white }]}>
        <View style={styles.container_Align_Center_All}>
          <Text>Welcome to Profile !</Text>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            alignItems: "center",
          }}
        >
          <BlueButtonView
            onPressProp={() => {
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
            }}
            title={"Logout"}
            style={{
              width: SWidth(80),
              height: SHeight(6),
              marginVertical: SHeight(1.5),
              backgroundColor: Colors.red,
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
