import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";
import { Colors } from "../constants/Colors";
import { styles } from "../constants/styles";
import { WebView } from "react-native-webview";
import { SHeight, SWidth } from "../constants/Utls";
export default WatchVideo = () => {
  return (
    <View style={[styles.container, { backgroundColor: Colors.white }]}>
      <View style={{ paddingTop: SHeight(2.5), paddingHorizontal: SWidth(10) }}>
        <WebView source={{ uri: "https://reactnative.dev/" }} />
      </View>
    </View>
  );
};
