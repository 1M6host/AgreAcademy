import React from "react";
import { Text, View } from "react-native";
import { SHeight, SWidth } from "../../constants/Utls";

const SubscriptionsDetails = (props) => {
  return (
    <View style={{ paddingHorizontal: SWidth(2.5) }}>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Text>Total : 3000</Text>
        <Text>15000</Text>
      </View>
      <View style={{ paddingTop: SHeight(2.5),paddingHorizontal:SWidth(10) }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ flex: 1, textAlign: "right" }}>Total Amount :</Text>
          <Text style={{ flex: 1, textAlign: "center" }}>15000</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text style={{ flex: 1, textAlign: "right" }}>Discount :</Text>
          <Text style={{ flex: 1, textAlign: "center" }}>15000</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text style={{ flex: 1, textAlign: "right" }}>Payable Amount :</Text>
          <Text style={{ flex: 1, textAlign: "center" }}>15000</Text>
        </View>
      </View>
    </View>
  );
};

export default SubscriptionsDetails;
