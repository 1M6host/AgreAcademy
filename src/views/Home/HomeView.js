import React from "react";
import {
  SectionList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
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
import { images } from "../../constants/images";
import ArrowButton from "../../components/ArrowButton";
import ButtonView from "../../components/ButtonView";

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
        {props.listType == "student" && (
          <TouchableOpacity
            onPress={() => props.onOpenChapterList(item)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: Colors.lightgrey,
              paddingHorizontal: SWidth(3.5),
              height:SWidth(18),
              marginBottom: SHeight(1),
              elevation: 5,
              borderRadius: SWidth(1.5),
              backgroundColor: "#fff",
              overflow: "hidden",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flex: 2.5,
              }}
            >
              <Image
                source={images.avatar}
                style={{
                  width: SWidth(12),
                  aspectRatio: 1,
                  resizeMode: "contain",
                }}
              />
              <Text
                numberOfLines={1}
                style={[
                  styles.text_normal_bold,
                  {
                    flex: 1,
                    marginHorizontal: SWidth(1.5),
                    marginStart: SWidth(2.5),
                  },
                ]}
              >
                {item.name}
              </Text>
            </View>
            <View
              style={{
                flex: 1.5,
                alignItems: "center",
              }}
            >
              {!item.isSubscribed&&<BlueButtonView
                style={{
                  backgroundColor: item.isSubscribed
                    ? Colors.subscribedBgC
                    : Colors.red,
                  borderWidth: StyleSheet.hairlineWidth,
                  borderColor: item.isSubscribed
                    ? Colors.subscribedBgC
                    : Colors.red,
                  width: SWidth(25),
                  height:SWidth(8),
                  borderRadius: SWidth(1.5),
                  alignItems: "center",
                  justifyContent: "center",
                }}
                textStyle={{
                  color: item.isSubscribed ? Colors.black : Colors.white,
                  fontSize: Fontsize.title,
                  fontWeight: FontWeight["500"],
                }}
                onPressProp={() => {
                  props.onSubscribe(item);
                }}
                title={"Subscribe"}
              />}
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "space-evenly",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity onPress={() => props.navigateEdit(item)}>
                <Icon name="pencil-outline" size={iconSize} />
              </TouchableOpacity>
              <ArrowButton />
            </View>
          </TouchableOpacity>
        )}
        {props.listType == "video" && (
          <TouchableOpacity
            onPress={() => props.onPlay(item)}
            // disabled={!item.topicParentID}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: Colors.lightgrey,
              paddingHorizontal: SWidth(5),
              paddingVertical: SWidth(3),
              marginBottom: SHeight(1),
            }}
          >
            <Text>{item.name}</Text>

            {/* <TouchableOpacity onPress={() => props.onPlay(item)}>
              <Icon name="play-box" size={SHeight(5)} />
            </TouchableOpacity> */}
            {item.topicParentID && <ArrowButton />}
          </TouchableOpacity>
        )}
        {props.listType == "detail" && (
          <TouchableOpacity
            onPress={() => props.onOpenDetails(item)}
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
            <ArrowButton />
            {/* <BlueButtonView
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
            /> */}
          </TouchableOpacity>
        )}
      </>
    );
  };
  console.log("props.listType>", props.listType);
  return (
    <View style={[styles.container, { backgroundColor: "#fff" }]}>
      {props.onAddClick && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: SWidth(5),
            paddingVertical: SHeight(1),
          }}
        >
          <View />
          {/* style={[styles.text_normal, { fontWeight: FontWeight.bold }]}>
            Student List
          </Text> */}
          <BlueButtonView
            style={{ width: SWidth(35), height: SHeight(5) }}
            onPressProp={props.onAddClick}
            title={"ADD"}
          />
        </View>
      )}
      {props.onOpenDropDown && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: SWidth(5),
          }}
        >
          <Text style={[styles.text_normal, { fontWeight: FontWeight.bold }]}>
            {props.dropdownTitle}
          </Text>
          <FormInputView
            isDropDown
            id={"chapter"}
            openDropDown={props.onOpenDropDown}
            value={props.subjectValue}
            containerStyle={{
              width: SWidth(35),
              borderWidth: 1,
              borderRadius: SWidth(1.5),
              height: SHeight(5),
              overflow: "hidden",
              marginHorizontal: 0,
              borderColor: Colors.listHeader,
            }}
            style={{
              paddingHorizontal: SWidth(2.5),
              height: SHeight(5),
              backgroundColor: Colors.appThemeOpacity_70,
              elevation: 0,
            }}
          />
        </View>
      )}

      {/* {props.listType == "video" ? (
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
      ) : ( */}
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: SWidth(2.5),
          paddingVertical: SHeight(1),
        }}
        data={props.listData || []}
        renderItem={renderItemComponent}
        ListEmptyComponent={() => {
          return (
            <View style={styles.container_Align_Center_All}>
              <Text style={styles.text_title}>No Data Found</Text>
            </View>
          );
        }}
      />
      {/* )} */}
    </View>
  );
};

export default HomeView;
