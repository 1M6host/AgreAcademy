import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "../constants/styles";

const CheckBoxView = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      style={styles.checkBoxContainer}
      onPress={() => setChecked(!checked)}
    >
      <Icon
        name={checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={{ paddingHorizontal: 5 }}
      />
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CheckBoxView;
