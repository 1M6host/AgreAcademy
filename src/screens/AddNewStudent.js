import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import BlueButtonView from "../components/BlueButtonView";
import Header from "../components/Header";
import { Colors } from "../constants/Colors";
import { services } from "../constants/services/services";
import { styles } from "../constants/styles";
import { SWidth } from "../constants/Utls";
import AddStudentView from "../views/AddStudent/AddStudentView";

export default AddNewStudent = () => {
  const navigation = useNavigation();

  const onAddNewStudent = (body) => {
    console.log("====================================");
    console.log(body);
    console.log("====================================");
    // services.addNewStudent(body).then((res) => {
    //   if (res.code == "200") {
    //     navigation.navigate("Subscription");
    //   }
    //   alert(res.message);
    // });
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors.white }]}>
      <Header title={"Add Student"} />
      <View
        style={{
          alignItems: "flex-start",
          padding: SWidth(2.5),
        }}
      >
        <BlueButtonView
          onPressProp={() => navigation.goBack()}
          style={styles.commonBackStyle}
          textStyle={styles.commonBackTextStyle}
          title={"BACK"}
        />
      </View>
      <AddStudentView
        onSaveClick={(from) => {
          onAddNewStudent(from);
        }}
      />
    </View>
  );
};
