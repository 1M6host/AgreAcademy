import React from "react";
import {
  Text,
  View,
  SectionList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import BlueButtonView from "../../components/BlueButtonView";
import { Colors } from "../../constants/Colors";
import { styles } from "../../constants/styles";
import { SHeight, SWidth } from "../../constants/Utls";

const listData = [
  { title: 1, data: [1, 2, 3] },
  { title: 2, data: [1, 2] },
  { title: 3, data: [1, 2, 3, 4, 5] },
];

const MyListsView = (props) => {
  const renderSectionHeaderComponent = ({ section }) => {
    return (
      <View
        style={{
          borderWidth: StyleSheet.hairlineWidth,
          backgroundColor: Colors.white_Alpha_70,
          flexDirection: "row",
          justifyContent: "center",
          paddingVertical: SHeight(1),
          marginHorizontal: 1,
        }}
      >
        <Text>List {section.title}</Text>
      </View>
    );
  };

  const renderItemComponent = ({ item, index }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: Colors.lightgrey,
          padding: SWidth(2),
          paddingVertical: SWidth(2.5),
        }}
      >
        <Text>Student-{item}</Text>
        <TouchableOpacity>
          <Text
            style={{ textDecorationLine: "underline", color: Colors.fbBlue }}
          >
            Show detail
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={[styles.container]}>
      <View
        style={{
          alignItems: "flex-start",
          padding: SWidth(2.5),
        }}
      >
        <BlueButtonView title={"BACK"} />
      </View>
      <SectionList
        contentContainerStyle={{
          paddingHorizontal: SWidth(2.5),
          paddingVertical: SHeight(1),
        }}
        sections={listData}
        renderSectionHeader={renderSectionHeaderComponent}
        stickySectionHeadersEnabled
        renderItem={renderItemComponent}
      />
    </View>
  );
};

export default MyListsView;
