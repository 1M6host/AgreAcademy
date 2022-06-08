import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { iconSize } from "../constants/styles";

const ArrowButton = (props) => {
  return <Icon name={"chevron-right"} size={iconSize} />;
};

export default ArrowButton;
