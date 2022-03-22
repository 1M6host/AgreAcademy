import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../constants/styles";

const BlueButtonView = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPressProp}
      style={[
        styles.AppBlueButtonStyle,
        { elevation: props.elevation ? props.elevation : 0 },
        props.style,
      ]}
    >
      <Text style={styles.AppBlueButtonTextStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default BlueButtonView;
