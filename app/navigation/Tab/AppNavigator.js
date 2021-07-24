import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import { AccountScreen, HomeScreen } from '../../screens';
import { BrowseTabNavigator, LibraryTabNavigator } from './TopTabNavigation';
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
                    borderTopWidth: 0,
                    paddingVertical: 10,
                },
                style: { borderTopWidth: 0, height: 57, justifyContent: 'center' }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <AntDesign name="home" size={22} color={color} /> 
                }}
            />
            <Tab.Screen 
                name="Library" 
                component={LibraryTabNavigator}
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={22} color={color} /> 
                }}
            />
            <Tab.Screen 
                name="Browse" 
                component={BrowseTabNavigator} 
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="grid-view" size={22} color={color} />
                }}
            />
            <Tab.Screen 
                name="Seasons" 
                component={SeasonsNavigation}
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="explore" size={22} color={color} />
                }}
            />
            <Tab.Screen 
                name="Account" 
                component={AccountScreen} 
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="account-circle" size={22} color={color} />
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {},
})

export default AppNavigator;