import { useFocusEffect } from "@react-navigation/native";
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
  const [form, setForm] = useState(innitialVal);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [dropDownKey, setDropDownKey] = useState("");
  const [courseTypeData, setCourseTypeData] = useState([]);
  const [instituteData, setInstituteData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeText = (key, val) => {
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
    setForm(() => {
      return { ...form, ...{ [key]: valTemp }, ...valNewCourseTemp };
    });
    // setVal(val);
  };

  useEffect(() => {
    console.log("form :", form);
  }, [form]);

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
        if (res.dataList.length !== 0) {
          return res.dataList;
        }
        setDropDownKey("");
      }
      alert(res.message);
    });
  };
  const onGetInstituteById = async () => {
    return await services
      .getInstituteById(`ID=${form?.courseType?.courseTypeID}`)
      .then((res) => {
        if (res.code == "200") {
          return res.dataList;
        }
        setDropDownKey("");
        alert(res.message);
      });
  };
  const onGetCourseByInstituteId = async () => {
    return await services
      .getCourseByInstituteId(
        `CourseTypeID=${form?.courseType?.courseTypeID}&ID=${form?.institute?.courseTypeInstitutionsID}`
      )
      .then((res) => {
        if (res.code == "200") {
          return res.dataList;
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
    console.log(date);
    setShowDatePicker(false);

    onChangeText("dob", String(date));
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
    // if (!Validate.checkText("Name", form?.name)) {
    //   return false;
    // } else if (!Validate.checkEmpty("Age", form?.age)) {
    //   return false;
    // } else if (!Validate.checkEmpty("Gender", form?.gender)) {
    //   return false;
    // } else if (!Validate.checkEmpty("Date of Birth", form?.dob)) {
    //   return false;
    // } else if (!Validate.checkNumber("Mobile Number", 10, form?.mobile)) {
    //   return false;
    // } else if (!Validate.checkEmpty("Course Type", form?.courseType)) {
    //   return false;
    // } else if (!Validate.checkEmpty("Institute", form?.institute)) {
    //   return false;
    // } else if (!Validate.checkEmpty("Course", form?.course)) {
    //   return false;
    // }
    props.onSaveClick(form);
  };

  return (
    <>
      <ScrollView>
        <FormInputView
          id={"name"}
          title={"Name"}
          maxLengthProp={30}
          onChangeText={onChangeText}
          value={form["name"]}
        />
        <FormInputView
          id={"age"}
          title={"Age"}
          maxLengthProp={2}
          keyboardTypeProp={"number-pad"}
          onChangeText={onChangeText}
          value={form["age"]}
        />
        <FormInputView
          isDropDown
          id={"gender"}
          title={"Gender"}
          openDropDown={() => openDropDownClick("gender")}
          value={form["gender"].name}
        />
        <FormInputView
          isDateSelector
          id={"dob"}
          title={"DOB"}
          openDateSelector={() => openDateSelector("dob")}
          value={formatDate(form["dob"])}
        />
        <FormInputView
          id={"mobile"}
          title={"Mobile"}
          maxLengthProp={10}
          keyboardTypeProp={"number-pad"}
          onChangeText={onChangeText}
          value={form["mobile"]}
        />
        <FormInputView
          isDropDown
          id={"courseType"}
          title={"Course Type"}
          openDropDown={() => openDropDownClick("courseType")}
          value={form["courseType"].name}
        />
        <FormInputView
          isDropDown
          id={"institute"}
          title={"Institute"}
          openDropDown={() => openDropDownClick("institute")}
          value={form["institute"].name}
        />
        <FormInputView
          isDropDown
          id={"course"}
          title={"Course"}
          openDropDown={() => openDropDownClick("course")}
          value={form["course"].name}
        />
        <View
          style={{
            alignItems: "center",
            padding: SWidth(2.5),
          }}
        >
          <BlueButtonView
            onPressProp={() => validateInput()}
            title={"Save"}
            style={{ width: SWidth(60), height: 45 }}
          />
        </View>
      </ScrollView>
      <ModalView
        itemKey={dropDownKey}
        dropDownList={getDropdownData()}
        modalVisibility={modalVisibility}
        setModalVisibility={() => openDropDownClick()}
        onSelectValue={(key, item) => {
          onChangeText(key, item);
          openDropDownClick();
        }}
      />

      {showDatePicker && (
        <RNDateTimePicker
          maximumDate={
            new Date(new Date().setFullYear(new Date().getFullYear() - 5))
          }
          value={form["dob"] !== "" ? new Date(form["dob"]) : new Date()}
          onChange={setDate}
        />
      )}
    </>
  );
};

export default AddStudentView;
