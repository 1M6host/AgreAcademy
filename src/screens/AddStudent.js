import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground } from "react-native";
import Header from "../components/Header";
import { images } from "../constants/images";
import { services } from "../constants/services/services";
import { getData } from "../constants/Utls";
import AddStudentView from "../views/AddStudent/AddStudentView";
import HomeView from "../views/Home/HomeView";

const tempListData = [
  {
    name: "Student-1",
  },
  {
    name: "Student-2",
  },
  {
    name: "Student-3",
  },
  {
    name: "Student-4",
  },
  {
    name: "Student-5",
  },
];

export default AddStudent = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [listData, setListData] = useState([]);

  const openChapterDetails = (item) => {
    navigation.navigate("SubjectDetails", { studentData: item });
  };

  const getdata = async () => {
    const data = await getData("UserObj");
    console.log(listData)
    if (listData?.length === 0 && data?.registrationID) {
      getStudents(data);
    }
  };

  useEffect(() => {
    isFocused ? getdata() : setListData([]);
  }, [isFocused]);

  const getStudents = async (data) => {
    services.getStudents(data?.registrationID).then((res) => {
      if (res.code == "200") {
        setListData(res.data);
      } else {
        setListData([]);
      }
    });
  };
  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header title={"Course"} />

      <HomeView
        listType={"student"} // detail, video
        navigateEdit={(item) => {
          navigation.navigate("AddNewStudent", { editItem: item });
        }}
        onAddClick={() => {
          navigation.navigate("AddNewStudent");
        }}
        onOpenChapterList={(item) => {
          openChapterDetails(item);
        }}
        onSubscribe={(item) => {
          navigation.navigate("Subscription", { studentObj: item });
        }}
        listData={listData}
      />
    </ImageBackground>
  );
};
