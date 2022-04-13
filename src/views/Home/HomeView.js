import React from "react";
import {
  SectionList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../../constants/Colors";
import { iconSize, styles } from "../../constants/styles";
import { SHeight, SWidth } from "../../constants/Utls";
import BlueButtonView from "../../components/BlueButtonView";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HomeView = (props) => {
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
        <BlueButtonView title={"Subscribe"} />
        <TouchableOpacity onPress={() => props.onPlay()}>
          <Icon name="play-box" size={SHeight(5)} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: "#fff" }]}>
      <View
        style={{
          alignItems: "flex-end",
          padding: SWidth(2.5),
        }}
      >
        <BlueButtonView onPressProp={props.onAddClick} title={"ADD"} />
      </View>
      <SectionList
        contentContainerStyle={{
          paddingHorizontal: SWidth(2.5),
          paddingVertical: SHeight(1),
        }}
        sections={props.listData || []}
        renderSectionHeader={renderSectionHeaderComponent}
        stickySectionHeadersEnabled
        renderItem={renderItemComponent}
      />
    </View>
  );
};

export default HomeView;
