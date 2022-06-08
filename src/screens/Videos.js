import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, ImageBackground } from "react-native";
import Header from "../components/Header";
import { Colors } from "../constants/Colors";
import { images } from "../constants/images";
import { styles } from "../constants/styles";

export default Videos = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header title={"Videos"} />
      <View
        style={[
          styles.container,
          styles.container_Align_Center_All,
          { backgroundColor: Colors.white },
        ]}
      >
        <Text>Welcome to Videos !</Text>
      </View>
    </ImageBackground>
  );
};
