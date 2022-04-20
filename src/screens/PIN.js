import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ImageBackground, Text, View } from "react-native";
import { images } from "../constants/images";
import { services } from "../constants/services/services";
import { setData } from "../constants/Utls";
import { Validate } from "../constants/Validations";
import OTPView from "../views/OTP/OTPView";

export default PIN = () => {
  const navigate = useNavigation();
  const route = useRoute();

  useEffect(() => {
    console.log(route.params.mobile);
  });

  const onPINVerify = (pin) => {
    if (!Validate.checkOTP("PIN", pin)) {
      return false;
    } else {
      services
        .setPIN(`MobileNumber=${route.params.mobile}&PIN=${pin}`)
        .then(async (res) => {
          console.log(res);
          if (res.status == "Ok") {
            await setData("UserObj", res.data);
            navigate.replace("HomeNav");
          }
          alert(res.message || res.errors);
        });
    }
  };

  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <OTPView onVerifyClick={(pin) => onPINVerify(pin)} screenName={"PIN"} />
    </ImageBackground>
  );
};
