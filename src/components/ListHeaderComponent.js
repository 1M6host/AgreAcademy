import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { SHeight, SWidth } from "../constants/Utls";

const ListHeaderComponent = (props) => {
  return (
    <View
      style={{
        borderRadius: SWidth(1.5),
        backgroundColor: props.backgroundColor || Colors.listHeader,
        flexDirection: "row",
        paddingVertical: SHeight(2),
        paddingHorizontal: SWidth(5),
        marginBottom: SHeight(1),
      }}
    >
      {props.children}
    </View>
  );
};

export default ListHeaderComponent;
