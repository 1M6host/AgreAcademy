import { useNavigation } from "@react-navigation/native";
import React, { Component, useEffect } from "react";
import { ImageBackground, Share } from "react-native";
import FooterView from "../components/FooterView";
import { images } from "../constants/images";
import { getData } from "../constants/Utls";
import SplashView from "../views/SplashView";

export default Splash = () => {
  const navigate = useNavigation();

  const onPressStart = async () => {
    const data = await getData("UserObj");
    console.log(data);
    if (data) navigate.replace("HomeNav");
    else navigate.replace("LoginNav");
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Join Agre Academy with the folllowing link: http://www.google.com",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <SplashView onStart={() => onPressStart()} />
      <FooterView onShare={() => onShare()} />
    </ImageBackground>
  );
};
