import { useFocusEffect, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { ScrollView, View, Modal } from "react-native";
import BlueButtonView from "../../components/BlueButtonView";
import FormInputView from "../../components/FormInputView";
import Header from "../../components/Header";
import ModalView from "../../components/ModalView";
import { Colors } from "../../constants/Colors";
import { styles } from "../../constants/styles";
import { SHeight, SWidth } from "../../constants/Utls";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { services } from "../../constants/services/services";
import { Validate } from "../../constants/Validations";
import ButtonView from "../../components/ButtonView";

const dummyData = [
  {
    id: 0,
    value: "1",
  },
  {
    id: 1,
    value: "2",
  },
  {
    id: 3,
    value: "3",
  },
];

const genderData = [
  {
    id: 0,
    name: "Male",
  },
  {
    id: 1,
    name: "Female",
  },
  {
    id: 3,
    name: "Prefer not to say",
  },
];

const AddStudentView = (props) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [dropDownKey, setDropDownKey] = useState("");
  const [courseTypeData, setCourseTypeData] = useState([]);
  const [instituteData, setInstituteData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  useEffect(() => {
    console.log("props.formData>>>>>>>>", props.formData);
  });

  const getDropdownData = () => {
    if (dropDownKey == "gender") {
      return genderData;
    } else if (dropDownKey == "courseType") {
      return courseTypeData;
    } else if (dropDownKey == "institute") {
      return instituteData;
    } else if (dropDownKey == "course") {
      return courseData;
    }
    return dummyData;
  };

  useEffect(() => {
    const getDropdownData = async () => {
      if (!modalVisibility) {
        if (dropDownKey == "courseType") {
          const courseTypeData = await onGetCourseType();
          setCourseTypeData(courseTypeData);
          setModalVisibility(true);
        } else if (dropDownKey == "institute") {
          const instituteData = await onGetInstituteById();
          if (instituteData.length !== 0) {
            setInstituteData(instituteData);
            setModalVisibility(true);
          }
        } else if (dropDownKey == "course") {
          const courseData = await onGetCourseByInstituteId();
          console.log("courseData :", courseData);
          if (courseData.length !== 0) {
            setCourseData(courseData);
            setModalVisibility(true);
          }
        } else if (dropDownKey == "gender") {
          setModalVisibility(true);
        }
      }
    };
    getDropdownData();
  });

  const onGetCourseType = async () => {
    return await services.getCourseType().then((res) => {
      if (res.code == "200") {
        if (res.data.length !== 0) {
          return res.data;
        }
        setDropDownKey("");
      }
      alert(res.message);
    });
  };
  const onGetInstituteById = async () => {
    return await services
      .getInstituteById(`${props.formData?.courseType?.courseCategoryID}`)
      .then((res) => {
        if (res.code == "200") {
          return res.data;
        }
        setDropDownKey("");
        alert(res.message);
      });
  };
  const onGetCourseByInstituteId = async () => {
    return await services
      .getCourseByInstituteId(
        `${props.formData?.courseType?.courseCategoryID}/${props.formData?.institute?.courseInstitutionsID}`
      )
      .then((res) => {
        if (res.code == "200") {
          return res.data;
        }
        setDropDownKey("");
        alert(res.message);
      });
  };

  const openDropDownClick = (key) => {
    setDropDownKey(modalVisibility ? "" : key);
    modalVisibility && setModalVisibility(false);
  };

  const openDateSelector = (key) => {
    setShowDatePicker(true);
  };

  const setDate = (event, date) => {
    date = date || this.state.date;
    setShowDatePicker(false);
    props.onValueChange("dob", String(date));
  };

  const formatDate = (d) => {
    if (d !== "") {
      const date = new Date(d);
      var dd = date.getDate();
      var mm = date.getMonth() + 1;
      var yyyy = date.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      return (d = dd + "/" + mm + "/" + yyyy);
    } else {
      return "";
    }
  };

  const validateInput = () => {
    if (!Validate.checkText("Name", props.formData?.name)) {
      return false;
    } else if (!Validate.checkEmpty("Age", props.formData?.age)) {
      return false;
    } else if (!Validate.checkEmpty("Gender", props.formData?.gender)) {
      return false;
    } else if (!Validate.checkEmpty("Date of Birth", props.formData?.dob)) {
      return false;
    } else if (
      !Validate.checkNumber("Mobile Number", 10, props.formData?.mobile)
    ) {
      return false;
    } else if (
      !Validate.checkEmpty("Course Type", props.formData?.courseType)
    ) {
      return false;
    } else if (!Validate.checkEmpty("Institute", props.formData?.institute)) {
      return false;
    } else if (!Validate.checkEmpty("Course", props.formData?.course)) {
      return false;
    }
    props.onSaveClick(props.formData);
  };

  return (
    <>
      <ScrollView>
        <FormInputView
          id={"name"}
          title={"Name"}
          maxLengthProp={30}
          onChangeText={props.onValueChange}
          value={props.formData["name"]}
        />
        <FormInputView
          id={"age"}
          title={"Age"}
          maxLengthProp={2}
          keyboardTypeProp={"number-pad"}
          onChangeText={props.onValueChange}
          value={props.formData["age"]}
        />
        <FormInputView
          isDropDown
          id={"gender"}
          title={"Gender"}
          openDropDown={() => openDropDownClick("gender")}
          value={props.formData["gender"].name}
        />
        <FormInputView
          isDateSelector
          id={"dob"}
          title={"DOB"}
          openDateSelector={() => openDateSelector("dob")}
          value={formatDate(props.formData["dob"])}
        />
        <FormInputView
          id={"mobile"}
          title={"Mobile"}
          maxLengthProp={10}
          keyboardTypeProp={"number-pad"}
          onChangeText={props.onValueChange}
          value={props.formData["mobile"]}
        />
        <FormInputView
          isDropDown
          id={"courseType"}
          title={"Course Type"}
          openDropDown={() => openDropDownClick("courseType")}
          value={props.formData["courseType"].name}
        />
        <FormInputView
          isDropDown
          id={"institute"}
          title={"Institute"}
          openDropDown={() => openDropDownClick("institute")}
          value={props.formData["institute"].institutionsName}
        />
        <FormInputView
          isDropDown
          id={"course"}
          title={"Course"}
          openDropDown={() => openDropDownClick("course")}
          value={props.formData["course"].name}
        />
        <View
          style={{
            alignItems: "center",
            padding: SWidth(2.5),
          }}
        >
          <ButtonView
            onPressProp={() => validateInput()}
            title={"Save"}
            style={{ width: SWidth(80), height: 45 }}
          />
        </View>
      </ScrollView>
      <ModalView
        itemKey={dropDownKey}
        dropDownList={getDropdownData()}
        modalVisibility={modalVisibility}
        setModalVisibility={() => openDropDownClick()}
        onSelectValue={(key, item) => {
          props.onValueChange(key, item);
          openDropDownClick();
        }}
      />

      {showDatePicker && (
        <RNDateTimePicker
          maximumDate={
            new Date(new Date().setFullYear(new Date().getFullYear() - 5))
          }
          value={
            props.formData["dob"] !== ""
              ? new Date(props.formData["dob"])
              : new Date()
          }
          onChange={setDate}
        />
      )}
    </>
  );
};

export default AddStudentView;
