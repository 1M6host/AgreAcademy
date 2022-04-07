import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "../constants/styles";
import { SWidth } from "../constants/Utls";

const Header = (props) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.text_H2}>{props.title}</Text>
    </View>
  );
};

export default Header;
