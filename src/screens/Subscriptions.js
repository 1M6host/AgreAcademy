import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View, ImageBackground } from "react-native";
import BlueButtonView from "../components/BlueButtonView";
import Header from "../components/Header";
import { Colors } from "../constants/Colors";
import { images } from "../constants/images";
import { services } from "../constants/services/services";
import { styles } from "../constants/styles";
import { SHeight, SWidth } from "../constants/Utls";
import SubscriptionsDetails from "../views/Subscriptions/SubscriptionsDetails";
import SubscriptionsView from "../views/Subscriptions/SubscriptionsView";

const subjectsData = [
  { id: 0, subject: "Subject 1", subjectPrice: 1000, studyMaterialPrice: 5000 },
  { id: 1, subject: "Subject 2", subjectPrice: 1000, studyMaterialPrice: 5000 },
  { id: 2, subject: "Subject 3", subjectPrice: 1000, studyMaterialPrice: 5000 },
];

export default Subscriptions = ({ navigation }) => {
  const route = useRoute();
  const skipForTrial = () => {
    services
      .SkipForTrial(`StudentID=${route?.params?.studentObj?.studentID}`)
      .then((res) => {
        console.log("StudentObj res", res);
        // if (res.code == "200") {
        //   if (res.dataList.length) {
        //     setSelectedSubject(res.dataList[0]);
        //     setDropdownListData(res.dataList);
        //   }
        // } else {
        //   setDropdownListData([]);
        //   setSelectedSubject({});
        // }
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
        <SubscriptionsView subjectsData={subjectsData} />

        <SubscriptionsDetails
          onPayLater={() => {
            skipForTrial();
          }}
          onPayNow={() => {}}
        />
      </View>
    </ImageBackground>
  );
};
