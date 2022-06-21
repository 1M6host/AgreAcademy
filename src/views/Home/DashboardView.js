import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../constants/Colors";
import { services } from "../../constants/services/services";
import { iconSize, styles } from "../../constants/styles";
import { SHeight, SWidth } from "../../constants/Utls";

const DashboardView = (props) => {
  const isDashboard = props.parentView == "dashboard";
  const [dashboard, setDashboard] = useState();
  useEffect(() => {
    !dashboard &&
      services.getDashboard().then((res) => {
        setDashboard(res?.data);
      });
  });

  const renderItemComponent = ({ item, index }) => {
    return (
      <View
        style={{
          marginHorizontal: SWidth(1.25),
          padding: SWidth(1.25),
          marginTop: SWidth(1.5),
          width: SWidth(30),
          alignItems: "center",
        }}
      >
        <View
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
        </View>
        <Text numberOfLines={2}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors.white }]}>
      {isDashboard && (
        <View style={{ flex: 2, alignSelf: "center" }}>
          <Image
            source={{
              uri: dashboard?.noticeBoardImageUrl,
            }}
            style={{
              height: SHeight(50),
              width: SWidth(80),
              resizeMode: "contain",
            }}
          />
        </View>
      )}
      <View
        style={{
          flex: 1,
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
