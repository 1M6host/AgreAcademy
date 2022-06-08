import React from "react";
import { Text, View } from "react-native";
import BlueButtonView from "../../components/BlueButtonView";
import { Colors } from "../../constants/Colors";
import { styles } from "../../constants/styles";
import { SHeight, SWidth } from "../../constants/Utls";

const SubscriptionsDetails = (props) => {
  return (
    <View
      style={{
        margin: SWidth(2.5),
        elevation: 5,
        paddingHorizontal: SWidth(5),
        paddingVertical: SHeight(2.5),
        borderRadius: SWidth(2.5),
        backgroundColor: Colors.white,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: SHeight(1.5),
        }}
      >
        <Text style={[styles.text_normal_bold]}>Total : 3000</Text>
        <Text style={[styles.text_normal_bold]}>15000</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: SHeight(1),
        }}
      >
        <Text style={[styles.text_normal]}>Total Amount :</Text>
        <Text style={[styles.text_normal]}>18000</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: SHeight(1),
        }}
      >
        <Text style={[styles.text_normal]}>Discount :</Text>
        <Text style={[styles.text_normal]}>3000</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: SHeight(1),
        }}
      >
        <Text style={[styles.text_normal]}>Payable Amount :</Text>
        <Text style={[styles.text_normal]}>15000</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: SHeight(1),
          paddingVertical: SHeight(2.5),
        }}
      >
        <BlueButtonView
          onPressProp={() => {
            props.onPayNow();
          }}
          style={{ width: SWidth(35), backgroundColor: Colors.buttonGreen }}
          title={"Pay Now"}
        />
        <BlueButtonView
          onPressProp={() => {
            props.onPayLater();
          }}
          style={{ width: SWidth(35), backgroundColor: Colors.red }}
          title={"Skip for Trial"}
        />
      </View>
    </View>
  );
};

export default SubscriptionsDetails;
