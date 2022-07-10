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
        <Text style={[styles.text_normal_bold]}>Total :</Text>
        <Text style={[styles.text_normal_bold]}>
          {props?.feeData?.feeAmount}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: SHeight(1),
        }}
      >
        <Text style={[styles.text_normal]}>Total Discount :</Text>
        <Text style={[styles.text_normal]}>
          {props?.feeData?.discountValue}%
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: SHeight(1),
        }}
      >
        <Text style={[styles.text_normal]}>Discount :</Text>
        <Text style={[styles.text_normal]}>
          {props?.feeData?.discountAmount}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: SHeight(1),
        }}
      >
        <Text style={[styles.text_normal]}>Fee With Discount :</Text>
        <Text style={[styles.text_normal]}>
          {props?.feeData?.feeAmountWithDiscount}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: SHeight(1),
        }}
      >
        <Text style={[styles.text_normal]}>Total TAX :</Text>
        <Text style={[styles.text_normal]}>{props?.feeData?.taxValue}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: SHeight(1),
        }}
      >
        <Text style={[styles.text_normal]}>TAX amount :</Text>
        <Text style={[styles.text_normal]}>{props?.feeData?.taxAmount}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: SHeight(1),
        }}
      >
        <Text style={[styles.text_normal]}>Payable Amount :</Text>
        <Text style={[styles.text_normal]}>
          {props?.feeData?.netPayableAmount}
        </Text>
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
            props.onPayNow(props?.feeData);
          }}
          style={{
            width: SWidth(40),
            height: 45,
            backgroundColor: Colors.buttonGreen,
          }}
          title={"Pay Now"}
        />
        <BlueButtonView
          onPressProp={() => {
            props.onPayLater();
          }}
          style={{ width: SWidth(40), height: 45, backgroundColor: Colors.red }}
          title={"Skip for Trial"}
        />
      </View>
    </View>
  );
};

export default SubscriptionsDetails;
