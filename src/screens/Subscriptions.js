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
    const StudentData = route?.params?.studentObj;
    !feeData && getPlanDetails(StudentData);
  });

  const getPlanDetails = (StudentData) => {
    services
      .getPlanDetails(
        `StudentId=${StudentData?.studentID}&CourseTypeId=${StudentData?.courseTypeID}&CourseTypeInstitutionsId=${StudentData?.courseTypeInstitutionsID}&CourseId=${StudentData?.courseID}`
      )
      .then((res) => {
        console.log("getPlanDetails res", res?.data);
        setFeeData(res?.data);
      });
  };

  const payNow = (data) => {
    const formBody = {
      fk_SubscriptionTypeID: 0,
      fk_StudentID: data?.studentID,
      fk_CourseTypeID: data?.fk_CourseID,
      fk_CourseTypeInstitutionsID: data?.fk_CourseTypeInstitutionsID,
      fk_CourseID: data?.fk_CourseTypeID,
    };
    services.createOrder(formBody).then((res) => {
      console.log("createOrder res", res);
      paymentGateway(res?.data);
    });
  };

  const paymentGateway = (dataObj) => {
    var options = {
      description: "Credits towards Subscription",
      currency: "INR",
      // order_id: res?.data?.orderID,
      key: RZPKEY,
      amount: String(dataObj?.netPayableAmount * 100),
      name: route?.params?.studentObj?.name,
      prefill: {
        email: "",
        contact: "91" + route?.params?.studentObj?.mobileNumber,
        name: route?.params?.studentObj?.name,
      },
    };
    RazorpayCheckout.open(options)
      .then((data) => {
        console.log(data);
        // handle success : ${data.razorpay_payment_id}
        alert(`Payment Successful!`);
        const formBody = {
          fk_StudentID: dataObj?.fk_StudentID,
          fk_OrderNumber: dataObj?.orderNumber,
          payableAmount: dataObj?.netPayableWithDiscount,
          paymentStatus: "Complete",
          paymentMode: "RazorPay",
        };
        updatePayment(formBody);
      })
      .catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  const updatePayment = (formBody) => {
    services.createOrder(formBody).then((res) => {
      console.log("updatePayment res", res);
      navigation.goBack();
    });
  };

  const skipForTrial = () => {
    services
      .SkipForTrial(`StudentID=${route?.params?.studentObj?.studentID}`)
      .then((res) => {
        console.log("StudentObj res", res);
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
            onPayLater={() => {
              skipForTrial();
            }}
            onPayNow={(data) => {
              payNow(data);
            }}
          />
        )}
      </View>
    </ImageBackground>
  );
};
