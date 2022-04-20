import React from "react";
import { Text, View, ImageBackground } from "react-native";
import Header from "../components/Header";
import { Colors } from "../constants/Colors";
import { styles } from "../constants/styles";
import { SHeight, SWidth } from "../constants/Utls";
import { images } from "../constants/images";
import Video from "react-native-video";
export default WatchVideo = ({ navigation }) => {
  return (
    <ImageBackground source={images.splashBackground} style={{ flex: 1 }}>
      <Header backPress={() => navigation.goBack()} title={"Watch Video"} />
      <View style={[styles.container, { backgroundColor: "#fff" }]}>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <View>
            <Text style={[styles.text_normal_bold, {}]}>Subject: Science</Text>
            <Text
              style={[styles.text_normal, { paddingVertical: SHeight(1.5) }]}
            >
              Biology Anatomy
            </Text>
          </View>
          <View>
            <Text style={[styles.text_normal_bold, {}]}>Topic: Topic-1</Text>
            <Text
              style={[styles.text_normal, { paddingVertical: SHeight(1.5) }]}
            >
              Session-1
            </Text>
          </View>
        </View>
        {/* { <WebView
          javaScriptEnabled={true}
          source={{
            uri: `https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4`,
          }}
        />} */}
        {/* <Video
          source={{
            uri:
              "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
          }} // Can be a URL or a local file.
          ref={(ref) => {
            // this.player = ref;
          }} // Store reference
          // onBuffer={this.onBuffer} // Callback when remote video is buffering
          // onError={this.videoError} // Callback when video cannot be loaded
          style={{
           
          }}
        /> */}
      </View>
    </ImageBackground>
  );
};
