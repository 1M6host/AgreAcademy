import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Subscriptions from "../screens/Subscriptions";
import Profile from "../screens/Profile";
import AddStudent from "../screens/AddStudent";
import { SHeight } from "../constants/Utls";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WatchVideo from "../screens/WatchVideo";
import MyLists from "../screens/MytLists";

const TabStack = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const HomeNavNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"HomeScreen"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="WatchVideo" component={WatchVideo} />
    </Stack.Navigator>
  );
};
const AddStudentNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"AddStudent"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AddStudent" component={AddStudent} />
    </Stack.Navigator>
  );
};

HomeNavigator = () => {
  return (
    <TabStack.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      screenOptions={({ route }) => ({
        // tabBarStyle:{
        // 	paddingVertical:SHeight(1)
        // },
        lazy: true,
        tabBarStyle: {
          height: 60,
          paddingVertical: 5,
        },
        tabBarLabelStyle: {
          marginBottom: 10,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home-outline" : "home";
          } else if (route.name === "Profile") {
            iconName = focused ? "account-outline" : "account";
          } else if (route.name === "Add Student") {
            iconName = focused ? "plus-minus" : "plus-minus-box";
          } else if (route.name === "Subscription") {
            iconName = focused ? "cart-outline" : "cart-plus";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "cyan",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <TabStack.Screen
        name="Home"
        component={HomeNavNavigator}
        options={{ headerShown: false }}
      />
      <TabStack.Screen
        name="Profile"
        component={MyLists}
        options={{ headerShown: false }}
      />
      <TabStack.Screen
        name="Add Student"
        component={AddStudentNavigator}
        options={{ headerShown: false, lazy: true }}
      />
      <TabStack.Screen
        name="Subscription"
        component={Subscriptions}
        options={{ headerShown: false }}
      />
    </TabStack.Navigator>
  );
};

export default HomeNavigator;
