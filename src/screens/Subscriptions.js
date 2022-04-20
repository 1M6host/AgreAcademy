import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, ImageBackground } from "react-native";
import BlueButtonView from "../components/BlueButtonView";
import Header from "../components/Header";
import { Colors } from "../constants/Colors";
import { images } from "../constants/images";
import { styles } from "../constants/styles";
import { SHeight, SWidth } from "../constants/Utls";
import SubscriptionsDetails from "../views/Subscriptions/SubscriptionsDetails";
import SubscriptionsView from "../views/Subscriptions/SubscriptionsView";

const subjectsData = [
  { id: 0, subject: "Subject 1", subjectPrice: 1000, studyMaterialPrice: 5000 },
  { id: 1, subject: "Subject 2", subjectPrice: 1000, studyMaterialPrice: 5000 },
  { id: 2, subject: "Subject 3", subjectPrice: 1000, studyMaterialPrice: 5000 },
];

export default Subscriptions = ({ navigation }) => {
  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header
        backPress={() => {
          navigation.goBack();
        }}
        title={"Subscriptions"}
      />
      <View style={[styles.container, { backgroundColor: "#fff" }]}>
        <SubscriptionsView subjectsData={subjectsData} />
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: Colors.lightgrey,
            marginVertical: SHeight(1.5),
          }}
        />
        <SubscriptionsDetails />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            position: "absolute",
            bottom: 10,
            left: 0,
            right: 0,
          }}
        >
          <BlueButtonView
            onPressProp={() => {
              navigation.navigate("AddStudent");
            }}
            style={{ width: SWidth(30), backgroundColor: "lime" }}
            title={"Pay Now"}
          />
          <BlueButtonView
            style={{ width: SWidth(35), backgroundColor: "red" }}
            title={"Skip for Trial"}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
