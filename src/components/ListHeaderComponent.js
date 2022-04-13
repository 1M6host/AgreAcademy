import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { SHeight } from "../constants/Utls";

const ListHeaderComponent = (props) => {
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
      {props.children}
    </View>
  );
};

export default ListHeaderComponent;
