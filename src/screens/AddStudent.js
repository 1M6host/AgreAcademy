import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, ImageBackground } from "react-native";
import Header from "../components/Header";
import { images } from "../constants/images";
import AddStudentView from "../views/AddStudent/AddStudentView";
import HomeView from "../views/Home/HomeView";

export default AddStudent = () => {
  const navigation = useNavigation();
  const [listData, setListData] = useState([]);

  const openDetails = () => {
    console.log("click");
  };
  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header title={"Student/Learner"} />

      <HomeView
        onAddClick={() => {
          navigation.navigate("AddNewStudent");
        }}
        onPlay={() => {
          openDetails();
        }}
        listData={listData}
      />
    </ImageBackground>
  );
};
