import React, { useState, useEffect, useCallback } from "react";
import { ImageBackground, View } from "react-native";
import { Colors } from "../constants/Colors";
import { images } from "../constants/images";
import { styles } from "../constants/styles";
import { getData, SWidth } from "../constants/Utls";
import Header from "../components/Header";
import HomeView from "../views/Home/HomeView";
import ModalView from "../components/ModalView";
import { services } from "../constants/services/services";
import { useIsFocused, useRoute } from "@react-navigation/native";
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

const tempListData = [
  { title: "Chapter-1", data: ["Topic-1", "Topic-2", "Topic-3"] },
  { title: "Chapter-2", data: ["Topic-1", "Topic-2"] },
  {
    title: "Chapter-3",
    data: ["Topic-1", "Topic-2", "Topic-3", "Topic-4", "Topic-5"],
  },
];

export default SubjectDetails = ({ navigation }) => {
  const [listData, setListData] = useState();
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [dropdownListData, setDropdownListData] = useState(null);
  const isFocused = useIsFocused();
  const route = useRoute();

  const getdata = async () => {
    if (route?.params?.studentData) {
      getSubjectList(route?.params?.studentData);
    }
  };

  useEffect(() => {
    !dropdownListData && isFocused && getdata();
  });

  useEffect(() => {
    if (selectedSubject) {
      setListData([]);
      getSubjectDetails(selectedSubject);
    }
  }, [selectedSubject]);

  const getSubjectDetails = async (data) => {
    services.getSubjectDetails(`${data.subjectID}`).then((res) => {
      if (res.code == "200") {
        if (res.data.length) {
          // const result = res.dataList.reduce((accum, current) => {
          //   let subjectGrp = accum.find((x) => x.title === current.name);
          //   if (!subjectGrp) {
          //     subjectGrp = { title: current.name, data: [] };
          //     accum.push(subjectGrp);
          //   }
          //   subjectGrp.data.push(current);
          //   return accum;
          // }, []);

          setListData(res.data);
        }
      } else {
        setListData([]);
      }
    });
  };

  const getSubjectList = async (data) => {
    console.log("getSubjectList",data)
    services
      .getSubjectList(
        `${data.courseCategoryID}/${data.courseInstitutionsID}/${data.courseID}`
      )
      .then((res) => {
        if (res.code == "200") {
          if (res.data.length) {
            setSelectedSubject(res.data[0]);
            setDropdownListData(res.data);
          }
        } else {
          setDropdownListData([]);
          setSelectedSubject({});
        }
      });
  };

  const openDetails = (item) => {
    navigation.navigate("ChapterDetails", { subjectData: item });
  };

  const onChangeChapter = (key, item) => {
    console.log(key, "<onChangeSubject>", item);
    setSelectedSubject(item);
  };

  const openDropDownClick = () => {
    setModalVisibility(!modalVisibility);
  };

  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header title={"Chapter List"} backPress={() => navigation.goBack()} />

      <HomeView
        listType={"detail"} // detail, video
        dropdownTitle={"Select Subject"}
        onOpenDropDown={() => {
          openDropDownClick();
        }}
        subjectValue={selectedSubject?.name || ""}
        onOpenDetails={(item) => {
          openDetails(item);
        }}
        listData={listData}
      />
      <ModalView
        itemKey={"chapter"}
        dropDownList={dropdownListData}
        modalVisibility={modalVisibility}
        setModalVisibility={() => openDropDownClick()}
        onSelectValue={(key, item) => {
          onChangeChapter(key, item);
          openDropDownClick();
        }}
      />
    </ImageBackground>
  );
};
