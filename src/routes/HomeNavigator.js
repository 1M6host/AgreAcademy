import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Subscriptions from '../screens/Subscriptions';
import Profile from '../screens/Profile';
import AddStudent from '../screens/AddStudent';
import {SHeight} from '../constants/Utls';

const TabStack = createBottomTabNavigator();

HomeNavigator = () => {
  return (
    <TabStack.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: SHeight(7),
        },
        tabBarLabelStyle: {
          marginBottom: 10,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account-outline' : 'account';
          } else if (route.name === 'Add Student') {
            iconName = focused ? 'plus-minus' : 'plus-minus-box';
          } else if (route.name === 'Subscription') {
            iconName = focused ? 'cart-outline' : 'cart-plus';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'cyan',
        tabBarInactiveTintColor: 'gray',
      })}>
      <TabStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <TabStack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <TabStack.Screen
        name="Add Student"
        component={AddStudent}
        options={{headerShown: false, lazy: true}}
      />
      <TabStack.Screen
        name="Subscription"
        component={Subscriptions}
        options={{headerShown: false}}
      />
    </TabStack.Navigator>
  );
};

export default HomeNavigator;
