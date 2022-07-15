import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, ImageBackground } from "react-native";
import Header from "../components/Header";
import { Colors } from "../constants/Colors";
import { images } from "../constants/images";
import { styles } from "../constants/styles";
import DashboardView from "../views/Home/DashboardView";

export default Videos = ({ navigation }) => {
  const openTopic = (topic) => {
    console.log(topic);
    navigation.navigate("WatchVideo", { topic: topic });
  };
  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header title={"Videos"} />
      <DashboardView onVideoPlay={(item) => openTopic(item)} />
    </ImageBackground>
  );
};
