import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import LoginNavigator from "./LoginNavigator";
import HomeNavigator from "./HomeNavigator";
import AddNewStudent from "../screens/AddNewStudent";
import Subscriptions from "../screens/Subscriptions";
import ChapterDetails from "../components/ChapterDetails";
import WatchVideo from "../screens/WatchVideo";
import SubjectDetails from "../screens/SubjectDetails";

const Stack = createNativeStackNavigator();

RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Splash"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="LoginNav" component={LoginNavigator} />
      <Stack.Screen name="HomeNav" component={HomeNavigator} />
      <Stack.Screen name="AddNewStudent" component={AddNewStudent} />
      <Stack.Screen name="Subscription" component={Subscriptions} />
      <Stack.Screen name="SubjectDetails" component={SubjectDetails} />
      <Stack.Screen name="Subscriptions" component={Subscriptions} />
      <Stack.Screen name="ChapterDetails" component={ChapterDetails} />
      <Stack.Screen name="WatchVideo" component={WatchVideo} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
