import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import LoginNavigator from "./LoginNavigator";
import HomeNavigator from "./HomeNavigator";
import AddNewStudent from "../screens/AddNewStudent";
import Subscriptions from "../screens/Subscriptions";
import SubjectDetails from "../components/SubjectDetails";

const Stack = createNativeStackNavigator();

RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"HomeNav"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="LoginNav" component={LoginNavigator} />
      <Stack.Screen name="HomeNav" component={HomeNavigator} />
      <Stack.Screen name="AddNewStudent" component={AddNewStudent} />
      <Stack.Screen name="Subscription" component={Subscriptions} />
      <Stack.Screen name="SubjectDetails" component={SubjectDetails} />
      <Stack.Screen name="Subscriptions" component={Subscriptions} />
      
    </Stack.Navigator>
  );
};

export default RootNavigator;
