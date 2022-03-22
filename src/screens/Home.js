import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";
import { styles } from "../constants/styles";
import HomeView from "../views/Home/HomeView";

const listData = [1,2,3,4,5];

export default Home = () => {
  return (
    <View style={styles.container}>
      <Header title={"Student/Learner"} />
      <HomeView listData={listData} />
    </View>
  );
};
