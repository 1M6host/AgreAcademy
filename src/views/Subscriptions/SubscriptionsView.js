import React from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import BlueButtonView from "../../components/BlueButtonView";
import CheckBoxView from "../../components/CheckBoxView";
import ListHeaderComponent from "../../components/ListHeaderComponent";
import { Colors } from "../../constants/Colors";
import { SHeight, SWidth } from "../../constants/Utls";
import SelectSubjectView from "./SelectSubjectView";

const SubscriptionsView = (props) => {
  const renderItemComponent = ({ item }) => {
    return <SelectSubjectView {...item} />;
  };

  const listHeaderComponent = () => {
    return (
      <ListHeaderComponent
        backgroundColor={Colors.white}
        children={
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <CheckBoxView title={"Subjects"} />
            <CheckBoxView title={"Study Material"} />
          </View>
        }
      />
    );
  };

  return (
    <View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          paddingHorizontal: SWidth(5),
          paddingVertical: SWidth(2.5),
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1 }}>
          <CheckBoxView title={"Subjects"} />
        </View>
        <View style={{ paddingStart: SWidth(5) }}>
          <CheckBoxView title={"Study Material"} />
        </View>
      </View>
      <FlatList
        contentContainerStyle={{
          margin: SWidth(2.5),
          elevation: 5,
          paddingVertical: SWidth(2.5),
          paddingHorizontal: SWidth(5),
          borderRadius: SWidth(2.5),
          backgroundColor: Colors.white,
        }}
        data={props.subjectsData}
        renderItem={renderItemComponent}
      />
    </View>
  );
};

export default SubscriptionsView;
