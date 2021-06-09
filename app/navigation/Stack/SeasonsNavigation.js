import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SeasonsScreen } from '../../screens';

const Stack = createStackNavigator();

export const SeasonsNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Seasons" 
                component={SeasonsScreen}
                options={{ 
                    headerShown: false
                }} 
            />
        </Stack.Navigator>
    )
};