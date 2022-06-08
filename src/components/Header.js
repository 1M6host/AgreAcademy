import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../constants/Colors";
import { styles } from "../constants/styles";
import { SHeight, SWidth } from "../constants/Utls";

const Header = (props) => {
  return (
    <View style={{ height: SHeight(10), justifyContent: "flex-end" }}>
      <View style={styles.headerStyle}>
        {props.backPress && (
          <TouchableOpacity
            style={{ position: "absolute", left: SWidth(2.5) }}
            onPress={props.backPress}
          >
            <Icon name="arrow-left" color={Colors.white} size={20} />
          </TouchableOpacity>
        )}
        <Text
          numberOfLines={1}
          style={[styles.text_H1_white, { maxWidth: SWidth(75) }]}
        >
          {props.title}
        </Text>
        {props.searchPress && (
          <TouchableOpacity
            style={{ position: "absolute", right: SWidth(2.5) }}
            onPress={props.searchPress}
          >
            <Icon name="magnify" color={Colors.white} size={20} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
