import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, View } from "react-native";
import BlueButtonView from "../components/BlueButtonView";
import Header from "../components/Header";
import { Colors } from "../constants/Colors";
import { images } from "../constants/images";
import { services } from "../constants/services/services";
import { styles } from "../constants/styles";
import { SWidth } from "../constants/Utls";
import AddStudentView from "../views/AddStudent/AddStudentView";

export default AddNewStudent = () => {
  const navigation = useNavigation();

  const onAddNewStudent = (body) => {
    console.log("====================================");
    console.log(body);
    console.log("====================================");
    navigation.navigate("Subscriptions");
    // services.addNewStudent(body).then((res) => {
    //   if (res.code == "200") {
    //     navigation.navigate("Subscription");
    //   }
    //   alert(res.message);
    // });
  };

  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header backPress={() => navigation.goBack()} title={"Add Student"} />

      <AddStudentView
        onSaveClick={(from) => {
          onAddNewStudent(from);
        }}
      />
    </ImageBackground>
  );
};
