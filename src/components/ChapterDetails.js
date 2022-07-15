import React, { useState, useEffect } from "react";
import { ImageBackground, View, Linking } from "react-native";
import { Colors } from "../constants/Colors";
import { images } from "../constants/images";
import { styles } from "../constants/styles";
import { SWidth } from "../constants/Utls";
import BlueButtonView from "./BlueButtonView";
import Header from "./Header";
import HomeView from "../views/Home/HomeView";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { services } from "../constants/services/services";
import ModalView from "./ModalView";

const tempListData = [
  {
    title: "Topic-1",
    data: [
      {
        name: "Sub-Topic-1",
      },
      {
        name: "Sub-Topic-2",
      },
      {
        name: "Sub-Topic-3",
      },
    ],
  },
  {
    title: "Topic-2",
    data: [
      {
        name: "Sub-Topic-1",
      },
      {
        name: "Sub-Topic-2",
      },
      {
        name: "Sub-Topic-3",
      },
      {
        name: "Sub-Topic-4",
      },
      {
        name: "Sub-Topic-5",
      },
    ],
  },
];

export default ChapterDetails = ({ navigation }) => {
  const route = useRoute();
  const isFocused = useIsFocused();
  const [listData, setListData] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [dropdownListData, setDropdownListData] = useState(null);

  const openDropDownClick = () => {
    setModalVisibility(!modalVisibility);
  };

  useEffect(() => {
    isFocused && getdata();
  }, []);

  const getdata = async () => {
    if (route?.params?.subjectData) {
      getTopicList(route?.params?.subjectData);
    }
  };

  const getTopicList = async (data) => {
    services.getChapterDetails(`${data.chapterID}`).then((res) => {
      if (res.code == "200") {
        if (res.data.length) {
          setListData(res.data);
        }
      } else {
        setListData([]);
      }
    });
  };

  const onPlay = (item) => {
    console.log("onPlay", item);
    services.getTopicDetails(`TopicId=${item?.topicID}`).then((res) => {
      if (res.code == "200") {
        setDropdownListData(res.data);
        openDropDownClick();
      } else {
        setDropdownListData([]);
      }
    });
    // navigation.navigate("WatchVideo", { topic: item });
    // Linking.openURL(
    //   " https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
    // );
  };

  const openTopic = (topic) => {
    navigation.navigate("WatchVideo", { topic: topic });
  };

  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header backPress={() => navigation.goBack()} title={"Topic List"} />

      <HomeView
        listType={"video"} // detail, video
        onPlay={(item) => {
          onPlay(item);
        }}
        listData={listData}
      />
      <ModalView
        itemKey={"topic"}
        dropDownList={dropdownListData}
        modalVisibility={modalVisibility}
        setModalVisibility={() => openDropDownClick()}
        onSelectValue={(key, item) => {
          openTopic(item);
          openDropDownClick();
        }}
      />
    </ImageBackground>
  );
};
