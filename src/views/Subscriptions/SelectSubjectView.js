import React from "react";
import { Text, View } from "react-native";
import CheckBoxView from "../../components/CheckBoxView";
import { SHeight } from "../../constants/Utls";

const SelectSubjectView = ({ subject, subjectPrice, studyMaterialPrice }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-evenly",
      paddingTop: SHeight(1.5),
    }}
  >
    <CheckBoxView title={subject + ` (${subjectPrice})`} />
    <CheckBoxView title={studyMaterialPrice} />
  </View>
);

export default SelectSubjectView;
