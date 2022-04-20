import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, View } from "react-native";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import BlueButtonView from "../components/BlueButtonView";
import Header from "../components/Header";
import { Colors } from "../constants/Colors";
import { images } from "../constants/images";
import { services } from "../constants/services/services";
import { styles } from "../constants/styles";
import { getData, setData, SWidth } from "../constants/Utls";
import AddStudentView from "../views/AddStudent/AddStudentView";

export default AddNewStudent = () => {
  const navigation = useNavigation();

  const onAddNewStudent = (body) => {
    // navigation.navigate("Subscriptions");
    services
      .addNewStudent({
        studentID: 0,
        fk_RegistrationID: 159,
        name: body.name,
        age: body?.age,
        gender: body.gender.name,
        dob: new Date(body.dob),
        mobileNumber: body.mobile,
        fk_CourseTypeID: body.courseType.courseTypeID,
        fk_CourseTypeInstitutionsID: body.institute.courseTypeInstitutionsID,
        fk_CourseID: body.course.courseID,
        createdBy: "",
      })
      .then(async (res) => {
        if (res.code == "200") {
          let data = await getData("UserObj");
          data = {
            ...data,
            ...{
              fk_CourseTypeID: body.courseType.courseTypeID,
              fk_CourseTypeInstitutionsID:
                body.institute.courseTypeInstitutionsID,
              fk_CourseID: body.course.courseID,
            },
          };
          await setData("UserObj", data);
          navigation.navigate("Subscription");
        }
        alert(res.message);
      });
  };

  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header backPress={() => navigation.goBack()} title={"Add Student"} />
      <KeyboardAvoidingView
        style={[styles.container, { backgroundColor: Colors.white }]}
      >
        <AddStudentView
          onSaveClick={(from) => {
            onAddNewStudent(from);
          }}
        />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
