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
import { useIsFocused } from "@react-navigation/native";
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
  const [selectedSubject, setSelectedSubject] = useState({});
  const [modalVisibility, setModalVisibility] = useState(false);
  const [dropdownListData, setDropdownListData] = useState([]);
  const isFocused = useIsFocused();
  
  const getdata = async () => {
    const data = await getData("UserObj");
    console.log(data);
    if (!listData && data.fk_CourseTypeID) {
      getSubjectDetails(data);
    }
  };

  useEffect(() => {
    console.log(isFocused);
    getdata();
  }, [isFocused]);

  const getSubjectDetails = async (data) => {
    services
      .getSubjectDetails(
        `CourseTypeId=${data.fk_CourseTypeID}&CourseTypeInstitutionsID=${data.fk_CourseTypeInstitutionsID}&CourseID=${data.fk_CourseID}`
      )
      .then((res) => {
        if (res.code == "200") {
          const result = res.dataList.reduce((accum, current) => {
            let subjectGrp = accum.find((x) => x.title === current.description);
            if (!subjectGrp) {
              subjectGrp = { title: current.description, data: [] };
              accum.push(subjectGrp);
            }
            subjectGrp.data.push(current);
            return accum;
          }, []);

          setDropdownListData(
            result.map((e, i) => {
              return { id: i, name: e.title };
            })
          );
          setSelectedSubject({ id: 0, name: result[0].title });
          setListData(result);
          console.log(result);
        } else {
          setDropdownListData([]);
          setSelectedSubject({});
          setListData([]);
        }
      });
  };

  const openDetails = (item) => {
    console.log("openDetails", item);
    navigation.navigate("ChapterDetails", { params: item });
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
      <Header title={"Add Student"} />

      <HomeView
        listType={"detail"} // detail, video
        dropdownTitle={"Select Subject"}
        onOpenDropDown={() => {
          openDropDownClick();
        }}
        onAddClick={() => {
          navigation.navigate("AddNewStudent");
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
