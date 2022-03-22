import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "../constants/styles";
import { SWidth } from "../constants/Utls";

const Header = (props) => {
  const [showBack, setShowBack] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    setShowBack(navigation.canGoBack);
  });
  return (
    <View style={styles.headerStyle}>
      {showBack && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-left"
            size={20}
            style={{ paddingRight: SWidth(1) }}
          />
        </TouchableOpacity>
      )}
      <Text>{props.title}</Text>
    </View>
  );
};

export default Header;
