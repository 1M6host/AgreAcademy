import React from "react";
import { Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { styles } from "../constants/styles";
import { SWidth } from "../constants/Utls";
import BlueButtonView from "./BlueButtonView";
import Header from "./Header";

export default SubjectDetails = ({ params }) => (
  <View style={[styles.container, { backgroundColor: Colors.white }]}>
    <Header title={"Chapter List"} />
    <View
      style={{
        alignItems: "flex-start",
        padding: SWidth(2.5),
      }}
    >
      <BlueButtonView
        onPressProp={() => navigation.goBack()}
        title={"BACK"}
        style={styles.commonBackStyle}
      />
    </View>
  </View>
);
