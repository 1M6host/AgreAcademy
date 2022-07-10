import React from "react";
import { DeviceEventEmitter, Text, View } from "react-native";
import ImageView from "../../components/ImageView";
import { images } from "../../constants/images";
import { services } from "../../constants/services/services";
import { styles } from "../../constants/styles";
import { SHeight } from "../../constants/Utls";
import RegisterInputView from "./RegisterInputView";

const RegisterView = (props) => {
  const onRegister = (body) => {
    services.signUp(body).then((res) => {
      if (res.code == "200") {
        props.onRegisterClick(body.mobileNumber);
      }
      alert(res.message);
    });
  };

  return (
    <View
      style={[
        styles.container_Align_Center_Justify_Space_Evenly,
        { paddingVertical: SHeight(7) },
      ]}
    >
      <ImageView
        url={images.logo}
        style={[styles.AppLogoStyle, { height: SHeight(25) }]}
      />
      <RegisterInputView
        onClick={(body) => onRegister(body)}
        buttonText={"REGISTER"}
      />
    </View>
  );
};

export default RegisterView;
