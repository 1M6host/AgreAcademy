import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useState } from "react";
import { Text, View, ImageBackground } from "react-native";
import RazorpayCheckout from "react-native-razorpay";
import BlueButtonView from "../components/BlueButtonView";
import Header from "../components/Header";
import { Colors } from "../constants/Colors";
import { images } from "../constants/images";
import { services } from "../constants/services/services";
import { styles } from "../constants/styles";
import { RZPKEY, SHeight, SWidth } from "../constants/Utls";
import SubscriptionsDetails from "../views/Subscriptions/SubscriptionsDetails";
import SubscriptionsView from "../views/Subscriptions/SubscriptionsView";

const subjectsData = [
  { id: 0, subject: "Subject 1", subjectPrice: 1000, studyMaterialPrice: 5000 },
  { id: 1, subject: "Subject 2", subjectPrice: 1000, studyMaterialPrice: 5000 },
  { id: 2, subject: "Subject 3", subjectPrice: 1000, studyMaterialPrice: 5000 },
];

export default Subscriptions = ({ navigation }) => {
  const route = useRoute();
  const [feeData, setFeeData] = useState();
  useEffect(() => {
    const StudentData =
      route?.params?.studentObj[0] || route?.params?.studentObj;
    console.log("route?.params>>", route?.params);
    !feeData && getPlanDetails(StudentData);
  });

  const getPlanDetails = (StudentData) => {
    services
      .getPlanDetails(`StudentId=${StudentData?.studentID}`)
      .then((res) => {
        setFeeData(res?.data[0]);
      });
  };

  const createOrderAPI = (data, type) => {
    services
      .createOrder(`SubscriptionTypeId=${type}&StudentId=${data?.studentID}`)
      .then((res) => {
        console.log("createOrder res", res);
        if (res?.code == "200") {
          if (type == 1) {
            paymentGateway(res?.data[0]);
          }
          if (type == 2) {
            alert("Trial opted!");
            navigation.goBack();
          }
        } else {
          alert("Server Error");
        }
      });
  };

  const paymentGateway = (dataObj) => {
    var options = {
      description: "Credits towards Subscription",
      currency: "INR",
      // order_id: res?.data?.orderID,
      key: RZPKEY,
      amount: String(parseFloat(dataObj?.netPayableAmount).toFixed(2) * 100),
      name: route?.params?.studentObj[0]?.name,
      prefill: {
        email: "",
        contact: "91" + route?.params?.studentObj[0]?.mobileNumber,
        name: route?.params?.studentObj[0]?.name,
      },
    };
    RazorpayCheckout.open(options)
      .then((data) => {
        // handle success : ${data.razorpay_payment_id}
        alert(`Payment Successful!`);
        const formBody = {
          fk_StudentID: dataObj?.fk_StudentID,
          fk_OrderNumber: dataObj?.orderNumber,
          payableAmount: dataObj?.netPayableAmount,
          paymentStatus: "Complete",
          paymentMode: "Online payment",
          razorPayPaymentId: data.razorpay_payment_id,
        };
        updatePayment(formBody);
      })
      .catch((error) => {
        // handle failure
        const errorMsg = JSON.parse(error?.description);
        alert(errorMsg.error.description);
      });
  };

  const updatePayment = (formBody) => {
    services.updateOrder(formBody).then((res) => {
      console.log("updatePayment res", res);
      alert(res?.message);
      navigation.goBack();
    });
  };

  const skipForTrial = () => {
    services
      .SkipForTrial(`StudentID=${route?.params?.studentObj[0]?.studentID}`)
      .then((res) => {
        alert(res?.message);
        navigation.goBack();
      });
  };

  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header
        backPress={() => {
          navigation.goBack();
        }}
        title={"Subscriptions"}
      />
      <View style={[styles.container, { backgroundColor: "#F8F7FF" }]}>
        {/* <SubscriptionsView subjectsData={subjectsData} /> */}

        {feeData && (
          <SubscriptionsDetails
            feeData={feeData}
            onPayNow={(data) => {
              createOrderAPI(data, 1);
            }}
            onPayLater={(data) => {
              createOrderAPI(data, 2);
            }}
          />
        )}
      </View>
    </ImageBackground>
  );
};
