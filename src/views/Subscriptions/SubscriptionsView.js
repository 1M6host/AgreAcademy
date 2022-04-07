import React from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import BlueButtonView from "../../components/BlueButtonView";
import CheckBoxView from "../../components/CheckBoxView";
import { Colors } from "../../constants/Colors";
import { SHeight, SWidth } from "../../constants/Utls";
import SelectSubjectView from "./SelectSubjectView";

const SubscriptionsView = (props) => {
  const renderItemComponent = ({ item }) => {
    return <SelectSubjectView {...item} />;
  };

  const listHeaderComponent = () => {
    return (
      <View
        style={{
          borderWidth: StyleSheet.hairlineWidth,
          backgroundColor: Colors.white_Alpha_70,
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingVertical: SHeight(1),
          marginHorizontal: 1,
        }}
      >
        <CheckBoxView title={"Subjects"} />
        <CheckBoxView title={"Study Material"} />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: SWidth(2.5),
          paddingTop: 1,
        }}
        data={props.subjectsData}
        renderItem={renderItemComponent}
        ListHeaderComponent={listHeaderComponent}
      />
    </View>
  );
};

export default SubscriptionsView;
