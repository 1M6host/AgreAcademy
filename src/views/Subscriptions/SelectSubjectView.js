import React from "react";
import { Text, View } from "react-native";
import CheckBoxView from "../../components/CheckBoxView";
import { SHeight, SWidth } from "../../constants/Utls";

const SelectSubjectView = ({ subject, subjectPrice, studyMaterialPrice }) => (
  <View
    style={{
      flexDirection: "row",
      paddingVertical: SHeight(1.5),
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <View style={{ flex: 1 }}>
      <CheckBoxView title={subject + ` (${subjectPrice})`} />
    </View>
    <View style={{ paddingStart: SWidth(5) }}>
      <CheckBoxView title={studyMaterialPrice} />
    </View>
  </View>
);

export default SelectSubjectView;
