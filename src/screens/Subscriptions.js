import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import BlueButtonView from "../components/BlueButtonView";
import Header from "../components/Header";
import { Colors } from "../constants/Colors";
import { styles } from "../constants/styles";
import { SHeight, SWidth } from "../constants/Utls";
import SubscriptionsDetails from "../views/Subscriptions/SubscriptionsDetails";
import SubscriptionsView from "../views/Subscriptions/SubscriptionsView";

const subjectsData = [
  { id: 0, subject: "Subject 1", subjectPrice: 1000, studyMaterialPrice: 5000 },
  { id: 1, subject: "Subject 2", subjectPrice: 1000, studyMaterialPrice: 5000 },
  { id: 2, subject: "Subject 3", subjectPrice: 1000, studyMaterialPrice: 5000 },
];

export default Subscriptions = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { backgroundColor: Colors.white }]}>
      <Header title={"Subscriptions"} />
      <View
        style={{
          alignItems: "flex-start",
          padding: SWidth(2.5),
        }}
      >
        <BlueButtonView
          onPressProp={() => navigation.goBack()}
          style={styles.commonBackStyle}
          title={"BACK"}
        />
      </View>
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
            navigation.navigate("SubjectDetails");
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
  );
};
