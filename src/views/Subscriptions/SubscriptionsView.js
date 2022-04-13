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
        children={
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
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
