import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../constants/Colors";
import { services } from "../../constants/services/services";
import { iconSize, styles } from "../../constants/styles";
import { SHeight, SWidth } from "../../constants/Utls";

const DashboardView = (props) => {
  const isDashboard = props.parentView == "dashboard";
  const [dashboard, setDashboard] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      !dashboard &&
        services.getDashboard().then((res) => {
          setDashboard(res?.data[0]);
        });
    } else {
      setDashboard();
    }
  });

  const renderItemComponent = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => props.onVideoPlay(item)}
        style={{
          marginHorizontal: SWidth(1.25),
          padding: SWidth(1.25),
          paddingTop: SWidth(1),
          marginTop: SWidth(1.5),
          width: SWidth(30),
          alignItems: "center",
        }}
      >
        <ImageBackground
          source={{ uri: item?.videoThumbnail }}
          resizeMode={"stretch"}
          style={{
            height: SWidth(25),
            aspectRatio: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.lightgrey,
          }}
        >
          <View
            style={{
              padding: 5,
              backgroundColor: Colors.white_Alpha_loader,
              borderRadius: SWidth(100),
            }}
          >
            <Icon name="play" size={iconSize + 10} />
          </View>
        </ImageBackground>
        <Text numberOfLines={2}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors.white }]}>
      {isDashboard && (
        <View style={{ height: SHeight(55), alignSelf: "center" }}>
          <Image
            source={{
              uri: dashboard?.noticeBoardImageUrl,
            }}
            style={{
              flex:1,  
              width: SWidth(90),
              resizeMode: "stretch",
            }}
          />
        </View>
      )}
      <View
        style={{
          position: 'absolute',
          bottom:0,
          alignItems: isDashboard ? "center" : "flex-start",
          flexDirection: "row",
        }}
      >
        <FlatList
          key={isDashboard ? "H" : "V"}
          contentContainerStyle={{
            paddingStart: SWidth(1.25),
          }}
          numColumns={isDashboard ? undefined : 3}
          horizontal={isDashboard}
          showsHorizontalScrollIndicator={false}
          data={dashboard?.noticeBoardVideo}
          renderItem={renderItemComponent}
        />
      </View>
    </View>
  );
};

export default DashboardView;
