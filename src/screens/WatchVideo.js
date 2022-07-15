import React, { useEffect, useState } from "react";
import { Text, View, ImageBackground } from "react-native";
import Header from "../components/Header";
import { Colors } from "../constants/Colors";
import { styles } from "../constants/styles";
import { SHeight, SWidth } from "../constants/Utls";
import { images } from "../constants/images";
import Video from "react-native-video";
import WebView from "react-native-webview";
import { useRoute } from "@react-navigation/native";
import { services } from "../constants/services/services";
export default WatchVideo = ({ navigation }) => {
  const route = useRoute();
  const [data, setData] = useState();

  useEffect(() => {
    if (!data && route?.params?.topic) {
      console.log(route?.params?.topic)
      setData(route?.params?.topic);
    }
  });

  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header backPress={() => navigation.goBack()} title={data?.title} />
      <View style={[styles.container, { backgroundColor: "#fff" }]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingVertical: SHeight(2),
          }}
        >
          <View maxWidth={SWidth(45)}>
            <Text numberOfLines={2} style={[styles.text_normal_bold, {}]}>
              Subject: {data?.subjectName}
            </Text>
            <Text
              numberOfLines={2}
              style={[styles.text_normal, { paddingVertical: SHeight(1.5) }]}
            >
              {data?.chapterName}
            </Text>
          </View>
          <View maxWidth={SWidth(45)}>
            <Text
              numberOfLines={2}
              style={[styles.text_normal_bold, { maxWidth: SWidth(35) }]}
            >
              Topic: {data?.topicName}
            </Text>
            <Text
              numberOfLines={2}
              style={[styles.text_normal, { paddingVertical: SHeight(1.5) }]}
            >
              {data?.title}
            </Text>
          </View>
        </View>
        {/* { <WebView
          javaScriptEnabled={true}
          source={{
            uri: `https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4`,
          }}
        />} */}
        <View
          style={{
            height:SHeight(45)            
          }}
        >
          {/* <Video
            source={{
              uri:
                "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
            }}
            ref={(ref) => {
              player = ref;
            }} // Store reference
            overrideFileExtensionAndroid
            onBuffer={() => console.log("buffer")} // Callback when remote video is buffering
            onError={(error) => console.log("onError", error)} // Callback when video cannot be loaded
            resizeMode={"contain"}
            style={{
              flex: 1,
            }}
          /> */}
          <WebView
            contentMode="mobile"
            allowsFullscreenVideo
            allowsInlineMediaPlayback
            mediaPlaybackRequiresUserAction
            source={{
              uri: data?.url,
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
