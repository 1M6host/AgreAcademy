import { useNavigation } from "@react-navigation/native";
import React, { Component, useEffect } from "react";
import { ImageBackground } from "react-native";
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

  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <SplashView onStart={() => onPressStart()} />
      <FooterView />
    </ImageBackground>
  );
};
