import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";
import { Colors } from "../constants/Colors";
import { styles } from "../constants/styles";
import HomeView from "../views/Home/HomeView";

export default Home = () => {
  const navigation = useNavigation();
  const openDetails = () => {
    navigation.navigate("WatchVideo");
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors.white }]}>
      <Header title={"Home"} />
      <View style={[styles.container_Align_Center_All, { backgroundColor: Colors.white }]}>
        <Text>Welcome to Dashboard !</Text>
      </View>
    </View>
  );
};
