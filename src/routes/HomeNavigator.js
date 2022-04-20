import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Profile from "../screens/Profile";
import AddStudent from "../screens/AddStudent";
import { SHeight, SWidth } from "../constants/Utls";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyLists from "../screens/MytLists";
import Videos from "../screens/Videos";
import ChapterDetails from "../components/ChapterDetails";
import SubjectDetails from "../screens/SubjectDetails";

const TabStack = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const HomeNavNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"HomeScreen"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
};
const AddStudentNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"AddStudent"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AddStudent" component={SubjectDetails} />
    </Stack.Navigator>
  );
};

HomeNavigator = () => {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <TabStack.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute"
        sceneContainerStyle={{ backgroundColor: "#fff" }}
        screenOptions={({ route }) => ({
          // tabBarStyle:{
          // 	paddingVertical:SHeight(1)
          // },

          lazy: true,
          tabBarHideOnKeyboard: true,

          tabBarStyle: {
            paddingVertical: 5,
            marginHorizontal: SWidth(5),
            marginBottom: SWidth(5),
            borderRadius: SWidth(2.5),
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
              iconName = focused ? "account-plus-outline" : "account-plus";
            } else if (route.name === "Subscription") {
              iconName = focused ? "cart-outline" : "cart-plus";
            }

            return (
              <>
                <Icon name={iconName} size={size} color={color} />
                {focused && (
                  <View
                    style={{
                      width: SWidth(1),
                      height: SWidth(1),
                      borderRadius: SWidth(10),
                      backgroundColor: "cyan",
                      marginTop: SHeight(0.5),
                      elevation: 15,
                    }}
                  />
                )}
              </>
            );
          },
          tabBarShowLabel: false,
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
          component={Profile}
          options={{ headerShown: false }}
        />
        <TabStack.Screen
          name="Add Student"
          component={AddStudentNavigator}
          options={{ headerShown: false, lazy: true }}
        />
        <TabStack.Screen
          name="Subscription"
          component={Videos}
          options={{ headerShown: false }}
        />
      </TabStack.Navigator>
    </View>
  );
};

export default HomeNavigator;
