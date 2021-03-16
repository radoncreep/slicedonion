import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AnimeDetails } from '../screens';
import { HomeNavigation } from './Stack/HomeNavigation';


const RootStack = createStackNavigator();

export const RootNavigator = () => {
    return (
        <RootStack.Navigator mode="modal">
            <RootStack.Screen
                name="Main"
                component={HomeNavigation}
            />
            <RootStack.Screen 
                name="Details"
                component={AnimeDetails}
                options={{ 
                    headerTitle: false,
                    headerTransparent: true,
                }}
            />
        </RootStack.Navigator>
    )
};