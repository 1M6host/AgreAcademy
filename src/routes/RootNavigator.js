import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../screens/Splash";
import LoginNavigator from './LoginNavigator';
import HomeNavigator from './HomeNavigator';

const Stack = createNativeStackNavigator();

RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={"HomeNav"} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="LoginNav" component={LoginNavigator} />
            <Stack.Screen name="HomeNav" component={HomeNavigator} />
        </Stack.Navigator>
    );
}

export default RootNavigator;
