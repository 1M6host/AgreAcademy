import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "../constants/styles";
import { SWidth } from "../constants/Utls";

const CheckBoxView = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      style={styles.checkBoxContainer}
      onPress={() => setChecked(!checked)}
    >
      <Icon
        name={!checked ? "checkbox-marked-outline" : "checkbox-blank-outline"}
        size={24}
      />
      <Text style={[styles.text_normal_bold,{ paddingStart: SWidth(2.5) }]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CheckBoxView;
