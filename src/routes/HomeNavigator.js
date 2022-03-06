import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Account from '../screens/Account';

const TabStack = createBottomTabNavigator();

HomeNavigator = () => {
    return (
        <TabStack.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home-outline'
                            : 'home';
                    } else if (route.name === 'Account') {
                        iconName = focused
                            ? 'account-outline'
                            : 'account';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'cyan',
                tabBarInactiveTintColor: 'gray',
            })}>
            <TabStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <TabStack.Screen name="Account" component={Account} options={{ headerShown: false }} />
        </TabStack.Navigator>
    );
}

export default HomeNavigator;
