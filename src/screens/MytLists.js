import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";
import { styles } from "../constants/styles";
import MyListsView from "../views/MyLists/MyListsView";

const MyLists = (props) => {
  return (
    <View style={styles.container}>
        <Header title={"My Courses"}/>
      <MyListsView />
    </View>
  );
};

export default MyLists;
