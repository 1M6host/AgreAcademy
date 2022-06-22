import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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

const innitialVal = {
  name: "",
  age: "",
  gender: "",
  dob: "",
  mobile: "",
  courseType: "",
  institute: "",
  course: "",
};

export default AddNewStudent = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [form, setForm] = useState(innitialVal);
  const [editDetails, setEditDetails] = useState(null);

  const onAddNewStudent = async (body) => {
    let data = await getData("UserObj");
    let tempForm = {
      fk_RegistrationID: data?.registrationID,
      name: body?.name,
      age: body?.age,
      gender: body?.gender.name === "Male" ? "M" : "F",
      dob: new Date(body?.dob),
      mobileNumber: body?.mobile,
      fk_CourseTypeID: body?.courseType.courseTypeID,
      fk_CourseTypeInstitutionsID: body?.institute.courseTypeInstitutionsID,
      fk_CourseID: body?.course.courseID,
      createdBy: data?.name,
    };

    // studentID: editDetails ? editDetails?.studentID : "0",
    if (editDetails) {
      tempForm["studentID"] = editDetails?.studentID;
      services.updateStudent(tempForm).then(async (res) => {
        console.log("services.updateStudent>>>>>", res);
        if (res?.code == "200") {
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
          navigation.goBack();
        }
        else{
          alert(res.message);
        }
      });
    } else {
      services.addNewStudent(tempForm).then(async (res) => {
        if (res?.code == "200") {
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
          navigation.replace("Subscription", { studentObj: res?.data });
        }
        alert(res.message);
      });
    }
  };

  useEffect(() => {
    if (editDetails) {
      let tempForm = {
        name: editDetails?.name,
        age: String(editDetails?.age),
        gender: { name: editDetails?.gender == "m" ? "male" : "female" },
        dob: editDetails?.dob,
        mobile: editDetails?.mobileNumber,
        courseType: {
          courseTypeID: editDetails?.courseTypeID,
          name: editDetails?.courseTypeName,
        },
        institute: {
          courseTypeInstitutionsID: editDetails?.courseTypeInstitutionsID,
          name: editDetails?.courseTypeInstitutionsName,
        },
        course: {
          courseTypeID: editDetails?.courseID,
          name: editDetails?.courseName,
        },
      };
      setForm(tempForm);
    }
  }, [editDetails]);

  useEffect(() => {
    if (!editDetails) {
      setEditDetails(route?.params?.editItem);
    }
  });

  const onChangeText = (key, val) => {
    console.log(key, "<<<<>>>>", val);
    let valTemp;
    let valNewCourseTemp;
    if (key == "mobile" || key == "age") {
      valTemp = val.replace(/[^0-9]/g, "");
    } else if (key == "courseType") {
      valNewCourseTemp = {
        institute: "",
        course: "",
      };
      valTemp = val;
    } else if (key == "institute") {
      valNewCourseTemp = {
        course: "",
      };
      valTemp = val;
    } else {
      valTemp = val;
    }

    if (key == "dob") {
      const today = new Date().getFullYear();
      const ageYear = new Date(valTemp).getFullYear();
      let valAge = today - ageYear;
      setForm(() => {
        return {
          ...form,
          ...{ [key]: valTemp, age: String(valAge) },
          ...valNewCourseTemp,
        };
      });
    } else {
      setForm(() => {
        return {
          ...form,
          ...{ [key]: valTemp },
          ...valNewCourseTemp,
        };
      });
    }

    // setVal(val);
  };

  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header backPress={() => navigation.goBack()} title={"Add Course"} />
      <KeyboardAvoidingView
        style={[styles.container, { backgroundColor: Colors.white }]}
      >
        <AddStudentView
          onSaveClick={(from) => {
            onAddNewStudent(from);
          }}
          onValueChange={(key, val) => {
            onChangeText(key, val);
          }}
          formData={form}
        />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
