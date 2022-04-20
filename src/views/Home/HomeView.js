import React from "react";
import {
  SectionList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../../constants/Colors";
import { iconSize, styles } from "../../constants/styles";
import { SHeight, SWidth } from "../../constants/Utls";
import BlueButtonView from "../../components/BlueButtonView";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FormInputView from "../../components/FormInputView";
import ListHeaderComponent from "../../components/ListHeaderComponent";
import { FontWeight } from "../../constants/FontWeights";
import { Fontsize } from "../../constants/Fontsize";

const HomeView = (props) => {
  const renderSectionHeaderComponent = ({ section }) => {
    return (
      <ListHeaderComponent
        children={
          <Text style={styles.listHeaderTitleStyle}>{section.title}</Text>
        }
      />
    );
  };

  const renderItemComponent = ({ item, index }) => {
    return (
      <>
        {props.listType == "video" ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: Colors.lightgrey,
              paddingHorizontal: SWidth(5),
              paddingVertical: SWidth(2.5),
            }}
          >
            <Text>{item.name}</Text>
            <TouchableOpacity onPress={() => props.onPlay(item)}>
              <Icon name="play-box" size={SHeight(5)} />
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: Colors.lightgrey,
              paddingHorizontal: SWidth(5),
              paddingVertical: SHeight(2),
              marginBottom: SHeight(1),
              elevation: 5,
              borderRadius: SWidth(1.5),
              backgroundColor: "#fff",
              overflow: "hidden",
            }}
          >
            <Text>{item.name}</Text>
            <BlueButtonView
              style={{
                backgroundColor: "#fff",
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: Colors.green,
                borderRadius: SWidth(1),
                alignItems: "center",
                justifyContent: "center",
              }}
              textStyle={{
                color: Colors.green,
                fontSize: Fontsize.title,
                fontWeight: FontWeight["500"],
              }}
              onPressProp={() => props.onOpenDetails(item)}
              title={"Show Detail"}
            />
          </View>
        )}
      </>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: "#fff" }]}>
      {props.onAddClick && (
        <View
          style={{
            alignItems: "flex-end",
            padding: SWidth(2.5),
          }}
        >
          <BlueButtonView onPressProp={props.onAddClick} title={"ADD"} />
        </View>
      )}
      {props.onOpenDropDown && !props.listData?.length == 0 && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: SWidth(2.5),
          }}
        >
          <Text
            style={[
              styles.text_normal,
              { fontWeight: FontWeight.bold, marginLeft: SWidth(5) },
            ]}
          >
            {props.dropdownTitle}
          </Text>
          <FormInputView
            isDropDown
            id={"chapter"}
            openDropDown={props.onOpenDropDown}
            value={props.subjectValue}
            containerStyle={{
              width: SWidth(30),
              borderWidth: 1,
              borderRadius: SWidth(1.5),
              height: SHeight(5),
              overflow: "hidden",
              borderColor: "cyan",
            }}
            style={{
              paddingHorizontal: SWidth(2.5),
              height: SHeight(5),
              backgroundColor: "rgba(0,255,255,0.3)",
              elevation: 0,
            }}
          />
        </View>
      )}

      <SectionList
        contentContainerStyle={{
          paddingHorizontal: SWidth(2.5),
          paddingVertical: SHeight(1),
        }}
        sections={props.listData || []}
        renderSectionHeader={renderSectionHeaderComponent}
        stickySectionHeadersEnabled
        renderItem={renderItemComponent}
        ListEmptyComponent={() => {
          return (
            <View style={styles.container_Align_Center_All}>
              <Text style={styles.text_title}>No Data Found</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeView;
