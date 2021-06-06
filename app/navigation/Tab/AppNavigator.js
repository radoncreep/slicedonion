import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';

import { AccountScreen, 
    LibraryScreen, 
    SeasonsScreen } 
from '../../screens';
import { HomeNavigation } from '../Stack/HomeNavigation';
import { BrowseTabNavigator, LibraryTabNavigator } from './TopTabNavigation';
import { AccountNavigation } from '../Stack/AccountNavigation';
import { SeasonsNavigation } from '../Stack/SeasonsNavigation';

const Tab = createBottomTabNavigator();

const AppNavigator = (props) => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#bd44c9',
                inactiveTintColor: 'gray',
                activeBackgroundColor: '#0f011f',
                inactiveBackgroundColor: '#0f011f',
                tabStyle: {
                    borderTopWidth: 0
                },
                style: { borderTopWidth: 0 }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} /> 
                }}
            />
            <Tab.Screen 
                name="Library" 
                component={LibraryTabNavigator}
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color={color} /> 
                }}
            />
            <Tab.Screen 
                name="Browse" 
                component={BrowseTabNavigator} 
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="grid-view" size={24} color={color} />
                }}
            />
            <Tab.Screen 
                name="Seasons" 
                component={SeasonsNavigation}
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="explore" size={24} color={color} />
                }}
            />
            <Tab.Screen 
                name="Account" 
                component={AccountNavigation} 
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="account-circle" size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {},
})

export default AppNavigator;