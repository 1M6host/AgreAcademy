import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import BlueButtonView from "../components/BlueButtonView";
import FormInputView from "../components/FormInputView";
import TextView from "../components/TextView";
import { Colors } from "../constants/Colors";
import { services } from "../constants/services/services";
import { styles } from "../constants/styles";
import { getData, SHeight, SWidth } from "../constants/Utls";

const ProfileView = (props) => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    const getUserData = async () => {
      const data = await getData("UserObj");
      console.log(data);
      setUserData(data);
      services.GetUserProfile(`ID=${data?.registrationID}`).then((res) => {
        console.log(res);
      });
    };
    !userData && getUserData();
  });
  return (
    <View style={[styles.container, { backgroundColor: Colors.white }]}>
      <FormInputView
        editableProp={false}
        id={"name"}
        title={"Name"}
        maxLengthProp={30}
        onChangeText={() => {}}
        value={userData?.name}
      />
      <FormInputView
        editableProp={false}
        id={"mobile"}
        title={"Mobile"}
        maxLengthProp={30}
        onChangeText={() => {}}
        value={userData?.mobileNumber}
      />
      <TextView
        disabledProp
        style={styles.FormInputContainer}
        button
        title={"You are parents"}
        check={userData?.isParents}
        setCheck={() => {}}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          alignItems: "center",
        }}
      >
        <BlueButtonView
          onPressProp={() => {
            props.onLogOut();
          }}
          title={"Logout"}
          style={{
            width: SWidth(80),
            height: SHeight(6),
            marginVertical: SHeight(1.5),
            backgroundColor: Colors.red,
          }}
        />
      </View>
    </View>
  );
};

export default ProfileView;
