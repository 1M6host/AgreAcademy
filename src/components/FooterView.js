import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../constants/styles";
import { SHeight } from "../constants/Utls";
import ImageView from "./ImageView";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../constants/Colors";

const FooterView = (props) => (
  <View style={styles.footerContainerStyle}>
    <TouchableOpacity onPress={() => props.onShare()}>
      <Icon
        name="share-variant-outline"
        color={Colors.black}
        size={SHeight(3)}
      />
    </TouchableOpacity>
  </View>
);

export default FooterView;
