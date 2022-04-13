import React from "react";
import { ImageBackground, View } from "react-native";
import { Colors } from "../constants/Colors";
import { images } from "../constants/images";
import { styles } from "../constants/styles";
import { SWidth } from "../constants/Utls";
import BlueButtonView from "./BlueButtonView";
import Header from "./Header";

export default SubjectDetails = ({ navigation }) => (
  <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
    <Header backPress={() => navigation.goBack()} title={"Chapter List"} />
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        padding: SWidth(2.5),
        backgroundColor: "#fff",
      }}
    ></View>
  </ImageBackground>
);
