import React, { useState, useEffect } from "react";
import { ImageBackground, View } from "react-native";
import { Colors } from "../constants/Colors";
import { images } from "../constants/images";
import { styles } from "../constants/styles";
import { SWidth } from "../constants/Utls";
import BlueButtonView from "./BlueButtonView";
import Header from "./Header";
import HomeView from "../views/Home/HomeView";
import ModalView from "./ModalView";
import { useRoute } from "@react-navigation/native";
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
  const [listData, setListData] = useState(tempListData);
  const [selectedSubject, setSelectedSubject] = useState({
    id: 0,
    name: "1",
  });

  useEffect(() => {
    // setSelectedSubject(route.params.params);
  });

  const onPlay = (item) => {
    console.log("onPlay", item);
    navigation.navigate("WatchVideo");
  };

  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header backPress={() => navigation.goBack()} title={"Chapter Details"} />

      <HomeView
        listType={"video"} // detail, video
        onPlay={(item) => {
          onPlay(item);
        }}
        listData={listData}
      />
    </ImageBackground>
  );
};
