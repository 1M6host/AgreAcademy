import React from "react";
import { Text, View,ImageBackground } from "react-native";
import Header from "../components/Header";
import { Colors } from "../constants/Colors";
import { images } from "../constants/images";
import { styles } from "../constants/styles";

export default Profile = () => {
  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header title={"Profile"} />
      <View
        style={[
          styles.container,
          styles.container_Align_Center_All,
          { backgroundColor: Colors.white },
        ]}
      >
        <Text>Welcome to Profile !</Text>
      </View>
    </ImageBackground>
  );
};
