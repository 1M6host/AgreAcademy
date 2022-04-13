import React from "react";
import { Text, View, ImageBackground } from "react-native";
import Header from "../components/Header";
import { images } from "../constants/images";
import { styles } from "../constants/styles";
import MyListsView from "../views/MyLists/MyListsView";

const MyLists = (props) => {
  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header title={"My Courses"} />
      <MyListsView />
    </ImageBackground>
  );
};

export default MyLists;
