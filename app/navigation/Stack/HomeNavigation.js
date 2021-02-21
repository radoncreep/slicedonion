import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AnimeDetails, LandingScreen } from '../../screens';

const Stack = createStackNavigator();

export const HomeNavigation = () => {
    return (
        <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                name="LandingScreen" 
                component={LandingScreen}
                // options={{ headerShown: false }} 
                />
            <Stack.Screen name="Details" component={AnimeDetails}/>
        </Stack.Navigator>
    )
};