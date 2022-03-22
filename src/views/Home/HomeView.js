import React from "react";
import {
  FlatList,
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
  const listHeaderComponent = () => {
    return (
      <View
        style={{
          borderWidth: StyleSheet.hairlineWidth,
          flexDirection: "row",
          justifyContent: "center",
          paddingVertical: SHeight(1),
        }}
      >
        <Text>List</Text>
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
        }}
      >
        <Text>Student-{index}</Text>
        <BlueButtonView title={"Subscribe"} />
        <TouchableOpacity>
          <Icon name="play-box" size={SHeight(5)} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: Colors.white, paddingHorizontal: SWidth(2.5) },
      ]}
    >
      <View style={{ alignItems: "flex-end", paddingVertical: SHeight(2.5) }}>
        <BlueButtonView title={"ADD"} />
      </View>
      <FlatList
        data={props.listData || []}
        ListHeaderComponent={listHeaderComponent}
        renderItem={renderItemComponent}
      />
    </View>
  );
};

export default HomeView;
