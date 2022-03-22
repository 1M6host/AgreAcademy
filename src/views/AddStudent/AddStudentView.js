import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import BlueButtonView from "../../components/BlueButtonView";
import FormInputView from "../../components/FormInputView";
import Header from "../../components/Header";
import { styles } from "../../constants/styles";
import { SHeight, SWidth } from "../../constants/Utls";

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

const AddStudentView = (props) => {
  const [form, setForm] = useState(innitialVal);
  //   useFocusEffect(() => {
  //     console.log('dsjkfhksjdsad');
  //     setForm(innitialVal);
  //   });

  const onChangeText = (key, val) => {
    setForm({ ...form, ...{ [key]: val } });
    // setVal(val);
  };

  return (
    <View style={styles.container}>
      <Header title={"AddStudent"} />
      <ScrollView>
        <FormInputView
          id={"name"}
          title={"Name"}
          onChangeText={onChangeText}
          value={form["name"]}
        />
        <FormInputView
          id={"age"}
          title={"Age"}
          onChangeText={onChangeText}
          value={form["age"]}
        />
        <FormInputView
          id={"gender"}
          title={"Gender"}
          onChangeText={onChangeText}
          value={form["gender"]}
        />
        <FormInputView
          id={"dob"}
          title={"DOB"}
          onChangeText={onChangeText}
          value={form["dob"]}
        />
        <FormInputView
          id={"mobile"}
          title={"Mobile"}
          onChangeText={onChangeText}
          value={form["mobile"]}
        />
        <FormInputView
          id={"courseType"}
          title={"Course Type"}
          onChangeText={onChangeText}
          value={form["courseType"]}
        />
        <FormInputView
          id={"institute"}
          title={"Institute"}
          onChangeText={onChangeText}
          value={form["institute"]}
        />
        <FormInputView
          id={"course"}
          title={"Course"}
          onChangeText={onChangeText}
          value={form["course"]}
        />
        <View
          style={{
            width: SWidth(95),
            alignItems: "center",
            padding: SWidth(2.5),
          }}
        >
          <BlueButtonView
            title={"Save Student"}
            style={{ width: SWidth(60),height:SHeight(8) }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddStudentView;
