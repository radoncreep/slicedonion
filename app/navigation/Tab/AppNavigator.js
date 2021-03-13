import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { AccountScreen, 
    LibraryScreen, 
    SeasonsScreen } 
from '../../screens';
import { HomeNavigation } from '../Stack/HomeNavigation';
import TopTabNavigation from './TopTabNavigation';

const Tab = createBottomTabNavigator();

const AppNavigator = (props) => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#bd44c9',
                inactiveTintColor: 'gray',
                activeBackgroundColor: '#000',
                inactiveBackgroundColor: '#000',
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
                component={LibraryScreen}
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color={color} /> 
                }}
            />
            <Tab.Screen 
                name="Browse" 
                component={TopTabNavigation} 
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="grid-view" size={24} color={color} />
                }}
            />
            <Tab.Screen 
                name="Seasons" 
                component={SeasonsScreen}
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="explore" size={24} color={color} />
                }}
            />
            <Tab.Screen 
                name="Account" 
                component={AccountScreen} 
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