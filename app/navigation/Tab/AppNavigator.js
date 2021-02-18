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
                    return <MaterialCommunityIcons name={iconName} size={size} /> 
                }
            })}
        >
            <Tab.Screen name="Home" component={LandingScreen} />
            <Tab.Screen name="Library" component={LibraryScreen} />
            <Tab.Screen name="Browse" component={BrowseScreen} />
            <Tab.Screen name="Seasons" component={SeasonsScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {},
})

export default AppNavigator;