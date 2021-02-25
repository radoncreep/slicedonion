import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AccountScreen,
    BrowseScreen, 
    LandingScreen, 
    LibraryScreen, 
    SeasonsScreen } 
from '../../screens';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { HomeNavigation } from '../Stack/HomeNavigation';
import TopTabNavigation from './TopTabNavigation';

const Tab = createBottomTabNavigator();

const AppNavigator = (props) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                                iconName = focused ? 'home' :  'home-rounded'
                            break;
                        default:
                            break;
                    }
                    return <MaterialCommunityIcons name={iconName} size={size} color="#fff" /> 
                }
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                activeBackgroundColor: 'orange',
                inactiveBackgroundColor: '#000'
            }}
        >
            <Tab.Screen name="Home" component={HomeNavigation} />
            <Tab.Screen name="Library" component={LibraryScreen} />
            <Tab.Screen name="Browse" component={TopTabNavigation} />
            <Tab.Screen name="Seasons" component={SeasonsScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {},
})

export default AppNavigator;